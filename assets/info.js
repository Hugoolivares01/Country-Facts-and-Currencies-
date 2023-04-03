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

document.addEventListener('DOMContentLoaded', function () {
    var SearchLine = document.location.search;
    var SearchSplit = SearchLine.split('=');
    var SearchValue = SearchSplit[1];
    // var query = searchParamsArr[0].split('=').pop();
    console.log(SearchValue);
    // changed later this is a place holder for value change
});
var InputAmount = document.querySelector('#amount')
var ConvertBtn = document.querySelector('#ConvertBtn')

function ConvertCurrency() {
    console.log("hello")

}
ConvertBtn.addEventListener('click', ConvertCurrency);
// parseInt

fetch('https://api.frankfurter.app/latest?amount=20&from=USD&to=GBP', {
})
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data.rates.GBP);

    });