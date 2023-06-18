const axios = require("axios");
const cheerio = require("cheerio");

const getArticleContent = async (req, res, next) => {
  const url = req.body.url;
  try {
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);
    const articleContent = $("article").text();

    console.log("req.articleContent", typeof articleContent);

    return res.status(200).json({ text: articleContent });
  } catch (error) {
    console.error("Error:", error.message);
  }
};

module.exports = getArticleContent;
