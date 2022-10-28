import express from "express";
import { expenseRouter } from "./routes/expenseManage";
import { incomeRouter } from "./routes/incomeManage";

const app = express();

app.use(express.static("distClient"));
app.use(express.json());

app.listen(3000, () => {
  console.log("listening on " + 3000);
});


app.use("/api/expense", expenseRouter);
app.use("/api/income", incomeRouter);
// app.use("/api/expense", expenseRouter);

