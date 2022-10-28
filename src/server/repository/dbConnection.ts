import mysql from "mysql";

let pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "1q2w3e4r",
    database: "accountbook",
    connectionLimit: 30
});

export function getConnection(callback: any){
    pool.getConnection(function(err, conn) {
        if(err){
            throw err;
        }
        callback(conn);
    });
}







