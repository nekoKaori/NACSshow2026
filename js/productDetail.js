document.addEventListener('DOMContentLoaded', () => {
    // Feature Data Dictionary
    const featureData = {
        digitalAir: {
            image: '../images/scwm23-free.png',
            icon: '../images/iconEnhance.svg',
            tag: 'ENHANCE',
            heading: 'USER EXPERIENCE',
            body: '<p>Our digital air machines have a user-friendly interface that simplifies the tire calibration process so customers get precise & speedy tire calibration every time.</p>',
            optional: false
        },
        smallerFootprint: {
            image: '../images/scwm23-free.png',
            icon: '../images/iconFootprint.svg',
            tag: 'COMPACT DESIGN',
            heading: 'SMALLER FOOTPRINT',
            body: '<p>Space saving design can be installed anywhere an electrical outlet and wall are available. This product is intended for outdoor use only.</p>',
            optional: false
        },
        stainlessSteel: {
            image: '../images/scwm23-free.png',
            icon: '../images/iconShield.svg',
            tag: 'DURABILITY',
            heading: 'STAINLESS STEEL',
            body: '<p>Constructed with high-grade stainless steel to ensure your machine stays durable and resistant to rust, rain, or shine in all weather conditions.</p>',
            optional: false
        },
        cashlessPayments: {
            image: '../images/scwm23-pay.png',
            icon: '../images/iconCashless.svg',
            tag: 'CONVENIENCE',
            heading: 'CASHLESS PAYMENTS',
            body: '<p>Credit card payments offer customers a simple, efficient & convenient way to pay. Also available as a Free Air model.</p>',
            optional: true
        },
        heater: {
            image: '../images/scwm23-free.png',
            icon: '../images/iconHeater.svg',
            tag: 'ALL-WEATHER',
            heading: 'INTERNAL HEATER',
            body: '<p>The internal heater prevents freeze-ups and malfunctions during freezing winter conditions, ensuring continuous operation year-round.</p>',
            optional: true
        },
        water: {
            image: '../images/scwm23-water.png',
            icon: '../images/iconWater.svg',
            tag: 'VERSATILITY',
            heading: 'INTEGRATED WATER',
            body: '<p>Attach your water source directly to our unit for an all-in-one tire care stop, serving both air inflation and radiator top-off needs.</p>',
            optional: true
        },
        colorOptions: {
            image: '../images/scwm23-colors.png',
            icon: '../images/iconCustom.svg',
            tag: 'BRANDING',
            heading: 'COLOR OPTIONS',
            body: '<p>Our machines come in one of four standard colors: Red, Yellow, Blue, and Green. We also optionally offer custom branded decals with your company logo.</p>',
            optional: false
        },
        showPrice: {
            image: '../images/scwm23-free.png',
            icon: '../images/iconPrice.svg',
            tag: 'PRICING',
            heading: 'EQUIPMENT PRICING',
            body: `
                <div class="priceBox">
                    <div class="priceRow">
                        <span class="priceLabel">Regular Price:</span>
                        <span class="priceVal">$X,XXX</span>
                    </div>
                    <div class="priceRow">
                        <span class="priceLabel">Show Special Price:</span>
                        <span class="priceVal highlight">$X,XXX</span>
                    </div>
                </div>
            `,
            optional: false
        }
    };

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
            if (mainImg.getAttribute('src') !== data.image) {
                mainImg.style.opacity = '0';
                setTimeout(() => {
                    mainImg.src = data.image;
                    mainImg.style.opacity = '1';
                }, 120);
            }

            // 3. Update Blurb details
            blurbIcon.src = data.icon;
            blurbTag.textContent = data.tag;
            blurbHeading.textContent = data.heading;
            blurbBody.innerHTML = data.body;

            // 4. Toggle Optional Badge
            if (data.optional) {
                optionalNote.style.display = 'block';
            } else {
                optionalNote.style.display = 'none';
            }
        });
    });
});