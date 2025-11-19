const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            contextIsolation: true,  // Keep renderer isolated
            nodeIntegration: false   // Don't allow Node.js in renderer
        }
    });

    win.loadFile('./src/index.html');
    // win.webContents.openDevTools(); // Open DevTools to see console
}

// This is your "backend handler" - like an API endpoint
ipcMain.on('submit-form', (event, formData) => {
    console.log('Main process received form data:', formData);
    
    // Do your backend processing here
    // Could be: save to file, database, make API call, etc.
    const firstname = formData.firstname;
    const lastname = formData.lastname;
    
    // Simulate some processing
    const result = {
        success: true,
        message: `Hello ${firstname} ${lastname}! Form processed at ${new Date().toLocaleTimeString()}`
    };
    
    // Send response back to the renderer that sent this message
    event.reply('form-response', result);
});

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});