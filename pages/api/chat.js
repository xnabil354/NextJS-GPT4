import { Configuration, OpenAIApi } from "openai";

require('dotenv').config()

const configuration = new Configuration({
  apiKey: process.env.OPENAI_APIKEY,
});

const openai = new OpenAIApi(configuration);

export default async function(req, res) {
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    // messages: [{role: "user", content: "Hello world"}],
    messages: [{ "role": "system", "content": "You are a helpful assistant." }].concat(req.body.messages)
  });
  res.status(200).json({ result: completion.data.choices[0].message })
}
