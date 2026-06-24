console.log('GABI BUTTON LOADED');

setTimeout(function() {
    var btn = document.querySelector('input[type="submit"][name="yt0"]');

    if (btn) {
        btn.value = 'Chci být mezi prvními';
        console.log('BUTTON FOUND');
    } else {
        console.log('BUTTON NOT FOUND');
    }
}, 1000);
