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
        getForm("teams");
    }
    else if(addButton.className === "games") {
        //get data from games.html
        getForm("games");
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
    else if(type === "teams") {
        data = {
            type: "team",
            name: document.getElementById("name").value,
            player1: document.getElementById("p1").options[document.getElementById("p1").selectedIndex].value,
            player2: document.getElementById("p2").options[document.getElementById("p2").selectedIndex].value,
            player3: document.getElementById("p3").options[document.getElementById("p3").selectedIndex].value
        };
    }
    else if(type === "games") {
        data = {
            type: "game",
            hTeam: document.getElementById("t1").options[document.getElementById("t1").selectedIndex].value,
            hScore: document.getElementById("hScore").value,
            aTeam: document.getElementById("t2").options[document.getElementById("t1").selectedIndex].value,
            aScore: document.getElementById("aScore").value
        };
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
    else if(type === "teams") {
        //REPLACE TEST WITH LIST OF PLAYERS
        let html = `<label><b>Player 1</b></label>
        <select id="p1" onchange="populate(this.id,'p2')"><option value=""></option>`;
        //list of all available players for first member
        for(let i in test) {
            html += `<option value=${test[i]}>${test[i]}</option>`;
        }
        html += `</select><label><b>Player 2</b></label><select id="p2" onchange="populate(this.id,'p3')"><option value=""></option>`;
        //list of all remaining players for second member
        for(let j in test) {
            html += `<option value=${test[j]}>${test[j]}</option>`;
        }
        html += `</select><label><b>Player 3</b></label><select id="p3"><option value=""></option>`;
        //list of all remaining players for third member
        for(let l in test) {
            html += `<option value=${test[l]}>${test[l]}</option>`;
        }
        html += `</select><button type="button" onclick="submitForm('teams')">Submit</button>`;
        document.getElementById("teams").innerHTML += html;
        document.getElementById("myForm").style.display = "block";
    }
    else if(type === "games") {
        //REPLACE TEST WITH LIST OF TEAMS
        let html = `<label><b>Home Team</b></label>
        <select id="t1" onchange="populate(this.id,'t2')"><option value=""></option>`;
        //list of all available teams for home team
        for(let i in test) {
            html += `<option value=${test[i]}>${test[i]}</option>`;
        }
        html += `</select>
        <label><b>Home Team Score</b></label>
        <input id="hScore" type="text" placeholder="Enter Home Score" required>
        <label><b>Away Team</b></label><select id="t2"><option value=""></option>`;
        //list of all remaining teams for away team
        for(let j in test) {
            html += `<option value=${test[j]}>${test[j]}</option>`;
        }
        html += `</select>
        <label><b>Away Team Score</b></label>
        <input id="aScore" type="text" placeholder="Enter Away Score" required>
        <button type="button" onclick="submitForm('games')">Submit</button>`;
        document.getElementById("games").innerHTML += html;
        document.getElementById("myForm").style.display = "block";
    }
}

function populate(s1, s2) {
    console.log("test");
    let src1 = document.getElementById(s1);
    let src2 = document.getElementById(s2);
    src2.innerHTML = ``;
    for(let i = 0; i < src1.options.length; i++) {
        if(!(src1.selectedIndex === i)) {
            let option = document.createElement("option");
            option.value = src1.options[i].value;
            option.innerHTML = src1.options[i].value;
            src2.options.add(option);
        }
    }
}
