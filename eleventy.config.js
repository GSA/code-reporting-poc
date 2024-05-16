const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

const pathPrefix = process.env.BASEURL || "";

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  eleventyConfig.addPassthroughCopy("assets");

  return {
    pathPrefix,
  }
};
