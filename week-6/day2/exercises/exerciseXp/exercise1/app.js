const express = require("express");
const app = express();
const indexRouter = require("./routes/index");

app.use("/", indexRouter); 

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
