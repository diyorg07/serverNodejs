let addButton = document.getElementById("add");
let editButton = document.getElementById("edit");
let delButton = document.getElementById("delete");

addButton.addEventListener("click", function() {
    let url = "";
    let data = null;
    if(addButton.className === "player") {
        //get data from players.html
        data = {};
    }
    else if(addButton.className === "teams") {
        //get data from teams.html
        data = {};
    }
    else if(addButton.className === "games") {
        //get data from games.html
        data = {};
    }
    fetch(url + `/add`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(function (response) {
        if(response.status === 200) {
            //DOM success message
        }
        else {
            //DOM bad request message
        }
    }).catch(function (error) {
        console.log(error);
    });
})
