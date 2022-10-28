import { expenseInsertValueRepo, getExpenseHistoryAllRepo, getExpenseHistoryMonthRepo, expenseDeleteValueRepo } from "../repository/expenseRopo";


//post 할때 body없을때 경우 생각.

export async function getExpenseHistoryAll(res:any){
    const data = await getExpenseHistoryAllRepo();
    res.send(data);
}

export async function getExpenseHistoryMonth(req:any, res:any){
    const data = await getExpenseHistoryMonthRepo(req);
    res.send(data);
}

export async function expenseInsertValue(req:any, res:any){
    const data = await expenseInsertValueRepo(req);
    res.sendStatus(data);
}

export async function expenseDeleteValue(req:any, res:any){
    const data = await expenseDeleteValueRepo(req);
    res.sendStatus(data);
}
