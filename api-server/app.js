const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/v1/api/students", (req, res) => {
  //..
  const arr = [
    {
      id: 1,
      name: "student-1",
    },
    {
      id: 2,
      name: "student-2",
    },
    {
      id: 3,
      name: "student-3",
    },
  ];
  res.json(arr);
});

app.listen(8080, () => {
  console.log("server up");
});
