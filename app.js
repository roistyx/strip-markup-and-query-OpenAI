require("dotenv").config();
const express = require("express");
const OpenAiInquiryController = require("./controllers/OpenAiInquiryController");
const extractArticleMiddleware = require("./middlewares/extractArticleMiddleware");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.static("public"));

const uploadsDirectory = "uploads";

app.use("/" + uploadsDirectory, express.static(uploadsDirectory));

app.post(
  "/extract",
  extractArticleMiddleware
  // OpenAiInquiryController.SummarizeOpenAi
);

app.listen(3100, () => {
  console.log("Server is running on port 3100");
});
