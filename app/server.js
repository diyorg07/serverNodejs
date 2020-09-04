const pg = require("pg");
const express = require("express");
const app = express();

const port = 3000;
const hostname = "ec2-18-191-187-53.us-east-2.compute.amazonaws.com";

const env = require("../env.json");
const Pool = pg.Pool;
const pool = new Pool(env);
pool.connect().then(function () {
   console.log(`Connected to database ${env.database}`);
});

app.use(express.static("public_html"));
app.use(express.json());

app.get("/index")
app.listen(port, hostname, () => {
    console.log(`Listening at: http://${hostname}:${port}`);
});
