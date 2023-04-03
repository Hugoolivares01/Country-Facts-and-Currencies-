// fetch('https://restcountries.com/v3.1/name/mexico', {
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
const countriesList = document.querySelector("#countries-list");
fetch(
    "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json"
)
.then((res) => res.json())
.then((countries) => {
    Object.entries(countries).forEach(function (val){
        const option = document.createElement("option");
        option.textContent = val[1];
        option.value = val[0];
        countriesList.append(option);
    });
});
fetch('https://restcountries.com/v3.1/name/', {
})
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    });
