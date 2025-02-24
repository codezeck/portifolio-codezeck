function btnMenu() {
    const nav = document.querySelector('.tab-buttons');
    if (nav.classList.contains('hidden')) {
        nav.classList.remove('hidden');
    } else if (!nav.classList.contains('hidden')){
        nav.classList.add('hidden');
    }
}
