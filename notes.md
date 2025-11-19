main - has access to node.js => write mineflayer code there
renderer - handles frontend
preload - middleman

1. User fills form in index.html
2. User clicks submit button
3. renderer.js catches the submit event
4. renderer.js calls window.electronAPI.submitForm(data)
   └─> This was exposed by preload.js
5. preload.js sends IPC message to main process
6. main.js receives the message via ipcMain.on('submit-form')
7. main.js does processing (save file, call API, whatever)
8. main.js sends response back via event.reply('form-response')
9. preload.js receives it and triggers the callback
10. renderer.js updates the DOM with the response