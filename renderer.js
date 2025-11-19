const form = document.querySelector('#userForm');
const responseDiv = document.querySelector('#response');

// Listen for form submission
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Stop normal form submission
    
    // Get form data
    const formData = {
        botusername: document.querySelector('#botusername').value,
        port: document.querySelector('#port').value,
        address: document.querySelector('#ip').value
    };
    
    console.log('Renderer: Sending form data to main process');
    
    window.electronAPI.submitForm(formData);
    responseDiv.innerHTML = '<p style="color: blue;">Processing...</p>';
});

// Listen for response from main process
window.electronAPI.onFormResponse((data) => {
    console.log('Renderer: Received response from main process', data);

    if (data.success) {
        responseDiv.innerHTML = `<p style="color: green;">${data.message}</p>`;
    } else {
        responseDiv.innerHTML = `<p style="color: red;">Error: ${data.message}</p>`;
    }
});

console.log('Renderer script loaded');