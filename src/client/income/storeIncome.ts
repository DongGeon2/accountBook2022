//수입 내역 저장
export async function saveIncome(incomeContents: (string | number | null)[]) {
  await fetch("/api/income", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(incomeContents),
  });
}
// 총 수입 내역 출력
export async function getIncomeTotal() {
  const response = await fetch("/api/income");
  if (!response) {
    return;
  }
  let incomeInfos = await response.json();
  return incomeInfos;
}

//월별 수입 내역 출력
export async function getIncomeByMonth(year: string, month: string) {
  const response = await fetch(`/api/income/${year}/${month}`);
  if (!response) {
    return;
  }
  let incomeInfos = await response.json();
  return incomeInfos;
}
