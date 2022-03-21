const {app, BrowserWindow} = require('electron')
const path = require('path')
// const electron = require('electron')

// const ipc = electron.ipcMain
// const dialog = electron.dialog

let mainWindow
let splashScreenWindow

app.whenReady().then(()=> {

    // splash screen create
    splashScreenWindow = new BrowserWindow({
        icon: __dirname + '/www.photopea.com/promo/thumb256-eggplant.ico', 
        width: 614, 
        height: 438, 
        frame: false, 
        transparent: true,
        // backgroundColor: '#252525',
        alwaysOnTop: true, 
    });

    // splash screen load
    splashScreenWindow.loadURL(path.join(__dirname, './splash/splash.html'))
    splashScreenWindow.center();

    // main window create
    mainWindow = new BrowserWindow({
        icon: __dirname + '/www.photopea.com/promo/thumb256-eggplant.ico', 
        frame: true,
        autoHideMenuBar: true,
        width: 1440,
        height: 900,
        fullscreenable: true,
        backgroundColor: '#252525', 
        show: false,
        webPreferences: { 
            backgroundThrottling: false, 
            nodeIntegration: true,
            devTools: true,
            contextIsolation: false, 
        } 
    });

    mainWindow.setIcon(path.join(__dirname, '/www.photopea.com/promo/thumb256-eggplant.ico'));

    // main window load
    mainWindow.loadURL(path.join(__dirname, '/main.html'))

    // main window show
    mainWindow.once('ready-to-show', () => {
        mainWindow.show();
        // splash screen close
        setTimeout(function () {
            splashScreenWindow.destroy();
        }, 3000);

        // mainWindow.webContents.openDevTools()
    })

    // main window close
    mainWindow.on('close', function(e) 
    { 
        e.preventDefault();
        mainWindow.destroy();
        splashScreenWindow.destroy();
    });

})
    