const packageJson = require("../../package.json");

module.exports = {
  title: "The Mid-Geek Crisis App",
  description: "The RSS feed reader of geeky news. Feed inclusion does not mean endorsement",
  author: "Multiple Authors",
  url: "https://themidgeekcrisis.app/",
  github: {
    project: "https://github.com/adamdjbrett/themidgeekcrisis-app/",
  },
  userAgent: "https://themidgeekcrisis.app",
  language: "en",
  generator: {
    name: "Eleventy",
    version: packageJson.dependencies["@11ty/eleventy"].replace("^", ""),
  },
  dateFormats: {
    readable: "d LLL yyyy", // date format used alongside posts
  },
  maxPostLength: 500, // How many characters per each post excerpt?
  maxItemsPerFeed: 10, // How many items should be fetched from each feed?
  logPrefix: "11ty-template-multiplicity", // prefix used to denote console logs generated by the template
  localCacheDuration: "7d", // For how long should network calls be cached locally? See https://www.11ty.dev/docs/plugins/fetch/#change-the-cache-duration
  cacheDirectory: ".cache", // location to store cached feed data. Change this to any other writable location if needed
  cacheDryRun: false, // change to true to disable caching entirely
  defaultArticleTitle: "Untitled", // placeholder for missing / non-existent article titles. Set to false to disable displaying titles entirely
  verbose: false, // set to true to enable additional logging messages during the build process
  clickableDescriptions: true // set to true if you want whole articles to be clickable. With false, only article titles are clickable
};
