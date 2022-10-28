import mysql from "mysql";
import { getConnection } from "./dbConnection";
import { deleteIncome, getIncomeAll, getIncomeMonth, insertIncome } from "./sqlQuery";



export async function getIncomeHistoryAllRepo() {
    return new Promise((resolve) => {
        getConnection((conn: mysql.PoolConnection) => {
            conn.query(getIncomeAll(), (err: any, rows: any) => {
                resolve(rows);
            });
            conn.release();
        });
    })
}

export async function getIncomeHistoryMonthRepo(req: any){
    return new Promise((resolve) => {
        let params = req.params;
        getConnection((conn: mysql.PoolConnection) => {
            conn.query(getIncomeMonth(params.year, params.month), req.body, (err: any, rows: any) => {
                resolve(rows);
            });
            conn.release();
        });
    });
}

export async function incomeInsertValueRepo(req: any){
    return new Promise((resolve) => {
        getConnection((conn: mysql.PoolConnection) => {
            conn.query(insertIncome(), req.body, (err: any, rows: any) => {});
            conn.release();
        });
        resolve(200);
    });
}

export async function incomeDeleteValueRepo(req: any) {
    return new Promise((resolve) => {
        getConnection((conn: mysql.PoolConnection) => {
            conn.query(deleteIncome(req.body.id), (err: any, rows: any) => {});
            conn.release();
        });
        resolve(200);
    })
}