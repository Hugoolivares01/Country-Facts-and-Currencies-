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
var exchangeURL = ''
var $el = document.querySelector('#el')

document.addEventListener('DOMContentLoaded', function () {
    var SearchLine = document.location.search;
    var SearchSplit = SearchLine.split('=');
    searchValue = SearchSplit[1]
    fetchCountryInfo()
});

function fetchCountryInfo() {
    var infoURL = 'https://restcountries.com/v3.1/name/' + searchValue
    fetch(infoURL, {
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            countryName.innerHTML = data[0].name.common
            flag.setAttribute("src", data[0].flags.png)
            capital.innerHTML = "Capital: " + data[0].capital[0]
            population.innerHTML = "Population: " + data[0].population
            let language = JSON.stringify(data[0].languages)
            let languageDataArray = language.split(",")
            let languageArray = []
            for (let i = 0; i < languageDataArray.length; i++) {
                let languageName = languageDataArray[i].split(":")[1].replace("}", "")
                languageArray.push(languageName.replace(/"/g, ""))
            }
            for (let i = 0; i < languageArray.length; i++) {
                let li = document.createElement("li")
                li.setAttribute("class", "px-3")
                li.innerText = languageArray[i]
                languages.appendChild(li)
            }
            map.innerHTML = "Link to Map of " + data[0].name.common
            map.setAttribute("href", data[0].maps.googleMaps)
            currency = JSON.stringify(data[0].currencies).split(":")[0].replace(/[^a-zA-Z]/g, "")
            ConvertedAmount.innerHTML = " = " + currency
        })
}

function ConvertCurrency() {
    GrabForeignAmount()

}

function GrabForeignAmount() {
    var ForceNumberInput = parseInt(InputAmount.value);
    if (isNaN(ForceNumberInput)) {
        var modal = document.querySelector('#el');
        modal.classList.add('is-active');
        var closeModalBtn = document.querySelector('#close1');
        closeModalBtn.addEventListener('click', function () {
            var modal = document.querySelector('#el');
            modal.classList.remove('is-active');
        });
        return;
    }
    else {
        exchangeURL = 'https://api.frankfurter.app/latest?amount=' + ForceNumberInput + '&from=USD&to=' + currency;
        FetchNewAmount()
    }
}

function FetchNewAmount() {
    return fetch(exchangeURL, {
    })

        .then(function (response) {
            if (!response.ok) {
                var modal = document.querySelector('#el2');
                modal.classList.add('is-active');
                var closeModalBtn = document.querySelector('#close2');
                closeModalBtn.addEventListener('click', function () {
                    var modal = document.querySelector('#el2');
                    modal.classList.remove('is-active');
                });
                return;
            }
            else {
                return response.json();
            }
        })
        .then(function (data) {
            amount = JSON.stringify(data.rates).replace(/[^0-9.]/g, "");
            PlaceNewAmount()
        });
}

function PlaceNewAmount() {
    ConvertedAmount.innerHTML = " = " + amount + " " + currency
}
ConvertBtn.addEventListener('click', ConvertCurrency);