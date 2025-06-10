const express = require('express');
const app = express();

app.use(express.json());

let posts = [
  { id: 1, title: "First Post", content: "This is the first blog post." },
  { id: 2, title: "Second Post", content: "This is the second blog post." }
];

app.get('/posts', (req, res) => {
  res.json(posts);
});

app.get('/posts/:id', (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));
  if (!post) return res.status(404).json({ error: "Post not found" });
  res.json(post);
});

app.post('/posts', (req, res) => {
  const { title, content } = req.body;
  const newPost = {
    id: posts.length ? posts[posts.length - 1].id + 1 : 1,
    title,
    content
  };
  posts.push(newPost);
  res.status(201).json(newPost);
});

app.put('/posts/:id', (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));
  if (!post) return res.status(404).json({ error: "Post not found" });

  const { title, content } = req.body;
  post.title = title || post.title;
  post.content = content || post.content;
  res.json(post);
});

app.delete('/posts/:id', (req, res) => {
  const postIndex = posts.findIndex(p => p.id === parseInt(req.params.id));
  if (postIndex === -1) return res.status(404).json({ error: "Post not found" });

  posts.splice(postIndex, 1);
  res.status(204).send();
});

// 9. Handle invalid routes
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// 10. Start server on port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
