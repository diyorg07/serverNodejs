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

app.post("/add", function (req,res) {
    console.log("New addition...");
    console.log(req.body.type); 
    let type = req.body.type
    
    if (type === "player"){
        let firstName = req.body.firstName;
        let lastName = req.body.lastName;
        let email = req.body.email;
        let pass = req.body.pass;
        
        pool.query(
            `INSERT INTO players(firstname, lastname, email, pass)
             VALUES($1, $2, $3, $4)
             RETURNING *`,
            [firstName, lastName, email, pass]
        ).then(function (response) {
            console.log("Inserted:");
            console.log(response.rows);
            res.status(200);
            res.send();
        }).catch(function (error) {
            res.status(400);
            res.send();
        });
    }	    
});
    
app.listen(port, hostname, () => {
    console.log(`Listening at: http://${hostname}:${port}`);
});
