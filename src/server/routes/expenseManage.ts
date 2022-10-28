import express from "express";
import { expenseDeleteValue, expenseInsertValue, getExpenseHistoryAll, getExpenseHistoryMonth } from "../action/expenseAction";

export const expenseRouter = express.Router();

expenseRouter.get("/", function(req, res) {
    getExpenseHistoryAll(res);
});

expenseRouter.get("/:year/:month", function(req, res){
    getExpenseHistoryMonth(req,res)
});

expenseRouter.post("/", function(req,res){
    expenseInsertValue(req, res);
})

expenseRouter.delete("/", function(res,req){
    expenseDeleteValue(res,req);
})

  
