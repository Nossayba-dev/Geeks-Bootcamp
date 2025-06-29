const express = require('express');
const app = express();
const postRoutes = require('./server/routes/postRoutes');

app.use(express.json());

app.use('/posts', postRoutes);

app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong' });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));