let games = document.getElementById("games");


fetch('/gamesAll').then(function (response) {
    return response.json()
}).then(function (data) {
    console.log(data);
    populateGames(data);
});

function populateGames(arr){
	for (x in arr) {
            let row = document.createElement("tr");
            let homeTeam = document.createElement("td");
            let awayTeam = document.createElement("td");
            let score = document.createElement("td");


            homeTeam.textContent = arr[x].hometeam;
            awayTeam.textContent = arr[x].awayteam;
	        score.textContent = arr[x].homescore + " VS " + arr[x].awayscore;

            
            row.append(homeTeam);
            row.append(score);
            row.append(awayTeam);
            recentGames.append(row);
        }
}