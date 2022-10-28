import { createList } from "./createList";
import { saveIncome, getIncomeTotal, getIncomeByMonth } from "./storeIncome";

// 버튼들 호출
const byMonthBtn = document.querySelector("#byMonthBtn") as HTMLButtonElement;
const totalSearchBtn = document.querySelector(
  "#totalSearchBtn"
) as HTMLButtonElement;
const incomeSumit = document.querySelector("#incomeSumit") as HTMLButtonElement;
const backBtn = document.querySelector("#backBtn") as HTMLButtonElement;

//뒤로가기
backBtn.addEventListener("click", () => {
  location.href = "/";
});

//수입 내역 저장
incomeSumit.addEventListener("click", () => {
  const detailDateInput = document.querySelector(
    "#detailDateInput"
  ) as HTMLInputElement;
  const detailType = document.querySelector("#detailType") as HTMLSelectElement;
  const detailContext = document.querySelector(
    "#detailContext"
  ) as HTMLInputElement;
  const detailCost = document.querySelector("#detailCost") as HTMLInputElement;
  let dateValue = detailDateInput.value;
  let typeValue = detailType.value;
  let contextValue = detailContext.value;
  let detailCostValue = Number(detailCost.value);
  saveIncome([null, detailCostValue, contextValue, typeValue, dateValue]);
  alert("수입 내용이 저장되었습니다!");
});

//총 수입 내역 출력
totalSearchBtn.addEventListener("click", async () => {
  const incomeInfos = await getIncomeTotal();

  createList(incomeInfos);
});

//월별 수입 내역 출력
byMonthBtn.addEventListener("click", async () => {
  //입력에서 년,월 가져오기
  const byMonthInput = document.querySelector(
    "#byMonthInput"
  ) as HTMLInputElement;
  let year = byMonthInput.value.substring(0, 4);
  let month = byMonthInput.value.substring(5, 7);
  const incomeInfos = await getIncomeByMonth(year, month);

  createList(incomeInfos);
});
