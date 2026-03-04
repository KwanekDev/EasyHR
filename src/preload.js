const { ipcRenderer } = require('electron');

window.electronAPI = {
  minimizeWindow: () => ipcRenderer.send("window-minimize"),
  closeWindow: () => ipcRenderer.send("window-close")
};