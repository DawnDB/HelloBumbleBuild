export const modalConfigs = {
  contact: {
    title: "Contact Us",
    subject: "Contact Inquiry",
    endpoint: "/api/contact",
    successMessage: "Message sent successfully!",
    fields: [
      { name: "name", label: "Your Name", type: "text", required: true },
      { name: "email", label: "Your Email", type: "email", required: true },
      { name: "message", label: "Your Message", type: "textarea", required: true },
    ],
  },

  ambuzzador: {
    title: "AmbuZZador Application",
    subject: "AmbuZZador Application",
    endpoint: "/api/ambuzzador",
    successMessage: "Application sent successfully!",
    fields: [
      { name: "name", label: "Your Name", type: "text", required: true },
      { name: "email", label: "Your Email", type: "email", required: true },
      { name: "social", label: "Social Media Handle", type: "text" },
      {
        name: "message",
        label: "Why do you want to be an AmbuZZador?",
        type: "textarea",
      },
    ],
  },

  newsletter: {
    title: "Join the BuZZ Letter",
    subject: "Newsletter Subscription",
    endpoint: "/api/newsletter",
    successMessage: "You’re officially part of the BuZZ!",
    fields: [
      { name: "email", label: "Your Email", type: "email", required: true },
    ],
  },

  donate: {
    title: "Donate to Help-a-Mama",
    subject: "Help-a-Mama Donation Offer",
    endpoint: "/api/donate",
    successMessage: "Thank you so much for your generosity!",
    fields: [
      { name: "name", label: "Your Name", type: "text", required: true },
      { name: "contact", label: "Phone or Email", type: "text", required: true },
      { name: "donationType", label: "What would you like to donate?", type: "text", required: true },
      { name: "message", label: "Additional notes", type: "textarea" },
    ],
  },

  needHelp: {
    title: "Help-a-Mama Request",
    subject: "Help-a-Mama Request",
    endpoint: "/api/needhelp",
    successMessage: "Your request has been sent!",
    fields: [
      { name: "name", label: "Your Name", type: "text", required: true },
      { name: "babyAge", label: "Baby Age", type: "text" },
      { name: "babyWeight", label: "Baby Weight", type: "text" },
      { name: "situation", label: "Tell us about your situation", type: "textarea" },
    ],
  },
};