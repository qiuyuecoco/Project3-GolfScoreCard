let numPlayer = 4;
loadCard();

function loadCard(){
    for(let p = 1; p <= numPlayer; p++){
        playgen.add(p);
        // console.log(p);
    }
}
function placePlayers() {
    $(".playerbox").html("");
    for (let p = 0; p < playgen.collection.length; p++) {
        $(".playerbox").append(
            `<div>
                <a href="#" onclick="deletePlayer(${playgen.collection[p].id})">
                    <i onclick='deletePlayer(this)' class='fas fa-trash-alt'></i>
                </a>
                <span>${playgen.collection[p].name}</span>
            </div>`);
        placeHoles(playgen.collection[p].id);
    }
}
function addPlayer(name, event) {
    switch (event.key) {
        case "Enter":
            let id = playgen.collection.length + 1;
            playgen.add(id, name);
            $(".playerinput").val("");
            $('.playerbox').html("");
            placePlayers();
            $('.playerbox').val("");
            break;
    }
}
function placeHoles(playerId){
    let numberOfHoles = aCourse.data.holes.length;
    let test = playgen.collection.find(function (player) {
        return player.id === playerId;
    });
    let i = 0;
    while (i < numberOfHoles){
        test.addHole(playerId, i + 1);
        // clear the count of holeNum when player is added/deleted
        $(".score").append(`<input id="player${playerId}Hole${i+1}" class="scoreInput" type="number">`);
        i++;
    }
    console.log("test: ", test);
}
function deletePlayer(id) {

    playgen.delete(id);
    placePlayers();
}