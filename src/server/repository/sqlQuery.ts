
//수입 저장 쿼리
export function insertIncome(){
    return `insert incomeTable values (?,?,?,?,?)`;
}

//지출 저장 쿼리
export function insertExpense(){
    return `insert expenseTable values (?,?,?,?,?)`;
}

//수입 전체 조회.
export function getIncomeAll(){
    return `select * from incomeTable`
}

//지출 전체 조회.
export function getExpenseAll(){
    return `select * from expenseTable`
}

//연도별 조회
export function getYear(table: string, year:string){
    return `select * from ${table} where DATE_FORMAT(createDate, '%Y') = ${year}`
}

//월별 조회
export function getMonth(table: string, month:string){
    return `select * from ${table} where DATE_FORMAT(createDate, '%M') = ${month}`
}

//지출 년월 조회
export function getExpenseMonth(year:string, month:string){
    return `select * from expenseTable 
    where DATE_FORMAT(createDate, '%Y') = ${year} AND DATE_FORMAT(createDate, '%m') in (${month})`
}

//수입 년월 조회
export function getIncomeMonth(year:string, month:string){
    return `select * from incomeTable
    where DATE_FORMAT(createDate, '%Y') = ${year} AND DATE_FORMAT(createDate, '%m') in (${month})`
}

//지출 개별요소 삭제
export function deleteExpense(id: string | number){
    return `delete from expenseTable where expenseId = ${id}`
}

//수입 개별요소 삭제
export function deleteIncome(id: string | number){
    return `delete from incomeTable where incomeId = ${id}`
}



