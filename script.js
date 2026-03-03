// Fade-in animation saat scroll
const faders = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {
    faders.forEach(fader => {
        const rect = fader.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            fader.classList.add('show');
        }
    });
});

// Tombol Hubungi Saya
document.getElementById("hireBtn").addEventListener("click", function() {
    alert("Silakan hubungi saya melalui email atau Instagram 😊");
});
