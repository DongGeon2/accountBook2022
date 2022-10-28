import express from "express"
import { getIncomeHistoryAll, getIncomeHistoryMonth, incomeDeleteValue, incomeInsertValue } from "../action/incomeAction";

export const incomeRouter = express.Router();

incomeRouter.get("/", function(req, res){
    getIncomeHistoryAll(res);
})

incomeRouter.get("/:year/:month", function(req,res){
    getIncomeHistoryMonth(req,res);
})

incomeRouter.post("/", function(req, res){
    incomeInsertValue(req,res);
})

incomeRouter.delete("/", function(req,res){
    incomeDeleteValue(res,req);
})

