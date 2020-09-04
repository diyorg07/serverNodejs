let addButton = document.getElementById("add");
let editButton = document.getElementById("edit");
let delButton = document.getElementById("delete");

addButton.addEventListener("click", function() {
    let url = "";
    let data = null;
    if(addButton.className === "player") {
        //get data from players.html
        getPlayerForm();
        data = {};
    }
    else if(addButton.className === "teams") {
        //get data from teams.html
        getPlayerForm();
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
});

function submitForm() {
    let container = document.getElementById("form");
    container.innerHTML = "";
}

function getPlayerForm() {
    let container = document.getElementById("form");
    let html = `<div class="form-popup" id="myForm">
                <form action="/action_page.php" class="form-container">
                    <h1>New Player</h1>
                
                    <label><b>First Name</b></label>
                    <input type="text" placeholder="Enter First Name" required>

                    <label><b>Last Name</b></label>
                    <input type="text" placeholder="Enter Last Name" required>

                    <label><b>Email</b></label>
                    <input type="text" placeholder="Enter Email" required>

                    <label><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" required>
                
                    <button type="button" onclick="submitForm()">Submit</button>
                </form>
                </div>`;
    container.innerHTML = html;
}