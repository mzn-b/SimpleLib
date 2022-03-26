const { app, BrowserWindow } = require('electron')

let win;

function createWindow() {
    win = new BrowserWindow({
        minWidth: 600,
        minHeight: 200,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true,
            contextIsolation: false,
            preload: __dirname + '/preload.js',
        },
        frame: false
    })
    win.maximize();
    win.show();

    win.loadURL('http://localhost:3000');
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})

const ipcMain = require('electron').ipcMain;

ipcMain.on('close-window', () => {
    app.quit();
    win.close();
    win = null;
})