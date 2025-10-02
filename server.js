const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

// Lidhja me MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/mycrud', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Shembull Modeli (User)
const User = mongoose.model('User', new mongoose.Schema({
  name: String,
  email: String
}));

// CRUD Routes
// CREATE
app.post('/users', async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.send(user);
});

// READ
app.get('/users', async (req, res) => {
  const users = await User.find();
  res.send(users);
});

// UPDATE
app.put('/users/:id', async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(user);
});

// DELETE
app.delete('/users/:id', async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.send({ message: 'User deleted' });
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
