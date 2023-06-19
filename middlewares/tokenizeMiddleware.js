const OpenAiAuth = async (req, res, next) => {
  req.token = req.body.token;
  console.log("req.token", req.token);
  next();
};

module.exports = OpenAiAuth;
