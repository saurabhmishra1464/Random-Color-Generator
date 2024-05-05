const hexBtn = document.querySelector('.hex-btn');
const hexColorValue = document.querySelector('.hex-color-value');
var hexColorContainer = document.querySelector('.hex-color-container');
const hexCopyBtn = document.querySelector('.hex-copy-color');
const rgbCopyBtn = document.querySelector('.rgb-copy-color');


//create random hex color

hexBtn.addEventListener('click', () => {
    let characterSet = '0123456789ABCDEF';
    let hexColorOutput = "";

    for (let i = 0, charSetLength = characterSet.length; i < 6; ++i) {
        hexColorOutput += characterSet.charAt(Math.floor(Math.random() * charSetLength));
    }

    let colorValue = hexColorValue.textContent = `#${hexColorOutput}`;
    hexColorContainer.style.backgroundColor = colorValue;
    hexBtn.style.backgroundColor = colorValue;
});

const rgbBtn = document.querySelector('#rgb-btn');
const getRedInputRange = document.querySelector('#red');
const getGreenInputRange = document.querySelector('#green');
const getBlueInputRange = document.querySelector('#blue');
const rgbColorContainer = document.querySelector('.rgb-color-container');

rgbBtn.addEventListener('click', () => {
    debugger
    let extractedRedValue = getRedInputRange.value;
    let extractedGreenValue = getGreenInputRange.value;
    let extractedBlueValue = getBlueInputRange.value;

    rgbColorContainer.style.backgroundColor = `rgb(${extractedRedValue},${extractedGreenValue},${extractedBlueValue})`;
});

hexCopyBtn.addEventListener('click', copyHexColorToClipBoard)


function copyHexColorToClipBoard() {
    navigator.clipboard.writeText(hexColorValue.textContent);
}

function copyRgbColorToClipBoard() {

}