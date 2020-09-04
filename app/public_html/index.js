let topTeams = document.getElementById("topTeams");
let recentGames = document.getElementById("recentGames");

fetch('/topTeams').then(function (response) {
    return response.json()
}).then(function (data) {
    console.log(data);
    populateTeams(data);
});

fetch('/recentGames').then(function (response) {
    return response.json()
}).then(function (data) {
    console.log(data);
    populateRecents(data);
})



function populateTeams(arr){
	for (x in arr) {
            let row = document.createElement("tr");
            let name = document.createElement("td");
            let wins = document.createElement("td");
            let losses = document.createElement("td");
            let ties = document.createElement("td");

            name.textContent = arr[x].name;
            wins.textContent = arr[x].wins;
	    losses.textContent = arr[x].losses;
	    ties.textContent = arr[x].ties;
            
            row.append(name);
            row.append(wins);
            row.append(losses);
	    row.append(ties);
            topTeams.append(row);
        }
}

function populateRecents(arr){
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
