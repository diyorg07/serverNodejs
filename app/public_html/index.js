let topTeams = document.getElementById("topTeams");

fetch('/index').then(function (response) {
    return response.json()
}).then(function (data) {
    console.log(data);
    populateTable(data);
});

function populateTable(arr){
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
