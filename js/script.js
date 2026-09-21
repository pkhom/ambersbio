function activateButton(button) {
    var buttons = document.getElementsByTagName('button');
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].style = ""
    }

    button.style.backgroundColor = "#191414";
    button.style.border = "medium solid #FF7500";
    button.style.fontWeight = 600;
}


const isMobile = !window.matchMedia('(hover: hover)').matches


if (isMobile) {
    document.getElementById("css").href = "css/mobile.css";
} else {
    document.getElementById("css").href = "css/desktop.css"
}
