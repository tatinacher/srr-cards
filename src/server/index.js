import * as express from "express";
import { renderer } from "./renderer";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));

app.get("*", (req, res) => renderer(req, res));

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
