const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");
const methodOverride = require("method-override");

require("dotenv").config();
require("../backend/config/database");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(methodOverride("_method"));
// app.use(favicon(path.join(__dirname, "build", "favicon.ico")));
app.use(express.static(path.join(__dirname, "build")));

app.use(require("../backend/config/checkToken"));

// Put API routes here, before the "catch all" route
app.use("/api/users", require("./routes/api/users"));
app.use("/api/expenses", require("./routes/api/expenses"));
app.use("/api/incomes", require("./routes/api/incomes"));

// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server
const port = process.env.PORT || 3001;

app.listen(port, function () {
  console.log(`Express app running on port ${port}`);
});
