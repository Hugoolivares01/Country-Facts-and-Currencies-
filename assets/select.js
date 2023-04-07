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
// full list of options 

fetch('https://restcountries.com/v3.1/all/', {
})
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);

    });
// Full reference 


fetch('https://restcountries.com/v3.1/all/', {
})
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        data.forEach(function (Country) {
            console.log(Country.name.common);
        });
    });
// name Reference 

var SearchCountry = document.querySelector("#Search-Country");;
function Countryselect(event) {
    event.preventDefault();
    var selectedOption = countriesList.options[countriesList.selectedIndex];
    SearchBarVal = selectedOption.textContent;
    var queryString = './info.html?q=' + SearchBarVal;
    location.assign(queryString);
}
SearchCountry.addEventListener('click', Countryselect);
// base code for the search to next html
var SearchBarVal = ''
var searchedCountries = JSON.parse(localStorage.getItem('searched'))
if (searchedCountries == null) {
    searchedCountries=[]
}

function addToList() {
    searchedCountries.unshift(SearchBarVal)
    searchedCountries = $.grep(searchedCountries, function (element, index){
        return index === $.inArray(element, searchedCountries)
    })
    localStorage.setItem('searched', JSON.stringify(searchedCountries))

}

