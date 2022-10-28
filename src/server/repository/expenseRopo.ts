import mysql from "mysql";
import { getConnection } from "./dbConnection";
import { deleteExpense, getExpenseAll, getExpenseMonth, insertExpense } from "./sqlQuery";



export async function getExpenseHistoryAllRepo() {
    return new Promise((resolve) => {
        getConnection((conn: mysql.PoolConnection) => {
            conn.query(getExpenseAll(), (err: any, rows: any) => {
                resolve(rows);
            });
            conn.release();
        });
    })
}

export async function getExpenseHistoryMonthRepo(req: any){
    return new Promise((resolve) => {
        let params = req.params;
        getConnection((conn: mysql.PoolConnection) => {
            conn.query(getExpenseMonth(params.year, params.month), req.body, (err: any, rows: any) => {
                resolve(rows);
            });
            conn.release();
        });
    });
}

export async function expenseInsertValueRepo(req: any){
    return new Promise((resolve) => {
        getConnection((conn: mysql.PoolConnection) => {
            conn.query(insertExpense(), req.body, (err: any, rows: any) => {});
            conn.release();
        });
        resolve(200);
    });
}

export async function expenseDeleteValueRepo(req: any) {
    return new Promise((resolve) => {
        getConnection((conn: mysql.PoolConnection) => {
            conn.query(deleteExpense(req.body.id), (err: any, rows: any) => {});
            conn.release();
        });
        resolve(200);
    })
}