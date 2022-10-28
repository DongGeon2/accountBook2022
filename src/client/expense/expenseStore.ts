import { sortingByDate } from "../etc/sorting";
import { createTR } from "./expenseCreateAndSelect";

interface elementType {
  expenseId: string;
  expenseContext: string;
  expenseAmount: string;
  expenseType: string;
  createDate: string;
}

export async function saveExpense(data: string[]) {
  await fetch("/api/expense", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  alert("저장완료");
}

export async function searchAllExpense(tbodyEl: HTMLTableElement, byMonthEl: HTMLInputElement) {
  const response = await fetch("/api/expense");
  const data = await response.json();

  byMonthEl.value = "";
  tbodyEl.innerHTML = "";
  let amountSum = 0;
  sortingByDate(data);
  data.forEach((element: elementType) => {
    tbodyEl.append(createTR(element));
    amountSum += Number(element.expenseAmount);
  });
  expenseSum(amountSum);
}

export async function searchMonthExpense(tbodyEl: HTMLTableElement, year: string | null, month: string | null) {
  if(!year || !month) {
    alert("날짜를 다시 설정하고 조회해 주세요.");
    expenseSum(0);
    return ;
  }

  const response = await fetch(`/api/expense/${year}/${month}`);
  const data = await response.json();

  tbodyEl.innerHTML = "";
  let amountSum = 0;
  sortingByDate(data);
  data.forEach((element: elementType) => {
    tbodyEl.append(createTR(element));
    amountSum += Number(element.expenseAmount);
  });
  expenseSum(amountSum);

  if(data.length==0){
    tbodyEl.append("요구하신 날에 지출내역이 없습니다.");
  }
}

export function expenseCleare(tbodyEl: HTMLTableElement){
  tbodyEl.innerHTML = "";
}

export function expenseSum(amountSum: Number){
  let expenseSumEl = document.querySelector("#expenseSum") as HTMLDivElement;
  expenseSumEl.innerHTML = "";
  expenseSumEl.append(`총합: ${amountSum}`);
}

export async function deleteValue(value: string){
  await fetch("/api/expense", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({"id":value}),
  });
}

export function tep(){

}