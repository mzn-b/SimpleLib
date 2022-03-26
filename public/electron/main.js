const { app, BrowserWindow } = require('electron')

function createWindow() {
    const win = new BrowserWindow({
        minWidth: 600,
        minHeight: 200,
        webPreferences: {
            nodeIntegration: true
        },
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