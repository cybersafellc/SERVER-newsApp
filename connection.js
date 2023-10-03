const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "b58w1dnnftmm0tt65slt-mysql.services.clever-cloud.com",
  user: "unbamtxiyumvahb1",
  password: "DWRsSGunMeEmiLldccpo",
  database: "b58w1dnnftmm0tt65slt",
});

module.exports = connection;
