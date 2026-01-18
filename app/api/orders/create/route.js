import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { sendEmail } from "@/app/lib/email";
import {
  customerOrderEmail,
  adminOrderEmail,
} from "@/app/lib/emailTemplates";

export const runtime = "nodejs";

// 🔐 Server-side Supabase (service role)
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function POST(req) {
  try {
    const body = await req.json();
    const {
      userId,
      shippingAddressId,
      cart,
      shippingCost,
      paymentMethod,
      email,
    } = body;

    if (
      !userId ||
      !shippingAddressId ||
      !Array.isArray(cart) ||
      cart.length === 0
    ) {
      return NextResponse.json(
        { error: "Invalid order payload" },
        { status: 400 }
      );
    }

    const allowedShippingCosts = [0, 150];
    if (!allowedShippingCosts.includes(shippingCost)) {
      return NextResponse.json(
        { error: "Invalid shipping cost" },
        { status: 400 }
      );
    }

    const subtotal = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    const total = subtotal + shippingCost;

    const orderNumber = `HB-${Date.now()}-${Math.floor(
      Math.random() * 1000
    )}`;

    const { data: order, error: orderError } = await supabase
      .from("orders")
      .insert({
        user_id: userId,
        shipping_address_id: shippingAddressId,
        subtotal,
        shipping_cost: shippingCost,
        total,
        status: "pending_payment",
        payment_method: paymentMethod ?? "eft",
        order_number: orderNumber,
      })
      .select()
      .single();

    if (orderError) throw orderError;

    const items = cart.map((item) => ({
      order_id: order.id,
      product_slug: item.slug,
      product_name: item.name,
      size: item.size ?? null,
      quantity: item.quantity,
      price: item.price,
    }));

    const { error: itemsError } = await supabase
      .from("order_items")
      .insert(items);

    if (itemsError) throw itemsError;

    try {
      await sendEmail({
        to: email || process.env.EMAIL_USER,
        subject: `Your HelloBumble order ${orderNumber}`,
        html: customerOrderEmail({ orderNumber, paymentMethod }),
      });

      await sendEmail({
        to: process.env.EMAIL_USER,
        subject: `New order received: ${orderNumber}`,
        html: adminOrderEmail({ orderNumber, total, paymentMethod }),
      });
    } catch (emailErr) {
      console.error("Order email failed:", emailErr);
    }

    return NextResponse.json({ orderId: order.id, orderNumber });
  } catch (err) {
    console.error("Order creation failed:", err);
    return NextResponse.json(
      { error: "Failed to create order" },
      { status: 500 }
    );
  }
}
