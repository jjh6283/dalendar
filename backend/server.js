const Openai = require("openai");
const express = require("express");

const apiKey = require("./apiKey");

const app = express();

const client = new Openai({
	apiKey: apiKey
})

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	next();
})

app.get('/recommendation', async (req, res) => {
	const response = await client.chat.completions.create({
		model: 'gpt-4',
		messages: [
			{
				role: "user", content: req.query.message
			}
		]
	});

	res.send(response);
})

app.listen("3000", () => {
	console.log("Listening on port 3000")
})