document.addEventListener('DOMContentLoaded', function() {
    const heroSection = document.getElementById('hero');

    for (let i = 0; i < 64; i++) {
        const div = document.createElement('div');
        if (Math.floor(i / 8) % 2 === 0) {
            div.style.backgroundColor = i % 2 === 0 ? '#fff' : '#000';
        } else {
            div.style.backgroundColor = i % 2 === 0 ? '#000' : '#fff';
        }
        heroSection.appendChild(div);
    }
});