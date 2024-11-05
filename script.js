let kelvinInput = document.querySelector('#kelvin');
let celsiusInput = document.querySelector('#celsius');
let fahrenheitInput = document.querySelector('#fahrenheit');

let btn = document.querySelector('.button button');

function roundNumber(number) {
    return Math.round(number * 100) / 100;
}

celsiusInput.addEventListener('input', function() {
    let cTemp = parseFloat(celsiusInput.value);
    let fTemp = (cTemp * (9 / 5)) + 32;
    let kTemp = cTemp + 273.15;

    fahrenheitInput.value = roundNumber(fTemp);
    kelvinInput.value = roundNumber(kTemp);
});

fahrenheitInput.addEventListener('input', function() {
    let FTemp = parseFloat(fahrenheitInput.value);
    let CTemp = (FTemp - 32) * (5 / 9);
    let kTemp = CTemp + 273.15;

    celsiusInput.value = roundNumber(CTemp);
    kelvinInput.value = roundNumber(kTemp);
});

kelvinInput.addEventListener('input', function() {
    let kTemp = parseFloat(kelvinInput.value);
    let fTemp = (kTemp - 273.15) * (9 / 5) + 32;
    let cTemp = kTemp - 273.15;

    celsiusInput.value = roundNumber(cTemp);
    fahrenheitInput.value = roundNumber(fTemp);
});

btn.addEventListener('click', () => {
    celsiusInput.value = "";
    fahrenheitInput.value = "";
    kelvinInput.value = "";
});