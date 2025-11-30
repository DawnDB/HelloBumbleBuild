"use client";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[url('/pastel-marble.jpg')] bg-cover bg-center bg-no-repeat flex items-center justify-center px-4 py-10">
      
      {/* TEXT BOX */}
      <div className="bg-whiteOverlay backdrop-blur-sm rounded-2xl shadow-soft border border-black/10 w-full max-w-xl p-6 md:p-8 space-y-6">

        {/* Heading */}
        <div className="text-center space-y-2 font-description">
          <h1 className="text-3xl font-bold text-black">Contact HelloBumble</h1>
          <p className="text-sm text-black/80">
            We'd love to hear from you! Reach out to us via phone, email or your favorite social platform.
          </p>
        </div>

        {/* Contact Info */}
        <div className="space-y-2 text-center font-description">
          <p className="text-black text-lg">
            Phone: <a href="tel:0817676829" className="underline text-palePurpleClickable">0817676829</a>
          </p>
          <p className="text-black text-lg">
            Email: <a href="mailto:dawn@hellobumble.co.za" className="underline text-palePurpleClickable">dawn@hellobumble.co.za</a>
          </p>
        </div>

        {/* Icons (NO BOX) */}
        <div className="flex justify-center gap-6 mt-4">

          {/* Whatsapp */}
          <a 
            href="https://wa.me/27817676829" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-10 h-10"
          >
            <svg viewBox="0 0 32 32" fill="none">
              <path
                fill="#25D366"
                d="M16 2.667c-7.364 0-13.333 5.97-13.333 13.333 0 2.353.607 4.65 1.76 6.667L2.667 29.333l7.01-1.733A13.22 13.22 0 0 0 16 29.333c7.364 0 13.333-5.97 13.333-13.333S23.364 2.667 16 2.667Z"
              />
              <path
                fill="#fff"
                d="M23.08 19.547c-.354-.177-2.09-1.035-2.414-1.152-.324-.118-.56-.177-.795.177-.236.354-.913 1.152-1.12 1.389-.207.236-.413.266-.767.089-.354-.177-1.495-.55-2.848-1.755-1.052-.94-1.76-2.1-1.966-2.454-.207-.354-.022-.545.155-.721.159-.157.354-.413.53-.62.177-.207.236-.354.354-.59.118-.236.059-.443-.03-.62-.089-.177-.795-1.92-1.09-2.63-.286-.687-.578-.595-.795-.605-.206-.01-.443-.012-.679-.012-.236 0-.62.089-.944.443-.324.354-1.24 1.209-1.24 2.948 0 1.739 1.27 3.417 1.447 3.653.177.236 2.5 3.815 6.058 5.348 3.558 1.533 3.558 1.022 4.198.955.64-.066 2.09-.853 2.383-1.68.295-.827.295-1.536.207-1.68-.089-.147-.325-.236-.678-.414Z"
              />
            </svg>
          </a>

          {/* Facebook */}
          <a 
            href="https://www.facebook.com/share/19GRGDckTa/"
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10"
          >
            <svg viewBox="0 0 24 24" fill="#1877F2">
              <path d="M24 12.073C24 5.404 18.627 0 12 0S0 5.404 0 12.073C0 18.1 4.388 23.096 10.125 24v-8.438H7.078v-3.49h3.047V9.356c0-3.016 1.792-4.688 4.533-4.688 1.313 0 2.686.235 2.686.235v2.953h-1.513c-1.49 0-1.953.93-1.953 1.886v2.26h3.328l-.532 3.49h-2.796V24C19.612 23.096 24 18.1 24 12.073Z"/>
            </svg>
          </a>

          {/* Instagram */}
          <a 
            href="https://www.instagram.com/_hellobumble_?igsh=NmN5bGt6ODI5Y2wz"
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10"
          >
            <svg viewBox="0 0 24 24">
              <defs>
                <linearGradient id="IG" x1="0%" x2="100%" y1="0%" y2="100%">
                  <stop offset="0%" stopColor="#f58529" />
                  <stop offset="30%" stopColor="#dd2a7b" />
                  <stop offset="60%" stopColor="#8134af" />
                  <stop offset="100%" stopColor="#515bd4" />
                </linearGradient>
              </defs>
              <rect width="24" height="24" rx="6" fill="url(#IG)" />
              <path
                fill="#fff"
                d="M12 7.2a4.8 4.8 0 1 0 0 9.6 4.8 4.8 0 0 0 0-9.6Zm0 7.8a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm4.95-8.55a1.125 1.125 0 1 0-2.25 0 1.125 1.125 0 0 0 2.25 0Z"
              />
            </svg>
          </a>

          {/* TikTok */}
          <a 
            href="https://www.tiktok.com/@_hellobumble_?_r=1&_t=ZM-91g12nM1vf2"
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10"
          >
            <svg viewBox="0 0 48 48">
              <path
                fill="#000"
                d="M31 6c1.5 2 3.7 3.4 6.3 3.7V16c-2.4-.1-4.8-.8-6.9-2v14.1c0 6.6-5.4 12-12 12S6.4 34.7 6.4 28.1c0-5.9 4.3-10.8 9.9-11.8v7.3A4.5 4.5 0 1 0 21 28v-22h10Z"
              />
              <path
                fill="#EE1D52"
                d="M31 6v3.6c-2-.5-3.8-1.5-5.3-2.9V4c1.6.9 3.3 1.4 5.3 2Z"
              />
              <path
                fill="#69C9D0"
                d="M31 14c2 1.2 4.4 1.9 6.9 2v3.9c-3.2-.2-6.2-1.2-8.9-2.9v13.1c0 6.6-5.4 12-12 12-1.4 0-2.8-.3-4-.7 2 1.2 4.2 1.9 6.6 1.9 6.6 0 12-5.4 12-12V14Z"
              />
            </svg>
          </a>

        </div>
      </div>
    </div>
  );
}
