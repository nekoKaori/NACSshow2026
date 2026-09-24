document.addEventListener('DOMContentLoaded', () => {
    const decalData = {
        airOnly: {
            title: "Air Only",
            clients: [
                { name: "Costco", image: "../images/Custom/05Costco.png" },
                { name: "Chevron", image: "../images/Custom/05Chervon.png" },
                { name: "Conserv Fuel", image: "../images/Custom/05ConservFuel.png" },
                { name: "Hills Chevron", image: "../images/Custom/05HillsChervon.png" },
                { name: "NSPD", image: "../images/Custom/05NSPD.png" },
                { name: "Pig Stop", image: "../images/Custom/05PigStop.png" },
                { name: "Silver Star", image: "../images/Custom/05SilverStar.png" },
                { name: "Tsunami Express", image: "../images/Custom/05TsunamiExpress.png" },
                { name: "Wawa", image: "../images/Custom/05Wawa.png" }
            ]
        },
        airWater: {
            title: "Air and Water",
            clients: [
                { name: "Wash City Car Wash", image: "../images/Custom/05WashCity.png" }
            ]
        },
        airVac: {
            title: "Air and Vac",
            clients: [
                { name: "Midwest Petroleum", image: "../images/Custom/05MPC.png" },
                { name: "Treesort", image: "../images/Custom/05Treesort.png" }
            ]
        },
        truckAir: {
            title: "Truck Air",
            clients: [
                { name: "Circle K", image: "../images/Custom/05CircleK.png" }
            ]
        }
    };

    const setupPills = document.getElementById('setupPills');
    const clientPills = document.getElementById('clientPills');
    const activeSlideImg = document.getElementById('activeSlideImg');
    const slideViewerCard = document.getElementById('slideViewerCard');
    const lightboxModal = document.getElementById('lightboxModal');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxCloseBtn = document.getElementById('lightboxCloseBtn');

    let currentSetupKey = 'airOnly';
    let currentClientIndex = 0;

    function switchSlide(imagePath) {
        if (activeSlideImg.getAttribute('src') === imagePath) return;
        activeSlideImg.style.opacity = '0';
        setTimeout(() => {
            activeSlideImg.src = imagePath;
            lightboxImg.src = imagePath;
            activeSlideImg.style.opacity = '1';
        }, 100);
    }

    function renderClientPills() {
        clientPills.innerHTML = '';
        const clients = decalData[currentSetupKey].clients;

        clients.forEach((client, idx) => {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = `decalPillBtn ${idx === currentClientIndex ? 'active' : ''}`;
            btn.textContent = client.name;

            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                currentClientIndex = idx;
                document.querySelectorAll('#clientPills .decalPillBtn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                switchSlide(client.image);
            });

            clientPills.appendChild(btn);
        });

        if (clients[currentClientIndex]) {
            switchSlide(clients[currentClientIndex].image);
        }
    }

    function renderSetupPills() {
        setupPills.innerHTML = '';

        Object.keys(decalData).forEach(key => {
            const setup = decalData[key];
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = `decalPillBtn ${key === currentSetupKey ? 'active' : ''}`;
            btn.innerHTML = `${setup.title} <span class="pillCount">(${setup.clients.length})</span>`;

            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                if (currentSetupKey === key) return;
                currentSetupKey = key;
                currentClientIndex = 0;

                document.querySelectorAll('#setupPills .decalPillBtn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                renderClientPills();
            });

            setupPills.appendChild(btn);
        });
    }

    function openFullscreen() {
        lightboxModal.classList.add('open');
    }

    function closeFullscreen() {
        lightboxModal.classList.remove('open');
    }

    slideViewerCard.addEventListener('click', openFullscreen);
    lightboxCloseBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        closeFullscreen();
    });
    lightboxModal.addEventListener('click', closeFullscreen);

    renderSetupPills();
    renderClientPills();
});