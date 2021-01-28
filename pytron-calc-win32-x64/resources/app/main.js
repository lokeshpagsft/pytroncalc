const {app, BrowserWindow} = require('electron')
const fs = require('fs');


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
        let rawdata = fs.readFileSync('./resources/app/data.json');
        data = JSON.parse(rawdata);
        if(data.process == 'running'){
            e.preventDefault()
            return false
        }
        else {
            return true
        }
    })
}


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