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

export function createAll(element: elementType){
    let trel = document.createElement("tr");
    let tdDate = document.createElement("td"); 
    let tdKind = document.createElement("td"); 
    let tdType = document.createElement("td"); 
    let tdContext = document.createElement("td"); 
    let tdAmount = document.createElement("td");
    tdDate.append(element.createDate.substring(0, 10));
    if(element.incomeAmount){
        tdKind.append("수입");
        tdType.append(element.incomeType);
        tdContext.append(element.incomeContext);
        tdAmount.append(element.incomeAmount);
    }else{
        tdKind.append("지출");
        tdType.append(element.expenseType);
        tdContext.append(element.expenseContext);
        tdAmount.append(element.expenseAmount);
    }

    trel.append(tdDate);
    trel.append(tdKind);
    trel.append(tdType);
    trel.append(tdContext);
    trel.append(tdAmount);
    return trel;
}