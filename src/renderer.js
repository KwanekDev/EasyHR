const { remote } = require("electron");
const channels = document.querySelectorAll(".channel");

channels.forEach(channel => {
  channel.addEventListener("click", () => {
    channels.forEach(c => c.classList.remove("active"));
    channel.classList.add("active");
  });
});


class UIController {
  constructor() {
    this.bindWindowControls();
  }

  bindWindowControls() {
    const min = document.getElementById("min-btn");
    const close = document.getElementById("close-btn");

    min.addEventListener("click", () => {
      remote.getCurrentWindow().minimize();
    });

    close.addEventListener("click", () => {
      remote.getCurrentWindow().close();
    });
  }
}

window.addEventListener("DOMContentLoaded", () => {
  new UIController();
});