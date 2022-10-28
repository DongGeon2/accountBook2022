import { sortingByDate } from "../etc/sorting";
import { createAll } from "./createAsset";

let backBtn = document.querySelector("#backBtn") as HTMLButtonElement;
document.addEventListener("DOMContentLoaded", getAllHistory)

interface IExpense{
    expenseContext: string;
    expenseAmount: string;
    expenseType: string;
    createDate: string;
}
interface IIncome {
    createDate: string;
    incomeType: string;
    incomeContext: string;
    incomeAmount: string;
  }

interface elementType extends IIncome, IExpense{
}

let allHistory: elementType[] = [];

async function individualHistory(url: string){
    const response = await fetch(url);
    const data = await response.json();

    data.forEach((element: elementType) => {
        allHistory.push(element);
    });
}

async function getAllHistory(){
    await individualHistory("/api/income");
    await individualHistory("/api/expense");
    loadAllHistory(allHistory)
}

function loadAllHistory(allHistory: elementType[]){
    let tbodyEl = document.querySelector("#tableContent") as HTMLTableElement;
    sortingByDate(allHistory);
    allHistory.forEach(element => {
        tbodyEl.append(createAll(element));
    });
}

backBtn.onclick = () => {
    location.href = "/";
}

