/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

export const siteMetadata = {
  title: `The Tutorial Site`,
  siteUrl: `https://www.yourdomain.tld`,
};
export const plugins = [
  "gatsby-plugin-image",
  "gatsby-plugin-sharp",
];