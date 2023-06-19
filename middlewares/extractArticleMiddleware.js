const axios = require("axios");
const cheerio = require("cheerio");

const getArticleContent = async (req, res, next) => {
  const url = req.body.url;
  try {
    console.log("Loading article content...");
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);
    const articleContent = $("article").text();

    req.articleContent = articleContent;
    console.log("Article content loaded.");
    next();
  } catch (error) {
    console.error("Error:", error.message);
  }
};

module.exports = getArticleContent;
