class PlayerCollection{
    constructor(){
        this.collection = [];
        this.array = [0, 0, 0, 0, 0, 0, 0];
        this.nameArray = ["bob", "jake", "john", "wes", "alex", "ty", "chris", "meg"]
    }
    add(id, name){
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
    delete(id){
        for (let p = 0; p < this.collection.length; p++) {
            if (this.collection[p].id === id){
                this.collection.splice(p, 1);
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
    }

}
class Hole{
    constructor(holeNum){
        this.holeNum = holeNum;
        this.holeScore;
    }
    setScore(score){
        this.holeScore = score;
    }
    deletePlayerHoleCount(id){
        for (let h = 0; h < arguments.length; h++) {
            const argument = arguments[h];
            
        }
    }
}
let playgen = new PlayerCollection();
