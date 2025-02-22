const PORT = 8000;
const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

const API_KEY = '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';

app.post('/completions', async (req, res) => {
  const options = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-4',
      messages: [{ role: 'user', content: req.body.message }],
      max_tokens: 100,
    }),
  };
  try {
    const response = await fetch(
      'https://api.openai.com/v1/chat/completions',
      options
    );
    const data = await response.json();
    res.send(data);
  } catch (err) {
    console.error(err);
  }
});

app.listen(PORT, () => console.log('Your server is running on PORT'));

// https://www.youtube.com/watch?v=JJ9fkYX7q4A
