fetch('https://restcountries.com/v3.1/name/mexico', {
})
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    });