const { app } = require('electron');
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





// In-tab html
async function LoadHTML(tabName) {
  try {
    const response = await fetch(`./channels/frontend/${tabName}.html`);
    const html = await response.text();
    return html;
  } catch (err) {
    console.error("Failed to load HTML for tab:", tabName, err);
    return "<h1>Failed to load content</h1>";
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
    if (tabName === "introduction") {
      LoadHTML("introduction").then(html => {
        this.content.innerHTML = html;
      });
    }

    if (tabName === "logistics") {
      LoadHTML("logistics").then(html => {
        this.content.innerHTML = html;
      });
    }

    if (tabName === "candidates") {
      LoadHTML("candidates").then(html => {
        this.content.innerHTML = html;
      });
    }
  }

  bindWindowControls() {
    const min = document.getElementById("min-btn");
    const close = document.getElementById("close-btn");

    min.addEventListener("click", () => {
      window.electronAPI.minimizeWindow();
    });

    close.addEventListener("click", () => {
      window.electronAPI.closeWindow();
    });
  }
}

window.addEventListener("DOMContentLoaded", () => {
  uiController.bindWindowControls();
});



const uiController = new UIController();
uiController.setActiveTab("introduction");