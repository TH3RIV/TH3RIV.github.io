const included = document.querySelector('#included');
const capture = document.querySelector('#capture');
const graphics = document.querySelector('#graphics');
const audio = document.querySelector('#audio');
const control = document.querySelector('#control');
const others = document.querySelector('#others');
const info = document.querySelector('#info');

included.addEventListener('click', function (e) {
    e.preventDefault();
    info.innerHTML = `
    <h2>Standard equipment:</h2>
    <ul>
    <li>- Intel i9 10900X 3.7GHz</li>
    <li>- 32GB DDR4 3200MHz RAM</li>
    <li>- 4U Case</li>
    <li>- Boot Drive – 1TB M.2 PCIe 4.0 Samsung 980 Pro SSD</li>
    <li>- Record Drive – 2TB M.2 PCIe 4.0 Samsung 980 Pro SSD</li>
    <li>- 1 x 1Gb NIC & 1 x 10Gb NIC</li>
    <li>- Windows 10 Pro</li>
    <li>- 2 x Dell 24″ IPS monitors</li>
    <li>- Corsair keyboard and mouse</li>
    </ul>`;
})

capture.addEventListener('click', function (e) {
    e.preventDefault();
    info.innerHTML = `
    <h2>Capture Card options:</h2>
    <ul>
    <li>- Blackmagic Design Decklink Due 2 Capture and Playback Card</li>
    <li>- Magwell Pro Capture Quad SDI</li>
    </ul>`;
})

graphics.addEventListener('click', function (e) {
    e.preventDefault();
    info.innerHTML = `
    <h2>Graphics Card options:</h2>
    <ul>
    <li>- PNY / MSI / eVGA Geforce RTX 3090</li>
    <li>- PNY / MSI / eVGA Geforce RTX 2080Ti</li>
    </ul>`;
})

audio.addEventListener('click', function (e) {
    e.preventDefault();
    info.innerHTML = `
    <h2>Audio options:</h2>
    <ul>
    <li>- Focusrite Scarlett 2i2 3rd gen</li>
    <li>- Focusrite Scarlett 18i20 2nd gen</li>
    </ul>`;
})

control.addEventListener('click', function (e) {
    e.preventDefault();
    info.innerHTML = `
    <h2>Control options:</h2>
    <ul>
    <li>- Streamdeck XL</li>
    <li>- Streamdeck Mini</li>
    <li>- Korg NanoKONTROL2</li>
    </ul>`;
})

others.addEventListener('click', function (e) {
    e.preventDefault();
    info.innerHTML = `
    <h2>Other options:</h2>
    <ul>
    <li>- Thunderbolt 3</li>
    <li>- Redundant PSU</li>
    <li>- 1.5kwh UPS</li>
    <li>- Sennheiser HD25 headphones</li>
    </ul>`;
})