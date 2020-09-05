let players = document.getElementById("players");


fetch('/playersAll').then(function (response) {
    return response.json()
}).then(function (data) {
    console.log(data);
    populatePlayers(data);
});

function populatePlayers(arr){
	for (x in arr) {
            let row = document.createElement("tr");
            let firstName = document.createElement("td");
            let lastName = document.createElement("td");
            let team = document.createElement("td");
            
            firstName.textContent = arr[x].firstname;
            lastName.textContent = arr[x].lastname;
            team.textContent = arr[x].team;
            
            row.append(firstName);
            row.append(lastName);
            row.append(team);
            players.append(row);
        }
}
