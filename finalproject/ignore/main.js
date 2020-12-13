//var zipValue;
//var genderType = "male";
//var runType;

//var genderClothing;

//var currentTemp = "60";
//var weatherCondition;
//var realFeel;
//var precipRate;
//var sunnyOut = "yes";



//var currentWeather;

//var runTemp;

//form returns genderType, currentTemp, sunnyOut

//display clothing recommendations based on form values 

var condition = 1;

if (condition >= 1) {
        var newContent = '';
            
    var runningItems = ['shorts', 'singlet', 'short sleeve', 'long sleeve', 'tights'];
    var runningImg = ['img/male/shorts.png', 'img/male/singlet.png', 'img/male/shortsleeve.png', 'img/male/longsleeve.png', 'img/male/tights.png'];
        
    newContent += '<div class="clothing">';
    newContent += '<div class="card">';
    newContent += '<h3>' + runningItems[0] + '</h3>';
    newContent += '<img src="' + runningImg[0] + '">';
    newContent += '</div>';
            
    document.getElementById('clothing').innerHTML = newContent;
}



/** Return form values **/
// Return zipValue, raceType, genderType

/** Weather API **/
// Input zipValue
// Return currentTemp, weatherCondition, realFeel, precipRate, sunnyOut

/** Update currentWeather div **/
// Display currentTemp + weatherCondition, realFeel

/** Calculate runTemp **/
// If runType = easy run, add 10 degrees to currentTemp
// If runType = long run, add 15 degrees to currentTemp
// If runType = race || workout, add 20 degree to currentTemp

/** Display recommendations based on runTemp, sunnyOut, precipRate, genderType **/
// If runTemp > 65, check genderType and add new elements for gender specific shorts and singlet + visor
// If runTemp > 55, check gender and add new elements for display gender specific shorts and short sleeve + hat
// If runTemp > 45, check gender and add new elements for display gender specific shorts and long sleeve + gloves + hat
// If runTemp > 35, check gender and add new elements for display gender specific tights and long sleeve + gloves + hat
// If runTemp > 25, check gender and add new elements for display gender specific tights and long sleeve + gloves + hat + winterjacket

//If precipRate > .01in, add new element for rainjacket (.01in or less is considered light rain)

//If sunnyOut == 'yes', add new elements for sunglasses, sunscreen

// If genderType = female, add new element for sportsbra
