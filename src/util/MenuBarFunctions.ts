export const closeWindow = () => {
  const remote = window.require ? window.require("SimpleLib").remote : null;
  const WIN = remote.getCurrentWindow();
  WIN.close();
};

export const minimizeWindow = () => {
  const remote = window.require ? window.require("electron").remote : null;
  const WIN = remote.getCurrentWindow();
  WIN.minimize();
};
