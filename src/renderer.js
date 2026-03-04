const { remote } = require("electron");

class UIController {
  constructor() {
    this.bindWindowControls();
    this.bindButton();
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

  bindButton() {
    const btn = document.getElementById("main-btn");
    btn.addEventListener("click", () => {
      btn.textContent = "Kliknięto";
    });
  }
}

window.addEventListener("DOMContentLoaded", () => {
  new UIController();
});