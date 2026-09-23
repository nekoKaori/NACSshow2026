document.addEventListener('DOMContentLoaded', () => {
    const data = window.testimonialData;
    if (!data) {
        console.error('window.testimonialData is missing.');
        return;
    }

    const buttons = document.querySelectorAll('.authorBtn');
    const quoteText = document.getElementById('quoteText');
    const authorName = document.getElementById('authorName');
    const authorTitle = document.getElementById('authorTitle');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const key = btn.dataset.quote;
            const item = data[key];
            if (!item) return;

            // 1. Toggle active states
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // 2. Smooth cross-fade content swap
            if (quoteText) {
                quoteText.style.opacity = '0';
                setTimeout(() => {
                    quoteText.innerHTML = item.quote;
                    if (authorName) authorName.textContent = item.name;
                    if (authorTitle) authorTitle.textContent = item.title;
                    quoteText.style.opacity = '1';
                }, 120);
            }
        });
    });
});