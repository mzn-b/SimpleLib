const { ipcRenderer } = window.require("electron");

export const closeWindow = () => {
  ipcRenderer.send("close-window");
};

export const minimizeWindow = () => {
  ipcRenderer.send("minimize-window");
};

export const maximizeWindow = () => {
  ipcRenderer.send("maximize-window");
};

/*

In case you need to debug in browser, uncomment this and comment out the code above, then open localhost:300 in browser

export const closeWindow = () => {};

export const minimizeWindow = () => {};

export const maximizeWindow = () => {};

*/
