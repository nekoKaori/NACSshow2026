window.productData = {
    digitalAir: {
        image: '../images/productSCWM23Free.png',
        icon: '../images/iconUserExperience.svg',
        tag: 'ENHANCE',
        heading: 'USER EXPERIENCE',
        body: '<p>Our digital air machines have a user-friendly interface that simplifies the tire calibration process so customers get precise & speedy tire calibration every time.</p>',
        optional: false
    },
    smallerFootprint: {
        image: '../images/productSCWM23Free.png',
        icon: '../images/iconSmallerFootprint.svg',
        tag: 'SMALLER',
        heading: 'FOOTPRINT',
        body: '<p>Space saving design can be installed anywhere an electrical outlet and wall are available. This product is intended for outdoor use only.</p>',
        optional: false
    },
    stainlessSteel: {
        image: '../images/productSCWM23Free.png',
        icon: '../images/iconStainlessSteel.svg',
        tag: 'STAINLESS',            
        heading: 'STEEL',
        body: '<p>Engineered with premium stainless steel for superior rust resistance and proven durability in any climate.</p>',
        optional: false
    },
    wirelessMonitoring: {
        image: '../images/productSCWM23Pay.png',
        icon: '../images/iconWireless.svg',
        tag: 'WIRELESS',
        heading: 'MONITORING',
        body: '<p>Control your air machines anywhere, anytime with real-time access through our web platform. See revenue, coin and credit card count, equipment status and more from any device – desktop, tablet, or smartphone.</p>',
        optional: true
    },
    cashlessPayments: {
        image: '../images/productSCWM23Pay.png',
        icon: '../images/iconCashlessPay.svg',
        tag: 'CASHLESS',
        heading: 'PAYMENTS',
        body: '<p>Cashless payments offer customers a simple, efficient & convenient way to pay. Our machines support over 60 forms of payment.</p>',
        optional: true
    },
    heater: {
        image: '../images/productSCWM23Free.png',
        icon: '../images/iconHeater.svg',
        tag: 'INTERNAL',
        heading: 'HEATER',
        body: '<p>Built-in internal heating prevents freeze-ups and downtime in harsh winter conditions, delivering dependable, year-round operation.</p>',
        optional: true
    },
    water: {
        image: '../images/productSCWM23Water.png',
        icon: '../images/iconWater.svg',
        tag: 'INTEGRATED',
        heading: 'WATER',
        body: '<p>Direct fluid line hookup expands your station beyond tire care—delivering reliable air inflation plus on-demand fluid dispensing.</p>',
        optional: true
    },
    colorOptions: {
        image: '../images/productSCWM23Colors.png',
        icon: '../images/iconCustom.svg',
        tag: 'COLOR',
        heading: 'OPTIONS',
        body: `
            <p>Choose from four vibrant standard color choices (red, yellow, blue, or green), or personalize your equipment with custom-branded decals featuring your company logo.</p>
            <a href="customSCWM23.html" class="blurbActionBtn">
               <span>View Custom Decals</span>
               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                   <polyline points="9 18 15 12 9 6"></polyline>
               </svg>
            </a>
        `,
        optional: false
    },
    showPrice: {
        image: '../images/productSCWM23Free.png',
        icon: '../images/iconPrice.svg',
        tag: 'EQUIPMENT',
        heading: 'PRICING',
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