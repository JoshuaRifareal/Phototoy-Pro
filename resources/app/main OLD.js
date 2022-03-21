const {app, BrowserWindow} = require('electron')
const path = require('path')
// const electron = require('electron')

// const ipc = electron.ipcMain
// const dialog = electron.dialog

let win

app.once('ready', () => 
{

  let win = new BrowserWindow({
        frame: true,
        autoHideMenuBar: true,
        width: 1440,
        height: 900,
        fullscreenable: true,
        backgroundColor: '#312450',
        webPreferences: 
        { 
            devTools: true,
            nodeIntegration: true,
            contextIsolation: false,
        }
  })

    win.loadURL(path.join(__dirname, '/main.html'))

    win.on('close', function(e) 
    { 
        e.preventDefault();
        win.destroy();
    });

})