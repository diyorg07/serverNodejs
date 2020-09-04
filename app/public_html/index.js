let topTeams = document.getElementByID("topTeams");

fetch('/').then(function (response) {
    return response.json()
}).then(function (data) {
    console.log(data);
});