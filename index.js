const { Configuration, OpenAIApi } = require("openai");

const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());
const configuration = new Configuration({
  // apiKey: "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",
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);
app.get("/", (req, res) => {
  res.send("working");
});
app.post("/convert", async (req, res) => {
  const codeInput = req.body.codeInput;
  const targetLanguage = req.body.targetLanguage;

  try {
    if (!codeInput) {
      return res.send({ message: "No code was provided" });
    }
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `convert ${codeInput} this code into ${targetLanguage} code`,
      max_tokens: 1000,
    });
    console.log(response.data.choices[0].text);
    return res.send({ message: response.data.choices[0].text });
  } catch (error) {
    console.log("entered here");
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
      res.send("Error");
    } else {
      console.log(error.message);
    }
  }
});
app.post("/debug", async (req, res) => {
  const codeInput = req.body.codeInput;

  try {
    if (!codeInput) {
      return res.send({ message: "No code was provided" });
    }
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `Please debug this code ${codeInput}`,
      max_tokens: 1000,
    });
    console.log(response.data.choices[0].text);
    return res.send({ message: response.data.choices[0].text });
  } catch (error) {
    console.log("entered here");
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
      res.send("Error");
    } else {
      console.log(error.message);
    }
  }
});
app.post("/quality", async (req, res) => {
  const codeInput = req.body.codeInput;

  try {
    if (!codeInput) {
      return res.send({ message: "No code was provided" });
    }

    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `Please check the quality of this following code: ${codeInput}`,
      max_tokens: 1000,
    });

    console.log(response.data.choices[0].text);
    return res.send({ message: response.data.choices[0].text });
  } catch (error) {
    console.log("entered here");
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
      res.send("Error");
    } else {
      console.log(error.message);
    }
  }
});
app.listen(5600, () => {
  console.log(`server is running at port 5600`);
});
