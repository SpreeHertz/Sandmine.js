const { contextBridge, ipcRenderer } = require('electron');


contextBridge.exposeInMainWorld('electronAPI', {
    submitForm: (formData) => {
        ipcRenderer.send('submit-form', formData);
    },
    onFormResponse: (callback) => {
        ipcRenderer.on('form-response', (event, data) => {
            callback(data);
        });
    }
});

console.log('Preload script loaded');