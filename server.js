const express = require('express');
const OpenAI = require('openai');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

const openai = new OpenAI();

app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/api/chat', async (req, res) => {
    const { api, prompt, message, } = req.body;

    let reply;

    // Based on the user's selections, call ChatGPT
    const completion = await openai.chat.completions.create({
        messages: [
            { "role": "system", "content": prompt },
            { "role": "user", "content": message }
        ],
        model: api,
    });

    reply = completion.choices[0].message.content;

    res.json({ reply });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
