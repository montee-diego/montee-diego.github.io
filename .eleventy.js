const eleventySass = require("eleventy-sass");

module.exports = function (eleventyConfig) {
  // SASS
  eleventyConfig.addPlugin(eleventySass);

  // Set custom input and output dir
  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
