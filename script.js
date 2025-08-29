document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from submitting and reloading the page

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // A simple validation example. In a real application, you would
    // send these credentials to a server for verification.
    if (username === 'admin' && password === 'password123') {
        alert('Login successful!');
        // Here you would redirect the user to another page:
        // window.location.href = 'dashboard.html';
    } else {
        alert('Invalid username or password. Please try again.');
    }
});
