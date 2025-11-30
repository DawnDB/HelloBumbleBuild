/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Images from public folder + remote CDNs
  images: {
    unoptimized: true, // Safe since you're not using Next Image optimization
    domains: [
      "res.cloudinary.com",
      "images.unsplash.com",
      "i.imgur.com",
      // Add more later if needed
    ],
  },
};

module.exports = nextConfig;
