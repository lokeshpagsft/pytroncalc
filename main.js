const {app, BrowserWindow, autoUpdater, dialog} = require('electron')
const fs = require('fs');
require('update-electron-app')();
const isDev = require('electron-is-dev');

function createWindow(){
    //create the browser windwow
    let win = new BrowserWindow({
        width:650,
        height:650,
        webPreferences:{
            nodeIntegration: true 
        }
    })

    //and load the index.html of the app
    win.loadFile('index.html')

    //Below code will open the DevTools
    // win.webContents.openDevTools()

    // Prevent Closing when work is running
    win.on('close', (e) => {
        var data
        // let rawdata = fs.readFileSync('data.json');
        // Use below path for the final build as the scripts is shifted to resources/app folder by default
        // let rawdata = fs.readFileSync('./resources/app/data.json'); 
        // data = JSON.parse(rawdata);
        // if(data.process == 'running'){
        //     e.preventDefault()
        //     return false
        // }
        // else {
        //     return true
        // }
    })


    if (isDev) {
        console.log('Running in development');
        win.webContents.openDevTools();

    } 
    // else {
    //     // const server = 'http://localhost:6000'
    //     // const url = `${server}/update/${process.platform}/${app.getVersion()}`
        
    //     // autoUpdater.setFeedURL({ url });
    //     // setInterval(() => {
    //     //     autoUpdater.checkForUpdates()
    //     //   }, 60000);
    // }
}

// autoUpdater.on('update-downloaded', (event, releaseNotes, releaseName) => {
//     const dialogOpts = {
//     type: 'info',
//     buttons: ['Restart', 'Later'],
//     title: 'Application Update',
//     message: process.platform === 'win32' ? releaseNotes : releaseName,
//     detail: 'A new version has been downloaded. Restart the application to apply the updates.'
//     }

//     dialog.showMessageBox(dialogOpts).then((returnValue) => {
//     if (returnValue.response === 0) autoUpdater.quitAndInstall()
//     })
// });

// autoUpdater.on('error', message => {
//     console.error('There was a problem updating the application')
//     console.error(message)
// });
  

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow)


//quit when all windows are closed
app.on('window-all-closed', ()=>{
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    // if(process.platform !== 'darwin'){
        app.quit()
    // }
})


// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.