document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tabBtn');
    const stageImg = document.getElementById('revStageImg');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetImg = tab.dataset.img;
            if (!targetImg) return;

            // 1. Update tab active state
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // 2. Instant image swap
            if (stageImg) {
                stageImg.src = targetImg;
            }
        });
    });
});