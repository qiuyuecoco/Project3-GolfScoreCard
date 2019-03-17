let myresult;
let newResult;

loadDoc();
loadStuff();
//redirect value of a .txt file to html
function loadDoc() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200){
            myresult = JSON.parse(this.responseText);
            console.log(myresult);
            for (let i = 0; i < myresult.courses.length; i++) {
                $(".courseSelect").append(`<option value="${myresult.courses[i].id}">${myresult.courses[i].name}</option>`)
            }
        }
    };

    xhttp.open("GET", "https://uxcobra.com/golfapi/courses", true);
    xhttp.send();
}

function loadStuff() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200){
            newResult = JSON.parse(this.responseText);
            console.log(newResult);

        }
    };

    xhttp.open("GET", "https://uxcobra.com/golfapi", true);
    xhttp.send();
}

// function loadCourse(event) {
//     constructor()
// }


//select > onChange > this.value
// https://uxcobra.com/golfapi/courses/18300
