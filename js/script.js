function activateButton(button) {
  var buttons = document.getElementsByTagName('button');
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].style = ""
  }

  button.style.backgroundColor = "#FF7500";
  button.style.color = "#0A0505";
  button.style.fontWeight = 600;
}
