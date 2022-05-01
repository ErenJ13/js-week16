const button = document.querySelector(".button");
console.log(button)
button.addEventListener("click", function () {
    const marka = document.querySelector(".marka").value;
    const privod = document.querySelector('input[class="drive"]:checked').value;
    const yeargrade = document.querySelector(".year").value;
    const salon = document.querySelector('input[class="sal"]:checked').value;
    const color = document.querySelector('input[class="color"]:checked').value;
    const run = document.getElementById("txt").value;
    const hoz = document.querySelector('input[class="master"]:checked').value;
    let result = document.querySelector(".result");
    let price = 0;
    if (marka === "peugeot") {
        price += 1000000;
    } else if (marka === "bmw") {
        price += 1500000;
    } else if (marka === "opel") {
        price += 1400000;
    }

    if (privod === '1') {
        price += 500000;
    } else if (privod === '2') {
        price += 700000;
    } else if (privod === '3') {
        price += 750000;
    }

    if (yeargrade === '2014') {
        price += 100000;
    } else if (yeargrade === '2015') {
        price += 120000;
    } else if (yeargrade === '2016') {
        price += 140000;
    }
    else if (yeargrade === '2017') {
        price += 150000;
    } else if (yeargrade === '2018') {
        price += 160000;
    }
    else if (yeargrade === '2019') {
        price += 170000;
    } else if (yeargrade === '2020') {
        price += 190000;
    }
    else if (yeargrade === '2021') {
        price += 200000;
    }

    if (salon === 's1') {
        price += 100000;
    } else if (salon === 's2') {
        price += 120000;
    } else if (salon === 's3') {
        price += 140000;
    }
    else if (salon === 's4') {
        price += 150000;
    } else if (salon === 's5') {
        price += 160000;
    }
    else if (salon === 's6') {
        price += 170000;
    } else if (salon === 's7') {
        price += 190000;
    }
    else if (salon === 's8') {
        price += 200000;
    }

    if (color === 'red') {
        price += 10000;
    } else if (color === 'black') {
        price += 12000;
    } else if (color === 'green') {
        price += 14000;
    }
    else if (color=== 'blue') {
        price += 15000;
    } else if (color === 'white') {
        price += 16000;
    }

    if (run < '1000')
    {
        price += 10000;
    }
    else if (run > '1000')
    {
        price += 20000;
    }
    else if (run === '1000')
    {
        price += 15000;
    }

    if (hoz === 'm1') {
        price += 10000;
    } else if (hoz === 'm2') {
        price += 12000;
    } else if (hoz === 'm3') {
        price += 14000;
    }
    else if (hoz === 'm4') {
        price += 15000;
    }
    result.textContent = "Стоимость: " + price +" рублей";
})