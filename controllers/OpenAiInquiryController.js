// Purpose: OpenAiInquiryController handles all requests that are related to OpenAiInquiry.

const { Configuration, OpenAIApi } = require("openai");

class OpenAiInquiryController {
  static async SummarizeOpenAi(req, res) {
    const token = req.body.token;

    const configuration = new Configuration({
      apiKey: token,
    });
    try {
      const openai = new OpenAIApi(configuration);
      // console.log("req.articleContent", req.articleContent);

      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `Summarize to an 8th grade reading level: ${req.articleContent}`,
        temperature: 1,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      });
      console.log(response.data.choices[0].text);
      return res.status(200).json({ text: response.data.choices[0].text });
    } catch (error) {
      console.error("Error:", error.message);
    }
  }
}

module.exports = OpenAiInquiryController;
