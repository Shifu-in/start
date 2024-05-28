window.addEventListener('load', function() {
    // Simulate loading time
    setTimeout(function() {
        document.getElementById('loading-screen').style.display = 'none';
        document.getElementById('main-screen').style.display = 'block';
    }, 3000); // Change the timeout duration as needed

    document.getElementById('start-button').addEventListener('click', function() {
        alert('Game Started!');
        // Add logic to start the game
    });
});
