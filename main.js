window.onload=function(){
	var submit = document.getElementById("submit");
	submit.addEventListener('click', updateRecs, false);
}

var data = [
        {code: "fem0060", gender: "female", name: "Sports Bra", img: "img/female/sportsbra.png", desc: "Helps limit movement and provide support when running" },
        {code: "fem0060", gender: "female", name: "Singlet", img: "img/female/singlet.png", desc: " " },
		{code: "fem0060", gender: "female", name: "Shorts", img: "img/female/shorts.png", desc: " " },
		{code: "fem0050", gender: "female", name: "Sports Bra", img: "img/female/sportsbra.png", desc: "A good sports bra helps limit movement and provide support when running." },
        {code: "fem0050", gender: "female", name: "Short Sleeve", img: "img/female/shortsleeve.png", desc: " " },
		{code: "fem0050", gender: "female", name: "Shorts", img: "img/female/shorts.png", desc: " " },
		{code: "fem0040", gender: "female", name: "Sports Bra", img: "img/female/sportsbra.png", desc: "A good sports bra helps limit movement and provide support when running." },
        {code: "fem0040", gender: "female", name: "Long Sleeve", img: "img/female/longsleeve.png", desc: " " },
		{code: "fem0040", gender: "female", name: "Shorts", img: "img/female/shorts.png", desc: " " },
		{code: "fem0040", gender: "neutral", name: "gloves", img: "img/gloves.png", desc: " " },
        {code: "fem0040", gender: "neutral", name: "hat", img: "img/hat.jpg", desc: " " },
		{code: "fem0030", gender: "female", name: "Sports Bra", img: "img/female/sportsbra.png", desc: "A good sports bra helps limit movement and provide support when running." },
        {code: "fem0030", gender: "female", name: "Long Sleeve", img: "img/female/longsleeve.png", desc: " " },
		{code: "fem0030", gender: "female", name: "Tights", img: "img/female/tights.png", desc: " " },
		{code: "fem0030", gender: "neutral", name: "jacket", img: "img/jacket.gif", desc: " " },
        {code: "fem0030", gender: "neutral", name: "gloves", img: "img/gloves.png", desc: " " },
        {code: "fem0030", gender: "neutral", name: "hat", img: "img/hat.jpg", desc: " " },
		{code: "mal0060", gender: "male", name: "Singlet", img: "img/male/singlet.png", desc: " " },
		{code: "mal0060", gender: "male", name: "Shorts", img: "img/male/shorts.png", desc: " " },
		{code: "mal0050", gender: "male", name: "Short Sleeve", img: "img/male/shortsleeve.png", desc: " " },
		{code: "mal0050", gender: "male", name: "Shorts", img: "img/male/shorts.png", desc: " " },
		{code: "mal0040", gender: "male", name: "Long Sleeve", img: "img/male/longsleeve.png", desc: " " },
		{code: "mal0040", gender: "male", name: "Shorts", img: "img/male/shorts.png", desc: " " },
		{code: "mal0040", gender: "neutral", name: "gloves", img: "img/gloves.png", desc: " " },
        {code: "mal0040", gender: "neutral", name: "hat", img: "img/hat.jpg", desc: " " },
		{code: "mal0030", gender: "male", name: "Long Sleeve", img: "img/male/longsleeve.png", desc: " " },
		{code: "mal0030", gender: "male", name: "Tights", img: "img/male/tights.png", desc: " " },
		{code: "mal0030", gender: "neutral", name: "jacket", img: "img/jacket.gif", desc: " " },
        {code: "mal0030", gender: "neutral", name: "gloves", img: "img/gloves.png", desc: " " },
        {code: "mal0030", gender: "neutral", name: "hat", img: "img/hat.jpg", desc: " " },
		{code: "other0010", gender: "neutral", name: "Visor", img: "img/visor.png", desc: " " },
        {code: "sun0010", gender: "neutral", name: "sunglasses", img: "img/sunglasses.png", desc: " " },
        {code: "sun0010", gender: "neutral", name: "sunscreen", img: "img/sunscreen.jpg", desc: " " }
	];

function updateRecs() {
    //display clothing rec title
    document.getElementById("rightColumn").style.display = "";
    
    //store form values
	var gender = document.getElementById("gender");
	var temp = document.getElementById("temp");
    var weather = document.getElementById("weather");
    
    //clothing recs displayed if female and 60 is selected
	if ((gender.value === "1") && (temp.value === "60")) {
		
		var buildClothingCard = function (clothing) {
			
		var div = document.createElement('div');
        var h3 = document.createElement('h3');
        var img = document.createElement('img');
        var p = document.createElement('p');
        
        var body = document.querySelector('.clothing');
	       	
        div.setAttribute('class', 'card');
        h3.innerHTML = clothing.name;
        img.src = clothing.img;
        img.setAttribute('class', 'img');
        p.setAttribute('class', 'desc');
        p.innerHTML = clothing.desc;
		
		// FIGURE OUT NEXT WEEK HOW TO REMOVE PREVIOUS CARDS 
		// while (body.hasChildNodes()) {
        //        div.removeChild(div.lastChild);
        //    }   	
		body.append(div);
        div.append(h3);
        div.append(img);
        div.append(p);
			
		};
		
		var fem0060 = data.filter(function(clothing){
			return clothing.code === 'fem0060';
		});
		//check fem0060 filtered array
		console.log(fem0060);
		//build cards with fem0060 filter
		for (var i = 0; i < fem0060.length; i++){
			buildClothingCard(fem0060[i]);
		}
		
		if (weather.value == "sun") {
        //filter on sun0010 value
        var sun0010 = data.filter(function(clothing){
			return clothing.code === 'sun0010';
		});
		
		console.log(sun0010);
		//build cards with sun0010 filter
		for (var j = 0; j < sun0010.length; j++){
			buildClothingCard(sun0010[j]);
			}
        }
		
        else if (weather.value == "cloud" || weather.value == "rain" ) {
            //filter on other0010 value
			var other0010 = data.filter(function(clothing){
			return clothing.code === 'other0010';
		});
		
		//check other0010 filter
			console.log(other0010);
		
		//build cards with other0010 filter
			for (var k = 0; k < other0010.length; k++){
			buildClothingCard(other0010[k]);
			}
        }
		
		
		//to create cards for every item in data object
		//data.forEach(function(clothing){		is also 	for (var i = 0; i < data.length; i++){
		//	buildClothingCard(clothing)			is also 	buildClothingCard(data[i]);
		//});									is also		}

	}

	else if ((gender.value === "1") && (temp.value === "50"))
	{
		alert("You've selected female and 50F degrees"); //test
	}
}