let addButton = document.getElementById("add");
let editButton = document.getElementById("edit");
let delButton = document.getElementById("delete");

addButton.addEventListener("click", function() {
    if(addButton.className === "player") {

    }
    else if(addButton.className === "teams") {

    }
    else if(addButton.className === "games") {

    }
    else {

    }
    fetch(url + `/add`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify(data)
    }).then(function (response) {
        //Success message html here
    })
})