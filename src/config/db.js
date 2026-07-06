// const mongoose = require("mongoose");

// function connectToDB() {
//   mongoose
//     .connect(process.env.MONGO_URI)
//     .then(() => {
//       console.log("Server is connected to DB");
//     })
//     .catch((err) => {
//       console.error(err);
//       process.exit(1);
//     });
// }

// module.exports = connectToDB;





const mongoose = require("mongoose");

function connectToDB() {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("Server is connected to DB");
    })
    .catch((err) => {
      console.error("Full error:");
      console.dir(err, { depth: null });

      if (err.cause) {
        console.log("\nCause:");
        console.dir(err.cause, { depth: null });
      }

      process.exit(1);
    });
}

module.exports = connectToDB;