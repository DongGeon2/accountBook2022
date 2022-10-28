import { getIncomeHistoryAllRepo, getIncomeHistoryMonthRepo, incomeDeleteValueRepo, incomeInsertValueRepo } from "../repository/incomeRepo";


export async function getIncomeHistoryAll(res: any){
    const data = await getIncomeHistoryAllRepo();
    res.send(data);
}

export async function getIncomeHistoryMonth(req: any, res: any){
    const data = await getIncomeHistoryMonthRepo(req);
    res.send(data);
}

export async function incomeInsertValue(req: any, res: any){
    const data = await incomeInsertValueRepo(req);
    res.sendStatus(data);
}

export async function incomeDeleteValue(req: any, res: any){
    const data = await incomeDeleteValueRepo(req);
    res.sendStatus(data);;
}