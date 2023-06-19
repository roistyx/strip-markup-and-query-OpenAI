require("dotenv").config();
const express = require("express");
const OpenAiInquiryController = require("./controllers/OpenAiInquiryController");
const extractArticleMiddleware = require("./middlewares/extractArticleMiddleware");
const tokenizeMiddleware = require("./middlewares/tokenizeMiddleware");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.static("public"));

app.post(
  "/extract",
  extractArticleMiddleware,
  OpenAiInquiryController.SummarizeOpenAi
);

app.get("/", OpenAiInquiryController.SummarizeOpenAi);

app.post("/tokenize", tokenizeMiddleware);

app.listen(3100, () => {
  console.log("Server is running on port 3100");
});
