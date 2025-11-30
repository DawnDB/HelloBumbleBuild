/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://hellobumble.co.za",
  generateRobotsTxt: true,
  sitemapSize: 7000, // splits sitemap into multiple files if >7000 URLs

  // Recommended defaults for Next.js App Router
  changefreq: "weekly",
  priority: 0.7,

  // Include all pages; none excluded
  exclude: [],

  // Robots.txt configuration
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
    ],
    additionalSitemaps: [
      "https://hellobumble.co.za/sitemap.xml", // Optional if you want to explicitly reference sitemap
    ],
  },
};
