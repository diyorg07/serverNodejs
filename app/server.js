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

//Return top 5 teams by wins
app.get("/index", function (req, res) {
    pool.query(
        `SELECT DISTINCT * 
        FROM teams 
        ORDER BY wins DESC
        FETCH first 5 ROWS only`
    ).then(function (response) {
        res.status(200);
        res.send(response.rows);
    });

});

//Return an array of Players
app.get("/player", function (req, res) {
    pool.query(
        `SELECT *
         FROM players`
    ).then(function (response) {
        res.status(200);
        res.send(response.rows)
    });
});

app.post("/add", function (req,res) {
    console.log("New addition...");
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
            console.log("Inserted: Player");
            console.log(response.rows);
            res.status(200);
            res.send();
        }).catch(function (error) {
            res.status(400);
            res.send();
        });
    }
    else if (type === "team"){
        let teamName = req.body.name;
        let player1 = req.body.player1;
        let player2 = req.body.player2;
        let player3 = req.body.player3;
        
        pool.query(
            `INSERT INTO teams(name, player1, player2, player3, wins, losses, ties)
             VALUES($1, $2, $3, $4, $5, $6, $7)
             RETURNING *`,
            [teamName, player1, player2, player3, 0, 0, 0]
        ).then(function (response) {
            console.log("Inserted: Team");
            console.log(response.rows);
        }).catch(function (error) {
            res.status(400);
            res.send();
        });
    }	    
});
    
app.listen(port, hostname, () => {
    console.log(`Listening at: http://${hostname}:${port}`);
});



