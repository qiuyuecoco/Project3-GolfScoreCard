class PlayerCollection{
    constructor(){
        this.collection = [];
        this.nameArray = ["bob", "jake", "john", "wes", "alex", "ty", "chris", "meg"]
    }
    addPlayers(id, name){
        let myname;
        let random = Math.floor(Math.random() * this.nameArray.length);
        if(name === undefined) {
            myname = this.nameArray[random];
        }
            else{
                myname = name;
            }
        this.collection.push(new Player(id, myname, this.array));
        this.nameArray.splice(random, 1);
    }
    addHoles(playerId){
        let numberOfHoles = aCourse.data.holes.length;
        let i = 0;
        let playerObject = playgen.collection.find(function (player) {
            return player.id === playerId;
        });
        while (i < numberOfHoles){
            playerObject.addHole(playerId, i + 1);
            i++;
        }
        console.log("playerObject: ", playerObject);
    }
    delete(id){
        for (let p = 0; p < this.collection.length; p++) {
            if (this.collection[p].id === id){
                this.collection.splice(p, 1);
                return;
            }
        }
    }
}
class Player{
    constructor(id, name, score){
        this.score = score;
        this.name = name;
        this.id = id;
        this.holes = [];
    }
    addHole(playerId, holeNumber){
        //append an input tied to the player
        let hole = new Hole(holeNumber);
        this.holes.push(hole);
        // playerId.value = holeNumber;
        // holeNumber.addEventListener("change", this, false);
    }
}
class Hole{
    constructor(holeNum){
        this.holeNum = holeNum;
        this.holeScore = 0;
    }
    setScore(score){
        this.holeScore = score;
        console.log(this);
    }
}
// function Binding(b) {
//     _this = this;
//     this.elementBindings = [];
//     this.value = b.object[b.property];
//     this.valueGetter = function(){
//         return _this.value;
//     }
//     this.valueSetter = function(val){
//         _this.value = val;
//         for (let i = 0; i < _this.elementBindings.length; i++) {
//             let binding=_this.elementBindings[i];
//             binding.element[binding.attribute] = val;
//         }
//     }
//     this.addBinding = function(element, attribute, event){
//         let binding = {
//             element: element,
//             attribute: attribute
//         }
//         if (event){
//             element.addEventListener(event, function(event){
//                 _this.valueSetter(element[attribute]);
//             });
//             binding.event = event;
//         }
//         this.elementBindings.push(binding);
//         element[attribute] = _this.value;
//         return _this;
//     }
//
//     Object.defineProperty(b.object, b.property, {
//         get: this.valueGetter,
//         set: this.valueSetter
//     });
//
//     b.object[b.property] = this.value;
// }
//
// function playerScoreBind() {
//     for (let ph = 0; ph < myInputElement1.length; ph++) {
//         const myInputElement1Element = myInputElement1[ph];
//
//     }
// }
// var playerHoleObject = {a:123};
// var myInputElement1 = document.getElementById("myText1")
// var myInputElement2 = document.getElementById("myText2")
// var myDOMElement = document.getElementById("myDomElement")
//
// new Binding({
//     object: obj,
//     property: "a"
// })
//     .addBinding(myInputElement1, "value", "keyup")
//     .addBinding(myInputElement2, "value", "keyup")
//     .addBinding(myDOMElement, "innerHTML")
//
// obj.a = 456;

// attempt to assign holeScore to grab for calculations
// let playerHoles = playgen.holeScore;

let playgen = new PlayerCollection();



