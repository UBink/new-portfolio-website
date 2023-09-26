function toggleMenu(){
    const menu = document.querySelector("#menu-links");
    const icon = document.querySelector("#dropdown-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function nightMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    
  }