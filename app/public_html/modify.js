let addButton = document.getElementById("add");
let editButton = document.getElementById("edit");
let delButton = document.getElementById("delete");

let data = null;
let test = ["a", "b", "c", "d"];

addButton.addEventListener("click", function() {
    let url = "";

    if(addButton.className === "player") {
        //get data from players.html
        getForm("player");
    }
    else if(addButton.className === "teams") {
        //get data from teams.html
        //getForm();
    }
    else if(addButton.className === "games") {
        //get data from games.html
        //getForm();
    }
});

function submitForm(type) {
    if(type === "player") {
        data = {
            type: "player",
            firstName: document.getElementById("first").value,
            lastName: document.getElementById("last").value,
            email: document.getElementById("email").value,
            pass: document.getElementById("psw").value
        };
    }
    else if(type === "team") {

    }
    console.log(data);
    document.getElementById("myForm").style.display = "none";
    fetch(`/add`, {
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
}

function getForm(type) {
    if(type ===  "player") {
        document.getElementById("myForm").style.display = "block";
    }
    else if(type === "team") {

    }
}
