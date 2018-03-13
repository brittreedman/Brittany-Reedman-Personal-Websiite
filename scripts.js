function expand(id, index) {
    display = document.getElementById(id).style.display;
    if (display === "none") {
        document.getElementsByClassName('expand')[index].innerHTML = "[-]";
        document.getElementById(id).style.display = "inherit";
    }
    else {
        document.getElementsByClassName('expand')[index].innerHTML = "[+]";
        document.getElementById(id).style.display = "none";
    }
}

var tabStuff = function() {
    var size = document.getElementsByClassName("navlinks").length;
    var sections = document.getElementsByClassName("transition");
    var found = false;
    for (i = size - 1; i >= 0 && sections.length != 0; i--) {
        section = sections[i].getBoundingClientRect();
        px = (section.top <= document.documentElement.clientHeight/3 && found == false) ? "3px" : "0px";
        if (px === "3px") found = true;
        document.getElementsByClassName('navlinks')[i].style.borderBottomWidth = px;
    }
};

window.onscroll = tabStuff;
 
var navColors = ["#b30039", "#6b00b3", "#006999", "#4f9900"];
var sectionColors = ["#ffe6ee", "#f9e6ff", "#e6f7ff", "#f3ffe6"];
window.onload = function() {
    navbar = document.getElementsByClassName("navlinks");
    content = document.getElementById("content");
    sections = content.childNodes;
    index = 0;
    for (i = 0; i < navbar.length; i++) {
        navbar[i].style.borderBottomColor = navColors[i];
        while (sections[index].tagName !== "DIV") index++;
        sections[index].style.background = sectionColors[i];
        content.insertBefore(makeTransition(i), sections[index]);
        index += 2; 
    }
    tabStuff();
}


function makeTransition(index) {
    topColor = (index === 0) ? sectionColors[index] : sectionColors[index - 1];
    transition = document.createElement("div");
    transition.style.background = `linear-gradient(${topColor}, ${sectionColors[index]})`;
    transition.classList.add('transition');
    transition.setAttribute("id", "tab" + (index + 1));
    return transition; 
}

