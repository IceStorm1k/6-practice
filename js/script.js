document.body.addEventListener('keypress', e => {
    if (e.type === 'keypress') {
        let h1 = document.querySelector('h1');
        let h2 = document.querySelector('h2');

        h1.innerHTML = 'You pressed: <span class="key">' + e.key + '</span>';
        h2.textContent = e.keyCode;

        h2.classList.add('bordered');
    }
});
