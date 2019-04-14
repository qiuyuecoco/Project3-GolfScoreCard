let numPlayer = 4;

function loadCard(){
    if(playgen.collection.length === 0) {
        for (let p = 1; p <= numPlayer; p++) {
            playgen.addPlayers(p);
            playgen.addHoles(p);
        }
    }
}
function placePlayers() {
    $(".playerbox").html("");
    $(".score").html("");
    for (let p = 0; p < playgen.collection.length; p++) {
        $(".playerbox").append(
            `
            <div class="allPlayerInfo">
                <div class="playerInfo">
                    <a href="#" onclick="deletePlayer(${playgen.collection[p].id})">
                        <i onclick='deletePlayer(this)' class='fas fa-trash-alt'></i>
                    </a>
                    <span contenteditable="true">${playgen.collection[p].name}</span>
                </div>
                <div id="player${playgen.collection[p].id}Score" class="score"></div>
            </div>
`);
        placeHoles(playgen.collection[p].id);

    }
    for (let p = 0; p < playgen.collection.length; p++) {
        $(`<div class="inScore" id="player${playgen.collection[p].id}InScore"></div>`).insertAfter(".holeNumber9");
        $(`<div class="outScore" id="player${playgen.collection[p].id}OutScore"></div>`).insertAfter(".holeNumber18");
        $(`<div class="totScore" id="player${playgen.collection[p].id}TotScore"></div>`).insertAfter(".outScore");
    }
}
function placeHoles(playerId){
    let playerObject = playgen.collection.find(function (player) {
        return player.id === playerId;
    });
    // let playerScore = playgen.collection.find(function (score) {
    //     return score.holeScore === score;
    // });

    let numberOfHoles = playerObject.holes.length;
    let i = 0;
    let theHole;
    while (i < numberOfHoles){
        theHole = playerObject.holes[i];
        // console.log(theHole);
        $("#player"+playerId+"Score").append
        (`<input id="player${playerId}Hole${i+1}" class="scoreInput holeNumber${i+1}" type="number">`);
        let element = $("#player"+playerId+"Hole"+(i+1));
        playerScoreBind(element, theHole, playerId);
        i++;
    }
}

function setHoleValue(theHole, score) {
    theHole.setScore(score);
}

function updateInOutTot(playerId) {
    let playerObject = playgen.collection.find(function (player) {
        return player.id === playerId;
    });
    let inTot = 0;
    let outTot = 0;
    let taterTots = 0;
    for (let i = 0; i < playerObject.holes.length; i++) {
        taterTots += Number(playerObject.holes[i].holeScore);
        $("#player"+ playerObject.id +"TotScore").append(`<span>${taterTots}</span>`);
        if(playerObject.holes[i].holeNum<=9){
            inTot += Number(playerObject.holes[i].holeScore);
            $("#player"+ playerObject.id +"InScore").text(inTot);
        }
        if(playerObject.holes[i].holeNum>9){
            outTot += Number(playerObject.holes[i].holeScore);
            $("#player"+ playerObject.id +"OutScore").html(outTot);
        }
        console.log(taterTots, inTot, outTot);

    }
    // playerObject.holes[i];
    // $(".totScore").append(inScore + outScore);
}

function deletePlayer(id) {
    playgen.delete(id);
    placePlayers();
}

// playgen.addHoles()

// <!--New player input; not required (class practice example)-->
// function addPlayer(name, event) {
//     switch (event.key) {
//         case "Enter":
//             let id = playgen.collection.length + 1;
//             playgen.addPlayers(id, name);
//             $(".playerinput").val("");
//             $('.playerbox').html("");
//             placePlayers();
//             $('.playerbox').val("");
//             break;
//     }
// }
