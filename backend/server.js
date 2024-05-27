import express from "express";
import bodyParser from "body-parser";
import workflowRoutes from "./src/routes/workflowRoutes.js";

const app = express();
app.use(bodyParser.json());

app.use("/api", workflowRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
