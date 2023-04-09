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



// full list of options 

// fetch('https://restcountries.com/v3.1/all/', {
// })
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         console.log(data);

//     });
// Full reference 


// fetch('https://restcountries.com/v3.1/all/', {
// })
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         data.forEach(function (Country) {
//             console.log(Country.name.common);
//         });
//     });
// name Reference 

var SearchCountry = document.querySelector("#Search-Country")
var countriesList = document.querySelector("#countries-list");
var historylist = $("#historylist");

fetch(
    "https://restcountries.com/v3.1/all"
)
    .then((res) => res.json())
    .then((countries) => {
        Object.entries(countries).forEach(function (val) {
            const option = document.createElement("option");
            option.textContent = val[1].name.common;
            option.value = val[0];
            countriesList.append(option);
        });
    });

var SearchBarVal = ''
var searchedCountries = JSON.parse(localStorage.getItem('searched'))
console.log(searchedCountries);
if (searchedCountries == null) {
    searchedCountries = []
}

for (let i = 0; i < searchedCountries.length; i++) {
    var newSearchedCountry = $("<li>").text(searchedCountries[i])
    newSearchedCountry.addClass("button is-outlined is-info")
    historylist.append(newSearchedCountry)
}

function Countryselect(event) {
    var queryString = './info.html?q=' + SearchBarVal;
    addToList()
    location.assign(queryString);
}

SearchCountry.addEventListener('click', function (event) {
    event.preventDefault()
    var selectedOption = countriesList.options[countriesList.selectedIndex];
    SearchBarVal = selectedOption.textContent;
    Countryselect()
});

var countrybtn = $(".button")
countrybtn.on('click', function (event) {
    event.preventDefault()
    SearchBarVal = ($(event.target).text())
    Countryselect()
})


function addToList() {
    searchedCountries.unshift(SearchBarVal)
    searchedCountries = $.grep(searchedCountries, function (element, index) {
        return index === $.inArray(element, searchedCountries)
    })
    localStorage.setItem('searched', JSON.stringify(searchedCountries))
}


