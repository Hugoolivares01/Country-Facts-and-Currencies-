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
var InputAmount = document.querySelector('#amount')
var ConvertBtn = document.querySelector('#ConvertBtn')
var ConvertedAmount = document.querySelector('#ConvertedAmount')
var BaseUrl = 'https://api.frankfurter.app/latest?amount=&from=USD&to=GBP'
var CurrencyTitle = document.querySelector('#CurrencyTitle')
document.addEventListener('DOMContentLoaded', function () {
    var SearchLine = document.location.search;
    var SearchSplit = SearchLine.split('=');
    var SearchValue = SearchSplit[1];
    // var query = searchParamsArr[0].split('=').pop();
    // changed later this is a place holder for value change
});

function ConvertCurrency() {
    GrabForeignAmount()
    FetchNewAmount()
    PlaceNewAmount()
}

function GrabForeignAmount() {
    var ForceNumberInput = parseInt(InputAmount.value);
    if (isNaN(ForceNumberInput)) {
        alert("Not a number try again");
        return;
    }
    else {
        var SplitBaseUrl = BaseUrl.split('=');
        var RevisedUrl = [SplitBaseUrl[0], ForceNumberInput, SplitBaseUrl[1], SplitBaseUrl[2], SplitBaseUrl[3]].join('=');
        return RevisedUrl;
    }

}

function FetchNewAmount() {
    var NewUrl = GrabForeignAmount();
    return fetch(NewUrl, {
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var ChangedCurrency = data.rates.GBP;
        return ChangedCurrency;
        });
        // place holder code 
}

function PlaceNewAmount() {
    var ForeignCurrency = FetchNewAmount();
    ConvertedAmount.textContent = ForeignCurrency+ "Foreign Currency"
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