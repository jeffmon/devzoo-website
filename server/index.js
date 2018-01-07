const express = require("express");
const bp = require("body-parser");
const app = express();

const PORT = process.env.PORT || 3001;

const server = app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
