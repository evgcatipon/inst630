//Event listener when submit button is clicked
window.onload=function(){
	var submit = document.getElementById("submit");
	submit.addEventListener('click', updateRecs, false);
}

//Object with clothing recommendations data
var data = [
        {code: "fem0060", gender: "female", name: "Sports Bra", img: "img/female/sportsbra.png", desc: "Helps limit movement and provide support when running" },
        {code: "fem0060", gender: "female", name: "Singlet", img: "img/female/singlet.png", desc: "Keeps torso cool" },
		{code: "fem0060", gender: "female", name: "Shorts", img: "img/female/shorts.png", desc: "Keeps legs cool" },
		{code: "fem0050", gender: "female", name: "Sports Bra", img: "img/female/sportsbra.png", desc: "Helps limit movement and provide support when running" },
        {code: "fem0050", gender: "female", name: "Short Sleeve", img: "img/female/shortsleeve.png", desc: "Provides some coverage while keeping torso cool" },
		{code: "fem0050", gender: "female", name: "Shorts", img: "img/female/shorts.png", desc: "Keeps legs cool" },
		{code: "fem0040", gender: "female", name: "Sports Bra", img: "img/female/sportsbra.png", desc: "Helps limit movement and provide support when running." },
        {code: "fem0040", gender: "female", name: "Long Sleeve", img: "img/female/longsleeve.png", desc: "Keeps torso and arms warm" },
		{code: "fem0040", gender: "female", name: "Shorts", img: "img/female/shorts.png", desc: "Keeps legs cool" },
		{code: "fem0040", gender: "neutral", name: "Gloves", img: "img/gloves.png", desc: "Keeps hands warm" },
		{code: "fem0030", gender: "female", name: "Sports Bra", img: "img/female/sportsbra.png", desc: "Helps limit movement and provide support when running." },
        {code: "fem0030", gender: "female", name: "Long Sleeve", img: "img/female/longsleeve.png", desc: "Keeps torso and arms warm" },
		{code: "fem0030", gender: "female", name: "Tights", img: "img/female/tights.png", desc: "Keeps legs warm" },
		{code: "fem0030", gender: "neutral", name: "Jacket", img: "img/jacket.gif", desc: "Keeps body warm and has pockets for storing gloves or a hat" },
        {code: "fem0030", gender: "neutral", name: "Gloves", img: "img/gloves.png", desc: "Keeps hands warm" },
		{code: "mal0060", gender: "male", name: "Singlet", img: "img/male/singlet.png", desc: "Keeps torso cool" },
		{code: "mal0060", gender: "male", name: "Shorts", img: "img/male/shorts.png", desc: "Keeps legs cool" },
		{code: "mal0050", gender: "male", name: "Short Sleeve", img: "img/male/shortsleeve.png", desc: "Provides some coverage while keeping torso cool" },
		{code: "mal0050", gender: "male", name: "Shorts", img: "img/male/shorts.png", desc: "Keeps legs cool" },
		{code: "mal0040", gender: "male", name: "Long Sleeve", img: "img/male/longsleeve.png", desc: "Keeps torso and arms warm" },
		{code: "mal0040", gender: "male", name: "Shorts", img: "img/male/shorts.png", desc: "Keeps legs cool" },
		{code: "mal0040", gender: "neutral", name: "Gloves", img: "img/gloves.png", desc: "Keeps hands warm" },
		{code: "mal0030", gender: "male", name: "Long Sleeve", img: "img/male/longsleeve.png", desc: "Keeps torso and arms warm" },
		{code: "mal0030", gender: "male", name: "Tights", img: "img/male/tights.png", desc: "Keeps legs warm" },
		{code: "mal0030", gender: "neutral", name: "Jacket", img: "img/jacket.gif", desc: "Keeps body warm and has pockets for storing gloves or a hat" },
        {code: "mal0030", gender: "neutral", name: "Gloves", img: "img/gloves.png", desc: "Keeps hands warm" },
		{code: "other0010", gender: "neutral", name: "Visor", img: "img/visor.png", desc: "Helps block rain and absorbs sweat" },
		{code: "other0010", gender: "neutral", name: "Sunglasses", img: "img/sunglasses.png", desc: "Polarized running sunglasses with no bounce will help block rain " },
	    {code: "other0020", gender: "neutral", name: "Hat", img: "img/hat.png", desc: "Blocks rain and keeps head warm" },
		{code: "other0020", gender: "neutral", name: "Sunglasses", img: "img/sunglasses.png", desc: "Polarized running sunglasses with no bounce will help block rain " },
		{code: "other0030", gender: "neutral", name: "Visor", img: "img/visor.png", desc: "Helps absorbs sweat" },
	    {code: "other0040", gender: "neutral", name: "Beanie", img: "img/beanie.png", desc: "Keeps head warm" },
		{code: "sun0010", gender: "neutral", name: "Visor", img: "img/visor.png", desc: "Helps block sun and absorbs sweat" },
        {code: "sun0010", gender: "neutral", name: "Sunglasses", img: "img/sunglasses.png", desc: "Polarized running sunglasses with no bounce will help block sun " },
        {code: "sun0010", gender: "neutral", name: "Sunscreen", img: "img/sunscreen.jpg", desc: "Apply sunscreen 15min before a run and reapply every hour" },
		{code: "sun0020", gender: "neutral", name: "Beanie", img: "img/beanie.png", desc: "Keeps head warm" },
	    {code: "sun0020", gender: "neutral", name: "Sunglasses", img: "img/sunglasses.png", desc: "Polarized running sunglasses with no bounce will help block sun " },
        {code: "sun0020", gender: "neutral", name: "Sunscreen", img: "img/sunscreen.jpg", desc: "Apply sunscreen 15min before a run and reapply every hour" }
	];

