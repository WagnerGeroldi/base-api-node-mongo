import express from "express";
import router from "./routes/";
import connectMongoDB from "./database";

const app = express();
app.use(express.json());
app.use(router);


app.listen(3333, () => {
  connectMongoDB;
  console.log("Servidor rodando na porta 3333");
});
