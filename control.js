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
    $('<div class="inScore"></div>').insertAfter(".holeNumber9");
    $('<div class="outScore"></div>').insertAfter(".holeNumber18");
    $('<div class="totScore"></div>').insertAfter(".outScore");

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
        $("#player"+playerId+"Hole"+(i+1)).bind('change', function () {
            setHoleValue(theHole, this.value);
        });
        i++;
        // will bind it to the last hole & not the corresponding hole for the input location
    }
}
function setHoleValue(theHole, score) {
    theHole.setScore(score);
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
