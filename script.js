function toggleMenu(){
    const menu = document.querySelector("#menu-links");
    const icon = document.querySelector("#dropdown-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function nightMode() {
    var element = document.body;
    const text = document.querySelector('p').style.color;
    element.classList.toggle("dark-mode");
    if (text === "white") {
        document.querySelectorAll('p').forEach(e => e.style.color = "rgb(53, 53, 53)");
        document.querySelectorAll('a').forEach(e => e.style.color = "rgb(53, 53, 53)");
        document.querySelector("#menu-links").style.backgroundColor = "white";
        document.querySelectorAll("#contact-info-upper-container").backgroundColor = "rgb(250, 250, 250)";
    }
    else {
        document.querySelectorAll('p').forEach(e => e.style.color = "white");
        document.querySelectorAll('a').forEach(e => e.style.color = "white");
        document.querySelector("#menu-links").style.backgroundColor = "rgb(44, 43, 46)";
        document.querySelectorAll("#contact-info-upper-container").backgroundColor = "rgb(44, 43, 46)";
    }
  }