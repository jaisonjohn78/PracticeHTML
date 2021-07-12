let t8 = document.getElementById("t8");
let msstore = document.getElementById(`msstore`);

t8.addEventListener("click", () => {
    console.log("clicked")
    if (msstore.style.bottom =="-650px"){
        msstore.style.bottom = "100px"
        t8.style.backgroundColor ="rgb(0, 81, 202)"
    }
    else if (msstore.style.bottom = "100px") {
        t8.style.backgroundColor = "transparent"
        msstore.style.bottom = "-650px"
       
    }
})

let t1 = document.getElementById("t1");
let start = document.getElementById(`start`);

t1.addEventListener("click", () => {
    console.log("clicked")
    if (start.style.bottom =="-700px"){
        start.style.bottom = "52px"
        t1.style.backgroundColor ="rgb(0, 81, 202)"
    }
    else if (start.style.bottom = "52px") {
        t1.style.backgroundColor = "transparent"
        start.style.bottom = "-700px"
       
    }
})

let t2 = document.getElementById("t2");
let search = document.getElementById(`search`);

t2.addEventListener("click", () => {
    console.log("clicked")
    if (search.style.bottom =="-650px"){
        search.style.bottom = "52px"
        t2.style.backgroundColor ="rgb(0, 81, 202)"
    }
    else if (search.style.bottom = "52px") {
        t2.style.backgroundColor = "transparent"
        search.style.bottom = "-650px"
       
    }
})

let t7 = document.getElementById("t7");
let edge = document.getElementById(`edge`);

t7.addEventListener("click", () => {
    console.log("clicked")
    if (edge.style.bottom =="-650px"){
        edge.style.bottom = "52px"
        t7.style.backgroundColor ="rgb(0, 81, 202)"
    }
    else if (edge.style.bottom = "52px") {
        t7.style.backgroundColor = "transparent"
        edge.style.bottom = "-650px"
       
    }
})

let t4 = document.getElementById("t4");
let widgets = document.getElementById(`widgets`);

t4.addEventListener("click", () => {
    console.log("clicked")
    if (widgets.style.left =="-800px"){
        widgets.style.left = "0px"
        t4.style.backgroundColor ="rgb(0, 81, 202)"
    }
    else if (widgets.style.left = "0px") {
        t4.style.backgroundColor = "transparent"
        widgets.style.left = "-800px"
       
    }
})

let t5 = document.getElementById("t5");
let team = document.getElementById(`team`);

t5.addEventListener("click", () => {
    console.log("clicked")
    if (team.style.bottom =="-800px"){
        team.style.bottom = "52px"
        t5.style.backgroundColor ="rgb(0, 81, 202)"
    }
    else if (team.style.bottom = "52px") {
        t5.style.backgroundColor = "transparent"
        team.style.bottom = "-800px"
       
    }
})