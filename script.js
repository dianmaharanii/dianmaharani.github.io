// Scroll fade-in effect
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.2,
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        appearOnScroll.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

// Button hubungi saya
const hireBtn = document.getElementById('hireBtn');
hireBtn.addEventListener('click', () => {
    window.location.href = 'mailto:dianmaharanisrjn@gmail.com';
});
