const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.3 });

document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});
document.getElementById('showImageBtn').addEventListener('click', function () {
    document.getElementById('imageContainer').style.display = 'block';
    this.style.display = 'none';
});