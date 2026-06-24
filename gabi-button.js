console.log('GABI SCRIPT LOADED');

window.addEventListener('load', function() {
    const btn = document.querySelector('input[type="submit"]');
    console.log(btn);

    if (btn) {
        btn.value = 'Chci být mezi prvními';
    }
});
