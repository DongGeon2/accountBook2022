import { getRealDate } from "../etc/getRealDate";

interface elementType {
  expenseId: string;
  expenseContext: string;
  expenseAmount: string;
  expenseType: string;
  createDate: string;
}

export function createTR(el: elementType) {
  const trel = document.createElement("tr")
  let tdDate = document.createElement("td");
  let tdAmount = document.createElement("td");
  let tdType = document.createElement("td");
  let tdContext = document.createElement("td");
  let tdDelete = document.createElement("td");
  let deleteBtn = document.createElement("button");


  trel.setAttribute("id","expenseList");
  deleteBtn.setAttribute("id","delBtn");
  deleteBtn.textContent = "삭제";

  let dayNum = getRealDate(new Date(el.createDate.substring(0,10)));
  
  tdContext.append(el.expenseContext);  
  tdAmount.append(el.expenseAmount);
  tdType.append(el.expenseType);
  tdDate.append(dayNum);
  tdDelete.append(deleteBtn);
  

  trel.append(tdDate);
  trel.append(tdType);
  trel.append(tdContext);
  trel.append(tdAmount);
  trel.append(tdDelete);
  trel.setAttribute("id",el.expenseId);
  return trel;
}

interface FrontElementType {
  saveBtnEl: HTMLButtonElement,  searchAllBtnEl: HTMLButtonElement, searchMonthBtnEl: HTMLButtonElement,
  dateEl: HTMLInputElement, byMonthEl: HTMLInputElement,
  amountEl: HTMLInputElement, typeEl: HTMLSelectElement,  tbodyEl: HTMLTableElement,
  contentEl: HTMLInputElement, backBtnEl: HTMLButtonElement,
}
export function selectInitEl() {
  const saveBtnEl = document.querySelector("#expenseSave") as HTMLButtonElement;
  const searchAllBtnEl = document.querySelector("#expenseSearch") as HTMLButtonElement;
  const searchMonthBtnEl = document.querySelector("#expenseSearchMonth") as HTMLButtonElement;
  const dateEl = document.querySelector("#expenseDate") as HTMLInputElement;
  const amountEl = document.querySelector("#expenseAmount") as HTMLInputElement;
  const contentEl = document.querySelector("#expenseContent") as HTMLInputElement;
  const typeEl = document.querySelector("#expenseType") as HTMLSelectElement;
  const tbodyEl = document.querySelector("#expenseTbody") as HTMLTableElement;
  const backBtnEl = document.querySelector("#backBtn") as HTMLButtonElement;
  const byMonthEl = document.querySelector("#byMonth") as HTMLInputElement;
  let elements: FrontElementType = {
    saveBtnEl: saveBtnEl,
    searchAllBtnEl: searchAllBtnEl,
    searchMonthBtnEl: searchMonthBtnEl,
    dateEl: dateEl,
    amountEl: amountEl,
    contentEl: contentEl,
    typeEl: typeEl,
    tbodyEl: tbodyEl,
    backBtnEl: backBtnEl,
    byMonthEl: byMonthEl,
  };
  return elements;
}

export function selectYearAndMonth(){
  let ymEl = document.querySelector("#byMonth") as HTMLInputElement;
  let ym = {
    "year": ymEl.value.substring(0,4),
    "month": ymEl.value.substring(5,7)
  }
  return ym;
}
