window.productData = {
    digitalAir: {
        image: '../images/productSC05SSFree.png',
        icon: '../images/iconUserExperience.svg',
        tag: 'ENHANCE',
        heading: 'USER EXPERIENCE',
        body: '<p>Our digital air machines have a user-friendly interface that simplifies the tire calibration process so customers get precise & speedy tire calibration every time.</p>',
        optional: false
    },
    LEDSign: {
        image: '../images/productSC05SSFree.png',
        icon: '../images/iconLight.svg',
        tag: 'ILLUMINATED',
        heading: 'LED SIGN',
        body: '<p>Enhance visibility and brand recognition with our illuminated LED sign, ensuring your air machine stands out even in low-light conditions.</p>',
        optional: true
    },
    stainlessSteel: {
        image: '../images/productSC05SSFree.png',
        icon: '../images/iconStainlessSteel.svg',
        tag: 'STAINLESS',            
        heading: 'STEEL',
        body: '<p>Engineered with premium stainless steel for superior rust resistance and proven durability in any climate.</p>',
        optional: false
    },
    wirelessMonitoring: {
        image: '../images/productSC05SSPay.png',
        icon: '../images/iconWireless.svg',
        tag: 'WIRELESS',
        heading: 'MONITORING',
        body: '<p>Control your air machines anywhere, anytime with real-time access through our web platform. See revenue, coin and credit card count, equipment status and more from any device – desktop, tablet, or smartphone.</p>',
        optional: true
    },
    cashlessPayments: {
        image: '../images/productSC05SSPay.png',
        icon: '../images/iconCashlessPay.svg',
        tag: 'CASHLESS',
        heading: 'PAYMENTS',
        body: '<p>Cashless payments offer customers a simple, efficient & convenient way to pay. Our machines support over 60 forms of payment.</p>',
        optional: true
    },
    vac: {
        image: '../images/productSC05SSVac.png',
        icon: '../images/iconVac.svg',
        tag: 'VACUUM',
        heading: 'ATTACHMENT',
        body: '<p>Offer more services to your customers by combining both the digital air machine and vacuum attachment into one product.</p>',
        optional: true
    },
    heater: {
        image: '../images/productSC05SSFree.png',
        icon: '../images/iconHeater.svg',
        tag: 'INTERNAL',
        heading: 'HEATER',
        body: '<p>Built-in internal heating prevents freeze-ups and downtime in harsh winter conditions, delivering dependable, year-round operation.</p>',
        optional: true
    },
    water: {
        image: '../images/productSC05SSWater.png',
        icon: '../images/iconWater.svg',
        tag: 'INTEGRATED',
        heading: 'WATER',
        body: '<p>Direct fluid line hookup expands your station beyond tire care—delivering reliable air inflation plus on-demand fluid dispensing.</p>',
        optional: true
    },
   colorOptions: {
        image: '../images/productSC05SSColors.png', // adjust to your actual SC05 color image path if different
        icon: '../images/iconCustom.svg',
        tag: 'COLOR',
        heading: 'OPTIONS',
        body: `
            <p>Choose from vibrant standard color options, or personalize your equipment with custom-branded decals featuring your company logo.</p>
            <a href="customSC05SS.html" class="blurbActionBtn">
               <span>View Custom Decals</span>
               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                   <polyline points="9 18 15 12 9 6"></polyline>
               </svg>
            </a>
        `,
        optional: false
    },
    showPrice: {
        image: '../images/productSC05SSFree.png',
        icon: '../images/iconPrice.svg',
        tag: 'EQUIPMENT',
        heading: 'PRICING',
        body: `
            <div class="priceBox">
                <div class="priceRow">
                    <span class="priceLabel">Regular Price:</span>
                    <span class="priceVal">$3,190</span>
                </div>
                <div class="priceRow">
                    <span class="priceLabel">Show Special Price:</span>
                    <span class="priceVal highlight">$2,890</span>
                </div>
            </div>
        `,
        optional: false
    }
};