const { remote } = require("electron");
const channels = document.querySelectorAll(".channel");


channels.forEach(channel => {
  channel.addEventListener("click", () => {
    // This is for css only
    channels.forEach(c => c.classList.remove("active"));
    channel.classList.add("active");

    // Logic for rendering content
    const tabName = channel.dataset.tab;
    uiController.setActiveTab(tabName);
  });
});

class InTabScript {
  logistics() {
    console.log("Logistics");
  }
}

class UIController {
  constructor() {
    this.content = document.querySelector(".content");
    this.currentTab = "introduction";
  }

  setActiveTab(tabName) {
    this.currentTab = tabName;
    this.renderTab(tabName);
  }

  renderTab(tabName) {
    const InScript = new InTabScript();
    if (tabName === "introduction") {
      this.content.innerHTML = `
        <h1>Welcome to EasyHR Dashboard</h1>
        <h2>test</h2>
      `;
    }

    if (tabName === "logistics") {
      this.content.innerHTML = `
        <h1>Logistics</h1>
      `;
      InScript.logistics();
    }

    if (tabName === "candidates") {
      this.content.innerHTML = `
        <h1>Candidates</h1>
      `;
    }
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
  uiController.bindWindowControls();
});



const uiController = new UIController();
uiController.setActiveTab("introduction");