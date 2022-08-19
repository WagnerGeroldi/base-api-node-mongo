import mongoose from "mongoose";

const connectMongoDB = mongoose.connect(
  "mongodb://localhost:27017/modelo-api?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"
);

export default connectMongoDB;