jQuery(function() {
	 $('#zipSend').click(function() {	
    var zip = $("#zipBox").val();
    if (zip !== '') {
      $.ajax({
		url: "http://api.openweathermap.org/data/2.5/weather?zip=" + zip + ",us&units=imperial&appid=136d4bb7c2e5b6e8ebf7dfd5dbac069f",
        dataType: "jsonp",
		async: false,
        success: function(weatherData) {
          var city = weatherData.name;
		  var apiCondition = weatherData.weather[0].description;
		  var apiTemp = weatherData.main.temp.toFixed(1);
          $("#city").text(city);
		  $("#weatherCondition").text(apiTemp + '°F and ' + apiCondition);	
		  document.getElementById("rightColumn").style.display = "inline";
		  document.getElementById("currentConditions").style.display = "inline";	
        }
      });
    }else {
		alert('Enter a US zip code.');
	}
  });
});
	


//Display clothing recommendations
function updateRecs() {
	
	document.getElementById("rightColumn").style.display = "inline";
    document.getElementById("contentTitle").style.display = "inline";	
	
	//remove cards if they exist
	$(".card").remove();
	
	//display clothing rec column
    document.getElementById("contentTitle").style.display = "";
    
    //store form values
	var gender = document.getElementById("gender");
	var temp = document.getElementById("formTemp");
    //var weather = document.getElementById("weather");
	
	//build cards function
	var buildClothingCard = function (clothing) {
		
		//create card and child elements
		var div = document.createElement('div');
        var h3 = document.createElement('h3');
        var img = document.createElement('img');
        var p = document.createElement('p');
        
		//update card and child elements	
        var body = document.querySelector('.clothing');
        div.setAttribute('class', 'card');
        h3.innerHTML = clothing.name;
        img.src = clothing.img;
        img.setAttribute('class', 'img');
        p.setAttribute('class', 'desc');
        p.innerHTML = clothing.desc;
			
		//append card and child elements	
		body.append(div);
        div.append(h3);
        div.append(img);
        div.append(p);
			
		};
    if ((gender.value === "") || (temp.value === "")){
		alert('Gender and temperature are required.');
		document.getElementById("rightColumn").style.display = "none";
		document.getElementById("contentTitle").style.display = "none";
	};
    //clothing recs displayed if female and 60 is selected
	if ((gender.value === "1") && (temp.value === "60")) {
		
		var fem0060 = data.filter(function(clothing){
			return clothing.code === 'fem0060';
		});
		//check fem0060 filtered array
		console.log(fem0060);
		//build cards with fem0060 filter
		for (var i = 0; i < fem0060.length; i++){
			buildClothingCard(fem0060[i]);
		}
		
		//weather.value == "clear" 
		if (weather.value == "sun") {
        //filter on sun0010 value
        var sun0010 = data.filter(function(clothing){
			return clothing.code === 'sun0010';
		});
		
		//build cards with sun0010 filter
		for (var j = 0; j < sun0010.length; j++){
			buildClothingCard(sun0010[j]);
			}
        }
		else if (weather.value == "cloud") {
        //filter on other0030 value
        var other0030 = data.filter(function(clothing){
			return clothing.code === 'other0030';
		});
		
		//build cards with other0030 filter
		for (var j = 0; j < other0030.length; j++){
			buildClothingCard(other0030[j]);
			}
        }
		
        else if (weather.value == "rain" ) {
            //filter on other0010 value
			var other0010 = data.filter(function(clothing){
			return clothing.code === 'other0010';
		});
		//build cards with other0010 filter
			for (var k = 0; k < other0010.length; k++){
			buildClothingCard(other0010[k]);
			}
        }
        
	};
if ((gender.value === "1") && (temp.value === "50")) {
		
		var fem0060 = data.filter(function(clothing){
			return clothing.code === 'fem0050';
		});
		//check fem0060 filtered array
		console.log(fem0060);
		//build cards with fem0060 filter
		for (var i = 0; i < fem0060.length; i++){
			buildClothingCard(fem0060[i]);
		}
		
		//weather.value == "clear" 
		if (weather.value == "sun") {
        //filter on sun0010 value
        var sun0010 = data.filter(function(clothing){
			return clothing.code === 'sun0010';
		});
		
		//build cards with sun0010 filter
		for (var j = 0; j < sun0010.length; j++){
			buildClothingCard(sun0010[j]);
			}
        }
		if (weather.value == "cloud") {
        //filter on other0030 value
        var other0030 = data.filter(function(clothing){
			return clothing.code === 'other0030';
		});
		
		//build cards with other0030 filter
		for (var j = 0; j < other0030.length; j++){
			buildClothingCard(other0030[j]);
			}
        }
		
        else if (weather.value == "rain" ) {
            //filter on other0010 value
			var other0010 = data.filter(function(clothing){
			return clothing.code === 'other0010';
		});
		//build cards with other0010 filter
			for (var k = 0; k < other0010.length; k++){
			buildClothingCard(other0010[k]);
			}
        }
	};
	if ((gender.value === "1") && (temp.value === "40")) {
		
		var fem0060 = data.filter(function(clothing){
			return clothing.code === 'fem0040';
		});
		//check fem0060 filtered array
		console.log(fem0060);
		//build cards with fem0060 filter
		for (var i = 0; i < fem0060.length; i++){
			buildClothingCard(fem0060[i]);
		}
		
//weather.value == "clear" 
		if (weather.value == "sun") {
        //filter on sun0020 value
        var sun0020 = data.filter(function(clothing){
			return clothing.code === 'sun0020';
		});
		
		//build cards with sun0020 filter
		for (var j = 0; j < sun0020.length; j++){
			buildClothingCard(sun0020[j]);
			}
        }
		if (weather.value == "cloud") {
        //filter on other0040 value
        var other0040 = data.filter(function(clothing){
			return clothing.code === 'other0040';
		});
		
		//build cards with other0040 filter
		for (var j = 0; j < other0040.length; j++){
			buildClothingCard(other0040[j]);
			}
        }
		
        else if (weather.value == "rain" ) {
            //filter on other0020 value
			var other0020 = data.filter(function(clothing){
			return clothing.code === 'other0020';
		});
		//build cards with other0010 filter
			for (var k = 0; k < other0020.length; k++){
			buildClothingCard(other0020[k]);
			}
        }
        
	};
	if ((gender.value === "1") && (temp.value === "30")) {
		
		var fem0060 = data.filter(function(clothing){
			return clothing.code === 'fem0030';
		});
		//check fem0060 filtered array
		console.log(fem0060);
		//build cards with fem0060 filter
		for (var i = 0; i < fem0060.length; i++){
			buildClothingCard(fem0060[i]);
		}
		
//weather.value == "clear" 
		if (weather.value == "sun") {
        //filter on sun0020 value
        var sun0020 = data.filter(function(clothing){
			return clothing.code === 'sun0020';
		});
		
		//build cards with sun0020 filter
		for (var j = 0; j < sun0020.length; j++){
			buildClothingCard(sun0020[j]);
			}
        }
		if (weather.value == "cloud") {
        //filter on other0040 value
        var other0040 = data.filter(function(clothing){
			return clothing.code === 'other0040';
		});
		
		//build cards with other0040 filter
		for (var j = 0; j < other0040.length; j++){
			buildClothingCard(other0040[j]);
			}
        }
		
        else if (weather.value == "rain" ) {
            //filter on other0020 value
			var other0020 = data.filter(function(clothing){
			return clothing.code === 'other0020';
		});
		//build cards with other0010 filter
			for (var k = 0; k < other0020.length; k++){
			buildClothingCard(other0020[k]);
			}
        }
        
	};
	if ((gender.value === "2") && (temp.value === "60")) {
		
		var fem0060 = data.filter(function(clothing){
			return clothing.code === 'mal0060';
		});
		//check fem0060 filtered array
		console.log(fem0060);
		//build cards with fem0060 filter
		for (var i = 0; i < fem0060.length; i++){
			buildClothingCard(fem0060[i]);
		}
		
		//weather.value == "clear" 
		if (weather.value == "sun") {
        //filter on sun0010 value
        var sun0010 = data.filter(function(clothing){
			return clothing.code === 'sun0010';
		});
		
		//build cards with sun0010 filter
		for (var j = 0; j < sun0010.length; j++){
			buildClothingCard(sun0010[j]);
			}
        }
		if (weather.value == "cloud") {
        //filter on other0030 value
        var other0030 = data.filter(function(clothing){
			return clothing.code === 'other0030';
		});
		
		//build cards with other0030 filter
		for (var j = 0; j < other0030.length; j++){
			buildClothingCard(other0030[j]);
			}
        }
		
        else if (weather.value == "rain" ) {
            //filter on other0010 value
			var other0010 = data.filter(function(clothing){
			return clothing.code === 'other0010';
		});
		//build cards with other0010 filter
			for (var k = 0; k < other0010.length; k++){
			buildClothingCard(other0010[k]);
			}
        }
        
	};
	if ((gender.value === "2") && (temp.value === "50")) {
		
		var fem0060 = data.filter(function(clothing){
			return clothing.code === 'mal0050';
		});
		//check fem0060 filtered array
		console.log(fem0060);
		//build cards with fem0060 filter
		for (var i = 0; i < fem0060.length; i++){
			buildClothingCard(fem0060[i]);
		}
		
		//weather.value == "clear" 
		if (weather.value == "sun") {
        //filter on sun0010 value
        var sun0010 = data.filter(function(clothing){
			return clothing.code === 'sun0010';
		});
		
		//build cards with sun0010 filter
		for (var j = 0; j < sun0010.length; j++){
			buildClothingCard(sun0010[j]);
			}
        }
		if (weather.value == "cloud") {
        //filter on other0030 value
        var other0030 = data.filter(function(clothing){
			return clothing.code === 'other0030';
		});
		
		//build cards with other0030 filter
		for (var j = 0; j < other0030.length; j++){
			buildClothingCard(other0030[j]);
			}
        }
		
        else if (weather.value == "rain" ) {
            //filter on other0010 value
			var other0010 = data.filter(function(clothing){
			return clothing.code === 'other0010';
		});
		//build cards with other0010 filter
			for (var k = 0; k < other0010.length; k++){
			buildClothingCard(other0010[k]);
			}
        }
        
	};
	if ((gender.value === "2") && (temp.value === "40")) {
		
		var fem0060 = data.filter(function(clothing){
			return clothing.code === 'mal0040';
		});
		//check fem0060 filtered array
		console.log(fem0060);
		//build cards with fem0060 filter
		for (var i = 0; i < fem0060.length; i++){
			buildClothingCard(fem0060[i]);
		}
		
//weather.value == "clear" 
		if (weather.value == "sun") {
        //filter on sun0020 value
        var sun0020 = data.filter(function(clothing){
			return clothing.code === 'sun0020';
		});
		
		//build cards with sun0020 filter
		for (var j = 0; j < sun0020.length; j++){
			buildClothingCard(sun0020[j]);
			}
        }
		if (weather.value == "cloud") {
        //filter on other0040 value
        var other0040 = data.filter(function(clothing){
			return clothing.code === 'other0040';
		});
		
		//build cards with other0040 filter
		for (var j = 0; j < other0040.length; j++){
			buildClothingCard(other0040[j]);
			}
        }
		
        else if (weather.value == "rain" ) {
            //filter on other0020 value
			var other0020 = data.filter(function(clothing){
			return clothing.code === 'other0020';
		});
		//build cards with other0010 filter
			for (var k = 0; k < other0020.length; k++){
			buildClothingCard(other0020[k]);
			}
        }
        
	};
	if ((gender.value === "2") && (temp.value === "30")) {
		
		var fem0060 = data.filter(function(clothing){
			return clothing.code === 'mal0030';
		});
		//check fem0060 filtered array
		console.log(fem0060);
		//build cards with fem0060 filter
		for (var i = 0; i < fem0060.length; i++){
			buildClothingCard(fem0060[i]);
		}
		
//weather.value == "clear" 
		if (weather.value == "sun") {
        //filter on sun0020 value
        var sun0020 = data.filter(function(clothing){
			return clothing.code === 'sun0020';
		});
		
		//build cards with sun0020 filter
		for (var j = 0; j < sun0020.length; j++){
			buildClothingCard(sun0020[j]);
			}
        }
		if (weather.value == "cloud") {
        //filter on other0040 value
        var other0040 = data.filter(function(clothing){
			return clothing.code === 'other0040';
		});
		
		//build cards with other0040 filter
		for (var j = 0; j < other0040.length; j++){
			buildClothingCard(other0040[j]);
			}
        }
		
        else if (weather.value == "rain" ) {
            //filter on other0020 value
			var other0020 = data.filter(function(clothing){
			return clothing.code === 'other0020';
		});
		//build cards with other0010 filter
			for (var k = 0; k < other0020.length; k++){
			buildClothingCard(other0020[k]);
			}
        }

};
}