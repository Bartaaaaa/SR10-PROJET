var mysql = require("mysql");
var pool = mysql.createPool({
host: "tuxa.sme.utc", //ou localhost
user: "sr10p021",
password: "cFGWV63RxPJz",
database: "sr10p021"
});
module.exports = pool;
