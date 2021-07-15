require('dotenv').config();
const cors = require('cors');
const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const PORT = process.env.PORT || 8001;
const accessTokenSecret = process.env.SECRET;

const user = {
  id: 1,
  name: 'admin',
};

const secretData = [
  { "id": 1, "text": "First" },
  { "id": 2, "text": "Second" }
]

app.use(cors());
app.use(express.json());

const generateAccessToken = name => jwt.sign(name, accessTokenSecret, { expiresIn: '1800s' });

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (token == null) return res.sendStatus(401)

  jwt.verify(token, accessTokenSecret, (err, user) => {
    console.log(err)

    if (err) return res.sendStatus(403)

    req.user = user

    next()
  })
};

app.post('/login', (req, res) => {
  const { name, password } = req.body;

  try {
    if (name === process.env.NAME && password === process.env.PASSWORD) {
      const token = generateAccessToken(user);
      res.setHeader('x-api-key', token);
      res.json({
        message: 'succes',
        token,
        user,
      });
    } else {
      res.status(403);
      res.json({
        message: 'Invalid login information',
      });
    }
  } catch (err) {
    res.status(400);
    res.json({
      message: err.message,
    })
  }
});

app.get('/user', authenticateToken, (req, res) => {
  res.json({
    message: 'logged in',
    user,
  });
});

app.get('/data', authenticateToken, (req, res) => {
  res.json(secretData);
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});