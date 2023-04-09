var SearchCountry = document.querySelector("#Search-Country")
var countriesList = document.querySelector("#countries-list");
var historylist = $("#historylist");

fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((countries) => {
        Object.entries(countries).forEach(function (val) {
            const option = document.createElement("option");
            option.textContent = val[1].name.common;
            countriesList.append(option);
        });
    });

var SearchBarVal = ''
var searchedCountries = JSON.parse(localStorage.getItem('searched'))
if (searchedCountries == null) {
    searchedCountries = []
}

for (let i = 0; i < searchedCountries.length; i++) {
    var newSearchedCountry = $("<li>").text(searchedCountries[i])
    newSearchedCountry.addClass("button is-outlined is-info is-large is-fullwidth")
    newSearchedCountry.attr("id", "countrybtn")
    historylist.append(newSearchedCountry)
}

function Countryselect() {
    var queryString = './info.html?q=' + SearchBarVal;
    addToList()
    location.assign(queryString);
}

SearchCountry.addEventListener('click', function (event) {
    event.preventDefault()
    var selectedOption = countriesList.options[countriesList.selectedIndex];
    SearchBarVal = selectedOption.textContent;
    if (SearchBarVal === "Select Country") {
        var modal = document.querySelector('#modal');
        modal.classList.add('is-active');
        var closeModalBtn = document.querySelector('#close');
        closeModalBtn.addEventListener('click', function () {
            var modal = document.querySelector('#modal');
            modal.classList.remove('is-active')
        })
        return
    }
    Countryselect()
});

var countrybtn = $("#countrybtn")
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


