var searchFormEl = document.querySelector('.form-input')
var button = document.querySelector('.btn')
var city = document.querySelector('.mb-1')
var temp = document.querySelector('.mb-2')
var wind = document.querySelector('.wind')
var humidity = document.querySelector('.humidity')
var UV = document.querySelector('.UV')
var icon = document.querySelector('#icon')

var iconTwo = document.querySelector('#icon-2')
var iconThree = document.querySelector('#icon-3')
var iconFour = document.querySelector('#icon-4')
var iconFive = document.querySelector('#icon-5')
var iconSix = document.querySelector('#icon-6')


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


button.addEventListener('click', function(e) {
e.preventDefault();
fetch('https://api.openweathermap.org/data/2.5/weather?q='+searchFormEl.value+'&appid=5a6bf89134c529fa9ece702b06e4185d')
.then(response => response.json())
.then(data => { console.log(data);
    var cityValue = data['name']
    var windValue = data['wind']['speed'];
    var humidityValue = data['main']['humidity'];
    var tempValue = (1.8 * ((data['main']['temp']) - 273) + 32).toFixed(2)
    var lonValue = data['coord']['lon']
    var latValue = data['coord']['lat']
    var iconValue = data['weather']['0']['icon']

    // const myJSON = JSON.stringify(lonValue , latValue)


    wind.innerHTML = windValue;
    humidity.innerHTML = humidityValue;
    temp.innerHTML = tempValue;
    city.innerHTML = cityValue

    icon.setAttribute("src", "http://openweathermap.org/img/wn/" +iconValue+ "@2x.png");


return fetch('https://api.openweathermap.org/data/2.5/onecall?lat='+latValue+'&lon='+lonValue+'&appid=5a6bf89134c529fa9ece702b06e4185d')
.then(response => response.json())
.then(data => { console.log(data);
    var UVValue = data['current']['uvi']

    UV.innerHTML = UVValue
    if (UV.innerHTML <= 3) {
        UV.style.backgroundColor = 'lightgreen'
    }
    else if (UV.innerHTML >= 7) {
        UV.style.backgroundColor = 'red'
    }
    else {
        UV.style.backgroundColor = 'yellow'
    }
})

})
fetch('https://api.openweathermap.org/data/2.5/forecast?q='+searchFormEl.value+'&appid=5a6bf89134c529fa9ece702b06e4185d')
.then(response => response.json())
.then(data => { console.log(data);
    var cityValue = data['list'][2]['dt_txt'];
    var windValue = data['list'][2]['wind']['speed'];
    var humidityValue = data['list'][2]['main']['humidity'];
    var tempValue = (1.8 * ((data['list'][2]['main']['temp']) - 273) + 32).toFixed(2)
    var iconValue = data['list'][2]['weather']['0']['icon']
    
    windTwo.innerHTML = windValue;
    humidityTwo.innerHTML = humidityValue;
    tempTwo.innerHTML = tempValue;
    cityTwo.innerHTML = cityValue.slice(0,10)

    iconTwo.setAttribute("src", "http://openweathermap.org/img/wn/" +iconValue+ "@2x.png");

})
fetch('https://api.openweathermap.org/data/2.5/forecast?q='+searchFormEl.value+'&appid=5a6bf89134c529fa9ece702b06e4185d')
.then(response => response.json())
.then(data => { console.log(data);
    var cityValue = data['list'][9]['dt_txt'];
    var windValue = data['list'][9]['wind']['speed'];
    var humidityValue = data['list'][9]['main']['humidity'];
    var tempValue = (1.8 * ((data['list'][9]['main']['temp']) - 273) + 32).toFixed(2)
    var iconValue = data['list'][9]['weather']['0']['icon']

    
    windThree.innerHTML = windValue;
    humidityThree.innerHTML = humidityValue;
    tempThree.innerHTML = tempValue;
    cityThree.innerHTML = cityValue.slice(0,10)

    iconThree.setAttribute("src", "http://openweathermap.org/img/wn/" +iconValue+ "@2x.png");

})
fetch('https://api.openweathermap.org/data/2.5/forecast?q='+searchFormEl.value+'&appid=5a6bf89134c529fa9ece702b06e4185d')
.then(response => response.json())
.then(data => { console.log(data);
    var cityValue = data['list'][17]['dt_txt'];
    var windValue = data['list'][17]['wind']['speed'];
    var humidityValue = data['list'][17]['main']['humidity'];
    var tempValue = (1.8 * ((data['list'][17]['main']['temp']) - 273) + 32).toFixed(2)
    var iconValue = data['list'][17]['weather']['0']['icon']

    
    windFour.innerHTML = windValue;
    humidityFour.innerHTML = humidityValue;
    tempFour.innerHTML = tempValue;
    cityFour.innerHTML = cityValue.slice(0,10)

    iconFour.setAttribute("src", "http://openweathermap.org/img/wn/" +iconValue+ "@2x.png");

})
fetch('https://api.openweathermap.org/data/2.5/forecast?q='+searchFormEl.value+'&appid=5a6bf89134c529fa9ece702b06e4185d')
.then(response => response.json())
.then(data => { console.log(data);
    var cityValue = data['list'][25]['dt_txt'];
    var windValue = data['list'][25]['wind']['speed'];
    var humidityValue = data['list'][25]['main']['humidity'];
    var tempValue = (1.8 * ((data['list'][25]['main']['temp']) - 273) + 32).toFixed(2)
    var iconValue = data['list'][25]['weather']['0']['icon']

    
    windFive.innerHTML = windValue;
    humidityFive.innerHTML = humidityValue;
    tempFive.innerHTML = tempValue;
    cityFive.innerHTML = cityValue.slice(0,10)

    iconFive.setAttribute("src", "http://openweathermap.org/img/wn/" +iconValue+ "@2x.png");

})
fetch('https://api.openweathermap.org/data/2.5/forecast?q='+searchFormEl.value+'&appid=5a6bf89134c529fa9ece702b06e4185d')
.then(response => response.json())
.then(data => { console.log(data);
    var cityValue = data['list'][33]['dt_txt'];
    var windValue = data['list'][33]['wind']['speed'];
    var humidityValue = data['list'][33]['main']['humidity'];
    var tempValue = (1.8 * ((data['list'][33]['main']['temp']) - 273) + 32).toFixed(2)
    var iconValue = data['list'][33]['weather']['0']['icon']

    
    windSix.innerHTML = windValue;
    humiditySix.innerHTML = humidityValue;
    tempSix.innerHTML = tempValue;
    citySix.innerHTML = cityValue.slice(0,10)

    iconSix.setAttribute("src", "http://openweathermap.org/img/wn/" +iconValue+ "@2x.png");

})

.catch(err => alert("incorrect city name"))
// .catch(err => console.log(data));


})

