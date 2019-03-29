let allCourse;
let aCourse;

//select box for selected Course
function allCourses() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200){
            allCourse = JSON.parse(this.responseText);
            console.log(allCourse);
            for (let i = 0; i < allCourse.courses.length; i++) {
                $(".selectCourse").append(`<option value="${allCourse.courses[i].id}">${allCourse.courses[i].name}</option>`)
            }
        }
    };

    xhttp.open("GET", "https://golf-courses-api.herokuapp.com/courses", true);
    xhttp.send();
}
//individual Course information
// img extra: <img class="courseImg ${aCourse.courses[i].id}" src="aCourse.courses[i].image"/>
function individualCourse(courseID) {
    $(".container").html("");
    $(".selectTee").html("");
    $(".selectTee").append(`<option>Select difficulty: </option>`);

    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200){
            aCourse = JSON.parse(this.responseText);
            console.log(aCourse);
            for (let i = 0; i < aCourse.data.holes.length; i++) {
                $(".container").append(`<div class="courseContainer ${aCourse.data.holes[i].hole}">
                ${aCourse.data.holes[i].hole}</div>`);
            }

            for (let i = 0; i < aCourse.data.holes[0].teeBoxes.length; i++) {
                if (aCourse.data.holes[0].teeBoxes[i].teeType != "auto change location") {
                    $(".selectTee").append(`<option value="${aCourse.data.holes[0].teeBoxes[i].teeType}">
            ${aCourse.data.holes[0].teeBoxes[i].teeType}</option>`);
                }
            }
        }
    };
    xhttp.open("GET", `https://golf-courses-api.herokuapp.com/courses/${courseID}`, true);
    xhttp.send();
}
function teeType(teeType) {
    $("");
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200){
            aCourse = JSON.parse(this.responseText);
            console.log(aCourse);
            for (let i = 0; i < aCourse.data.holes.length; i++) {
                $(".container").append(`<div class="courseContainer ${aCourse.data.holes[i].hole}">
                ${aCourse.data.holes[i].hole}
                </div>`);

            }
        }
    };
    xhttp.open("GET", `https://golf-courses-api.herokuapp.com/courses/${courseID}`, true);
    xhttp.send();

}
// function loadCourse(event) {
//     constructor()
// }


//select > onChange > this.value
// https://uxcobra.com/golfapi/courses/18300
function modal() {
    $(".modal").show();
}
function closeModal(element) {
    $(element).parent().parent().parent().fadeOut();
}