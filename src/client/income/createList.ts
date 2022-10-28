interface IIncome {
  incomeId?: number;
  createDate: string;
  incomeType: string;
  incomeContext: string;
  incomeAmount: number;
}
//내역 리스트 생성
export function createList(incomeInfos: IIncome[]) {
  const tableContent = document.querySelector(
    "#tableContent"
  ) as HTMLTableElement;
  //내역이 없을 경우
  if (incomeInfos.length == 0) {
    tableContent.textContent = "요구하신 조건에 맞는 내역이 없습니다.";
    return;
  }
  tableContent.innerHTML = "";
  incomeInfos.forEach((incomeInfo: IIncome) => {
    const newTrEl = document.createElement("tr");
    const dateTdEl = document.createElement("td");
    const typeTdEl = document.createElement("td");
    const contextTdEl = document.createElement("td");
    const costTdEl = document.createElement("td");
    dateTdEl.textContent = incomeInfo.createDate.substring(0, 10);
    typeTdEl.textContent = incomeInfo.incomeType;
    contextTdEl.textContent = incomeInfo.incomeContext;
    costTdEl.textContent = incomeInfo.incomeAmount.toString();
    newTrEl.append(dateTdEl, typeTdEl, contextTdEl, costTdEl);
    tableContent.append(newTrEl);
  });
}
