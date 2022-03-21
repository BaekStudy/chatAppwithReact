const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose
      .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(console.log("몽고디비와 연결 성공!"))
      .catch((err) => {
        console.log(err);
      });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
