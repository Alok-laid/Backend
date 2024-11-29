const express = require("express");

const app = express();

let users = [
  {
    firstName: "Alok",
    kidneys: [
      {
        healthy: true,
      },
      { healthy: false },
    ],
  },
];

app.use(express.json());

app.get("/", function (req, res) {
  //find number of  Total Kidneys, Healthy Kidneys, Unhealthy Kidneys.
  const alokKidneys = users[0].kidneys;
  const totalKidneys = alokKidneys.length;
  let numberOfHealthyKidneys = 0;
  for (let i = 0; i < alokKidneys.length; i++) {
    if (alokKidneys[i].healthy) {
      numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
    }
  }
  const numberOfUnhealthyKidneys = totalKidneys - numberOfHealthyKidneys;
  res.json({
    totalKidneys,
    numberOfHealthyKidneys,
    numberOfUnhealthyKidneys,
  });
});

app.post("/", function (req, res) {
  //add one more property to kidneys ID.
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy,
  });
  res.json({
    msg: "Done!",
  });
});

app.put("/", function (req, res) {
  //updates the condition of the kidney.
  for (let i = 0; i < users[0].kidneys.length; i++) {
    users[0].kidneys.healthy = true;
  }
  res.json({
    msg: "All Kidneys Updated.
  });
});

app.delete("/", function (req, res) {});

app.listen(3000);
console.log("hi");
