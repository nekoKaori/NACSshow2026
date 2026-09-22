document.addEventListener('DOMContentLoaded', () => {
    // Return path logic for Back button
    const urlParams = new URLSearchParams(window.location.search);
    const fromPage = urlParams.get('from');
    const backBtn = document.getElementById('backBtn');

    if (backBtn) {
        if (fromPage === 'carwash') {
            backBtn.href = 'carWashEquipmentHub.html';
        } else {
            backBtn.href = 'gasEquipmentHub.html';
        }
    }

    // Load Data Dictionary
    const featureData = window.productData;
    if (!featureData) {
        console.error('window.productData is not defined. Ensure the data file is loaded before productDetail.js.');
        return;
    }

    // DOM Elements
    const buttons = document.querySelectorAll('.featureBtn');
    const mainImg = document.getElementById('mainMachineImg');
    const blurbIcon = document.getElementById('blurbIcon');
    const blurbTag = document.getElementById('blurbTag');
    const blurbHeading = document.getElementById('blurbHeading');
    const blurbBody = document.getElementById('blurbBody');
    const optionalNote = document.getElementById('optionalNote');

    // Button Click Handling
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const featureKey = btn.dataset.feature;
            const data = featureData[featureKey];

            if (!data) return;

            // 1. Update Active Button state
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // 2. Cross-fade Machine Image if changing
            if (mainImg && mainImg.getAttribute('src') !== data.image) {
                mainImg.style.opacity = '0';
                setTimeout(() => {
                    mainImg.src = data.image;
                    mainImg.style.opacity = '1';
                }, 120);
            }

            // 3. Update Blurb details
            if (blurbIcon) blurbIcon.src = data.icon;
            if (blurbTag) blurbTag.textContent = data.tag;
            if (blurbHeading) blurbHeading.textContent = data.heading;
            if (blurbBody) blurbBody.innerHTML = data.body;

            // 4. Toggle Optional Badge
            if (optionalNote) {
                optionalNote.style.display = data.optional ? 'block' : 'none';
            }
        });
    });
});