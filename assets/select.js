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

// fetch(
//     "https://restcountries.com/v3.1/all"
// )
//     .then((res) => res.json())
//     .then((countries) => {
//         console.log(countries);
//         Object.entries(countries).forEach(function (val) {
//             const option = document.createElement("option");
//             option.textContent = val[1].name.common;
//             countriesList.append(option);
//         });
//     });

var SearchBarVal = ''
var searchedCountries = JSON.parse(localStorage.getItem('searched'))
if (searchedCountries == null) {
    searchedCountries = []
}

for (let i = 0; i < searchedCountries.length; i++) {
    var newSearchedCountry = $("<li>").text(searchedCountries[i])
    newSearchedCountry.addClass("button is-outlined is-info")
    newSearchedCountry.attr("id", "countrybtn")
    historylist.append(newSearchedCountry)
}

function Countryselect() {
    var queryString = './info.html?q=' + SearchBarVal;
    addToList()
    // location.assign(queryString);
}

SearchCountry.addEventListener('click', function (event) {
    event.preventDefault()
    var selectedOption = countriesList.options[countriesList.selectedIndex];
    console.log(selectedOption);
    SearchBarVal = selectedOption.textContent;
    if (SearchBarVal === "Select Country") {
        console.log("Please choose a country");
        return
    }
    Countryselect()
});

var countrybtn = $("#countrybtn")
countrybtn.on('click', function (event) {
    event.preventDefault()
    SearchBarVal = ($(event.target).text())
    console.log(SearchBarVal);
    Countryselect()
})


function addToList() {
    searchedCountries.unshift(SearchBarVal)
    searchedCountries = $.grep(searchedCountries, function (element, index) {
        return index === $.inArray(element, searchedCountries)
    })
    localStorage.setItem('searched', JSON.stringify(searchedCountries))
}


