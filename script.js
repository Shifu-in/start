let coinCount = 0;

window.addEventListener('load', function() {
    // Simulate loading time
    setTimeout(function() {
        document.getElementById('loading-screen').style.display = 'none';
        document.getElementById('main-screen').style.display = 'block';
    }, 3000); // Change the timeout duration as needed

    document.getElementById('tap-square').addEventListener('click', function() {
        coinCount++;
        document.getElementById('coin-counter').innerText = coinCount;
        showCoinAnimation();
    });
});

function showCoinAnimation() {
    const animation = document.createElement('div');
    animation.classList.add('coin-animation');
    animation.innerText = '+1';
    document.body.appendChild(animation);

    setTimeout(() => {
        animation.remove();
    }, 1000);
}
