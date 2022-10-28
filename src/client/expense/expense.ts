import { selectInitEl, selectYearAndMonth } from "./expenseCreateAndSelect";
import { saveExpense, searchAllExpense, searchMonthExpense,
  expenseCleare, expenseSum, deleteValue } from "./expenseStore";


enum preHistory {
    Start = "Start",
    AllHistory = "AllHistory",
    MonthHistory = "MonthHistory",
}
interface FrontElementType {
  saveBtnEl: HTMLButtonElement,  searchAllBtnEl: HTMLButtonElement, searchMonthBtnEl: HTMLButtonElement,
  dateEl: HTMLInputElement, byMonthEl: HTMLInputElement,
  amountEl: HTMLInputElement, typeEl: HTMLSelectElement,  tbodyEl: HTMLTableElement,
  contentEl: HTMLInputElement, backBtnEl: HTMLButtonElement,
}

class expnseClass {
  saveBtnEl: HTMLButtonElement;  searchAllBtnEl: HTMLButtonElement; searchMonthBtnEl: HTMLButtonElement; 
  dateEl: HTMLInputElement; byMonthEl: HTMLInputElement;
  amountEl: HTMLInputElement; typeEl: HTMLSelectElement;  tbodyEl: HTMLTableElement;  
  contentEl: HTMLInputElement; backBtnEl: HTMLButtonElement;
  preStatus: { Status: preHistory ; year: string | null; month: string | null; };
  constructor({ ...elements }: FrontElementType) {
    this.saveBtnEl = elements.saveBtnEl;
    this.searchAllBtnEl = elements.searchAllBtnEl;
    this.searchMonthBtnEl = elements.searchMonthBtnEl;
    this.dateEl = elements.dateEl;
    this.amountEl = elements.amountEl;
    this.contentEl = elements.contentEl;
    this.typeEl = elements.typeEl;
    this.tbodyEl = elements.tbodyEl;
    this.backBtnEl = elements.backBtnEl;
    this.byMonthEl = elements.byMonthEl;
    this.preStatus = {Status: preHistory.Start , year:null, month:null};

    this.registerSaveBtn();
    this.registerSearchBtn();
    this.registerDelteBtn();
  }

  registerSaveBtn() {
    this.saveBtnEl.onclick = async () => {
      let amount = this.amountEl.value;
      let context = this.contentEl.value;
      let type = this.typeEl.value;
      let day = this.dateEl.value;

      let data = ["0", amount, context, type, day];

      await saveExpense(data);
      this.getSumOfHistoryValue();

      this.dateEl.value = "";
      this.amountEl.value = "";
      this.contentEl.value = "";
      this.typeEl.value = "";
    };
  }

  registerSearchBtn() {
    this.searchAllBtnEl.onclick = async () => {
      expenseCleare(this.tbodyEl);
      await searchAllExpense(this.tbodyEl, this.byMonthEl);
      this.preStatus = {Status:preHistory.AllHistory, year:null, month:null};
    };

    this.searchMonthBtnEl.onclick = async () => {
      let yearMonth = selectYearAndMonth();
      expenseCleare(this.tbodyEl);
      await searchMonthExpense(this.tbodyEl, yearMonth.year, yearMonth.month);
      this.preStatus = {Status:preHistory.MonthHistory, year:yearMonth.year, month:yearMonth.month}
    }

    this.backBtnEl.onclick = () => {
      location.href = "/";
    }
  }

  registerDelteBtn(){
    document.addEventListener("click", async (event) => {
      if(event.target instanceof HTMLButtonElement){
        if(event.target.id == "delBtn"){
          let trel = event.target.closest("tr") as HTMLTableRowElement;
          let dbId = trel.id;
          trel.remove();
          deleteValue(dbId);
          this.getSumOfHistoryValue();
        }
      }
    });
  };

  getSumOfHistoryValue(){
    if(this.preStatus.Status == "AllHistory") {
      searchAllExpense(this.tbodyEl, this.byMonthEl);
    }
    else if(this.preStatus.Status == "MonthHistory" && this.preStatus.year && this.preStatus.month) {
      searchMonthExpense(this.tbodyEl, this.preStatus.year, this.preStatus.month);
    }
  }
}


new expnseClass(selectInitEl());

