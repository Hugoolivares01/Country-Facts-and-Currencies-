// fetch('https://restcountries.com/v3.1/all', {
// })
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         console.log(data);
//     });

// fetch('https://restcountries.com/v3.1/name/italy', {
// })
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         console.log(data);
//     });

// fetch('https://api.frankfurter.app/latest?amount=10&from=GBP&to=USD', {
// })
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         console.log(data);
//     });
// fetch('https://api.frankfurter.app/latest?amount=10&from=GBP&to=USD', {
// })
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         console.log(data);
//     });

var countryName = document.querySelector('#country-name')
var flag = document.querySelector('#flag')
var capital = document.querySelector('#capital')
var population = document.querySelector('#population')
var languages = document.querySelector('#languages')
var map = document.querySelector('#map')
var InputAmount = document.querySelector('#amount')
var ConvertBtn = document.querySelector('#ConvertBtn')
var ConvertedAmount = document.querySelector('#ConvertedAmount')
var BaseUrl = 'https://api.frankfurter.app/latest?amount=&from=USD&to=GBP'
var CurrencyTitle = document.querySelector('#CurrencyTitle')
var searchValue = ""
var currency = ""
var amount = ""
var $el = document.querySelector('#el')

document.addEventListener('DOMContentLoaded', function () {
    var SearchLine = document.location.search;
    var SearchSplit = SearchLine.split('=');
    searchValue = SearchSplit[1]
    fetchCountryInfo()
    // var query = searchParamsArr[0].split('=').pop();
    // changed later this is a place holder for value change
});
// var searchValue = "France"


function fetchCountryInfo() {
    var infoURL = 'https://restcountries.com/v3.1/name/' + searchValue
    fetch(infoURL, {
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            countryName.innerHTML = data[0].name.common
            flag.setAttribute("src", data[0].flags.png)
            capital.innerHTML = "Capital: " + data[0].capital[0]
            population.innerHTML = "Population: " + data[0].population
            let language = JSON.stringify(data[0].languages).split(":")[1].replace(/[^a-zA-Z]/g, "")
            languages.innerHTML = "Main language: " + language
            map.innerHTML = "Link to Map of " + data[0].name.common
            map.setAttribute("href", data[0].maps.googleMaps)
            currency = JSON.stringify(data[0].currencies).split(":")[0].replace(/[^a-zA-Z]/g, "")
            ConvertedAmount.innerHTML = " = " + currency
        })
}

function ConvertCurrency() {
    GrabForeignAmount()
    FetchNewAmount()
}

function GrabForeignAmount() {
    var ForceNumberInput = parseInt(InputAmount.value);
    if (isNaN(ForceNumberInput)) {
        var modal = document.querySelector('.modal');
        modal.classList.add('is-active');
        var closeModalBtn = document.querySelector('.modal-close');
        closeModalBtn.addEventListener('click', function () {
            var modal = document.querySelector('.modal');
            modal.classList.remove('is-active');
        });
        return;
    }
    else {
        var exchangeURL = 'https://api.frankfurter.app/latest?amount=' + ForceNumberInput + '&from=USD&to=' + currency;
        console.log(exchangeURL);
        return exchangeURL;
    }
}

function FetchNewAmount() {
    var NewUrl = GrabForeignAmount();
    return fetch(NewUrl, {
    })

            .then(function (response) {
                if (!response.ok) {
                    var modal = document.querySelector('.modal1');
                    modal.classList.add('is-active');
                    var closeModalBtn = document.querySelector('.modal-close');
                    closeModalBtn.addEventListener('click', function () {
                        var modal = document.querySelector('.modal1');
                        modal.classList.remove('is-active');
                    });
                    return;
                 }
                return response.json();
            })
            .then(function (data) {
                console.log(data);
                amount = JSON.stringify(data.rates).replace(/[^0-9.]/g, "");
            PlaceNewAmount()
        });
}

function PlaceNewAmount() {
    console.log(amount);
    ConvertedAmount.innerHTML = " = " + amount + currency
}
ConvertBtn.addEventListener('click', ConvertCurrency);




// fetch('https://api.frankfurter.app/latest?amount=20&from=USD&to=GBP', {
// })
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         NewRate = data.rates;
//         console.log(NewRate);
//     });
//     // reference

// document.addEventListener('DOMContentLoaded', () => {
//     // Functions to open and close a modal
//     function openModal($el) {
//         $el.classList.add('is-active');
//     }

//     function closeModal($el) {
//         $el.classList.remove('is-active');
//     }

//     function closeAllModals() {
//         (document.querySelectorAll('.modal') || []).forEach(($modal) => {
//             closeModal($modal);
//         });
//     }

//     // Add a click event on buttons to open a specific modal
//     (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
//         const modal = $trigger.dataset.target;
//         const $target = document.getElementById(modal);

//         $trigger.addEventListener('click', () => {
//             openModal($target);
//         });
//     });

//     // Add a click event on various child elements to close the parent modal
//     (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
//         const $target = $close.closest('.modal');

//         $close.addEventListener('click', () => {
//             closeModal($target);
//         });
//     });

//     // Add a keyboard event to close all modals
//     document.addEventListener('keydown', (event) => {
//         const e = event || window.event;

//         if (e.keyCode === 27) { // Escape key
//             closeAllModals();
//         }
//     });
// });