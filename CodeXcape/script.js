document.getElementById('play-game-button').addEventListener('click', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === '123') {
        window.location.href = 'game.html';
    } else {
        alert('Invalid username or password. Please try again.');
    }
});