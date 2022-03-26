const {ipcRenderer} = window.require('electron'); 

export const closeWindow = () => {
  console.log(ipcRenderer);
  ipcRenderer.send("close-window");
};
