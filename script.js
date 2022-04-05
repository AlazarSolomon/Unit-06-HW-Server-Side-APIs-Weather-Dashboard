var searchFormEl = document.querySelector('.form-input')
var button = document.querySelector('.btn')
var city = document.querySelector('.mb-1')
var temp = document.querySelector('.mb-2')
var wind = document.querySelector('.wind')
var humidity = document.querySelector('.humidity')
var UV = document.querySelector('.UV')

var cityTwo = document.querySelector('.day-2')
var cityThree = document.querySelector('.day-3')
var cityFour = document.querySelector('.day-4')
var cityFive = document.querySelector('.day-5')
var citySix = document.querySelector('.day-6')

var tempTwo = document.querySelector('.temp-2')
var tempThree = document.querySelector('.temp-3')
var tempFour = document.querySelector('.temp-4')
var tempFive = document.querySelector('.temp-5')
var tempSix = document.querySelector('.temp-6')

var windTwo = document.querySelector('.wind-2')
var windThree = document.querySelector('.wind-3')
var windFour = document.querySelector('.wind-4')
var windFive = document.querySelector('.wind-5')
var windSix = document.querySelector('.wind-6')

var humidityTwo = document.querySelector('.humidity-2')
var humidityThree = document.querySelector('.humidity-3')
var humidityFour = document.querySelector('.humidity-4')
var humidityFive = document.querySelector('.humidity-5')
var humiditySix = document.querySelector('.humidity-6')






// function handleSearchFormSubmit(event) {
//   event.preventDefault();

//   var searchInputVal = document.querySelector('#search-input').value;

//   if (!searchInputVal) {
//     console.error('You need a search input value!');
//     return;
//   }

//   var queryString = './search-results.html?q=' + searchInputVal;

//   location.assign(queryString);
// }

// searchFormEl.addEventListener('submit', handleSearchFormSubmit);


button.addEventListener('click', function() {

fetch('https://api.openweathermap.org/data/2.5/weather?q='+searchFormEl.value+'&appid=5a6bf89134c529fa9ece702b06e4185d')
.then(response => response.json())
.then(data => { console.log(data);
    var cityValue = data['name']
    var windValue = data['wind']['speed'];
    var humidityValue = data['main']['humidity'];
    var tempValue = (1.8 * ((data['main']['temp']) - 273) + 32).toFixed(2)
    
    wind.innerHTML = windValue;
    humidity.innerHTML = humidityValue;
    temp.innerHTML = tempValue;
    city.innerHTML = cityValue
})
fetch('https://api.openweathermap.org/data/2.5/forecast?q='+searchFormEl.value+'&appid=5a6bf89134c529fa9ece702b06e4185d')
.then(response => response.json())
.then(data => { console.log(data);
    var cityValue = data['list'][2]['dt_txt'];
    var windValue = data['list'][2]['wind']['speed'];
    var humidityValue = data['list'][2]['main']['humidity'];
    var tempValue = (1.8 * ((data['list'][2]['main']['temp']) - 273) + 32).toFixed(2)
    
    windTwo.innerHTML = windValue;
    humidityTwo.innerHTML = humidityValue;
    tempTwo.innerHTML = tempValue;
    cityTwo.innerHTML = cityValue.slice(0,10)
})
fetch('https://api.openweathermap.org/data/2.5/forecast?q='+searchFormEl.value+'&appid=5a6bf89134c529fa9ece702b06e4185d')
.then(response => response.json())
.then(data => { console.log(data);
    var cityValue = data['list'][9]['dt_txt'];
    var windValue = data['list'][9]['wind']['speed'];
    var humidityValue = data['list'][9]['main']['humidity'];
    var tempValue = (1.8 * ((data['list'][9]['main']['temp']) - 273) + 32).toFixed(2)
    
    windThree.innerHTML = windValue;
    humidityThree.innerHTML = humidityValue;
    tempThree.innerHTML = tempValue;
    cityThree.innerHTML = cityValue.slice(0,10)
})
fetch('https://api.openweathermap.org/data/2.5/forecast?q='+searchFormEl.value+'&appid=5a6bf89134c529fa9ece702b06e4185d')
.then(response => response.json())
.then(data => { console.log(data);
    var cityValue = data['list'][17]['dt_txt'];
    var windValue = data['list'][17]['wind']['speed'];
    var humidityValue = data['list'][17]['main']['humidity'];
    var tempValue = (1.8 * ((data['list'][17]['main']['temp']) - 273) + 32).toFixed(2)
    
    windFour.innerHTML = windValue;
    humidityFour.innerHTML = humidityValue;
    tempFour.innerHTML = tempValue;
    cityFour.innerHTML = cityValue.slice(0,10)
})
fetch('https://api.openweathermap.org/data/2.5/forecast?q='+searchFormEl.value+'&appid=5a6bf89134c529fa9ece702b06e4185d')
.then(response => response.json())
.then(data => { console.log(data);
    var cityValue = data['list'][25]['dt_txt'];
    var windValue = data['list'][25]['wind']['speed'];
    var humidityValue = data['list'][25]['main']['humidity'];
    var tempValue = (1.8 * ((data['list'][25]['main']['temp']) - 273) + 32).toFixed(2)
    
    windFive.innerHTML = windValue;
    humidityFive.innerHTML = humidityValue;
    tempFive.innerHTML = tempValue;
    cityFive.innerHTML = cityValue.slice(0,10)
})
fetch('https://api.openweathermap.org/data/2.5/forecast?q='+searchFormEl.value+'&appid=5a6bf89134c529fa9ece702b06e4185d')
.then(response => response.json())
.then(data => { console.log(data);
    var cityValue = data['list'][33]['dt_txt'];
    var windValue = data['list'][33]['wind']['speed'];
    var humidityValue = data['list'][33]['main']['humidity'];
    var tempValue = (1.8 * ((data['list'][33]['main']['temp']) - 273) + 32).toFixed(2)
    
    windSix.innerHTML = windValue;
    humiditySix.innerHTML = humidityValue;
    tempSix.innerHTML = tempValue;
    citySix.innerHTML = cityValue.slice(0,10)
})



.catch(err => alert("incorrect city name"))
})