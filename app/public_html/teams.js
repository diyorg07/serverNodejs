let teams = document.getElementById("teams");


fetch('/teams').then(function (response) {
    return response.json()
}).then(function (data) {
    console.log(data);
    populateTeams(data);
});

function populateTeams(arr){
	for (x in arr) {
            let row = document.createElement("tr");
            let name = document.createElement("td");
            let score = document.createElement("td");
            let members = document.createElement("td");
            
            name.textContent = arr[x].name;
            members.textContent = [arr[x].player1, arr[x].player2, arr[x].player3]
            score.textContent = arr[x].wins + "/" + arr[x].losses + "/" + arr[x].ties;
            
            row.append(name);
            row.append(members);
            row.append(score);
            teams.append(row);
        }
}