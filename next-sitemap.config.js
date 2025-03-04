/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://slackers.site',
    generateRobotsTxt: true, // (optional)
    // ...other options
  }