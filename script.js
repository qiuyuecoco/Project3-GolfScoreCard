let allCourse;
let individualCourses;

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
function individualCourse() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200){
            individualCourses = JSON.parse(this.responseText);
            console.log(individualCourses);
            for (let i = 0; i < individualCourses.length; i++) {
                $(".table").append(`individualCourses[i]`);

            }
        }
    };

    xhttp.open("GET", "https://golf-courses-api.herokuapp.com/courses/${courseid}", true);
    xhttp.send();
}

// function loadCourse(event) {
//     constructor()
// }


//select > onChange > this.value
// https://uxcobra.com/golfapi/courses/18300
