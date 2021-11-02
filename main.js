const app = require("./server");
const PORT = 8080;
const { db } = require("./server/db");

db.sync().then(() => {
  console.log("db synced!");
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
});

// app.listen(PORT, () => {
//   console.log(`Listening on port ${PORT}`);
// });
