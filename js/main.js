// --- EQUIPMENT FULL-PAGE SLIDER CONTROLS ---

function slideDown() {
    const track = document.getElementById('slideTrack');
    if (track) {
        track.classList.add('show-matrix');
    }
}

function slideUp() {
    const track = document.getElementById('slideTrack');
    if (track) {
        track.classList.remove('show-matrix');
    }
}

// --- IPAD TOUCH SWIPE DETECTION ---

let touchStartY = 0;

window.addEventListener('touchstart', (e) => {
    touchStartY = e.touches[0].clientY;
}, { passive: true });

window.addEventListener('touchend', (e) => {
    const touchEndY = e.changedTouches[0].clientY;
    const swipeDelta = touchStartY - touchEndY;
    const track = document.getElementById('slideTrack');

    if (!track) return;

    // Swiped Up -> Show Comparison Matrix
    if (swipeDelta > 60 && !track.classList.contains('show-matrix')) {
        slideDown();
    }
    // Swiped Down -> Return to Machine Grid
    else if (swipeDelta < -60 && track.classList.contains('show-matrix')) {
        slideUp();
    }
}, { passive: true });