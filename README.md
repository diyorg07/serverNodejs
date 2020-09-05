Ping Pong Tracket Project

Steps to run this on your local machine.

1. If you dont have Node.js, install it priot to doing this.
2. git clone master branch.
3. Create your own psql database containing tables for players, teams, and games.
    a. Players - firstname, lastname, email, pass, team
    b. Teams - name, player1, player2, player3, wins, losses, ties
    c. Games - hometeam, homescore, awayteam, awayscore, winner
4. Edit env.json to contain your psql user, database, and password
5. Edit server.js to have hostname = "localhost"
6. npm install
7. node server.js
