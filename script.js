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
    }
    else {
        document.querySelectorAll('p').forEach(e => e.style.color = "white");
    }
  }