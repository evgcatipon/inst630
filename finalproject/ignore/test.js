function Confirm() {
    //display clothing rec title
    document.getElementById("rightColumn").style.display = "";
    
    //store form values
	var gender = document.getElementById("gender");
	var temp = document.getElementById("temp");
    var weather = document.getElementById("weather");
    
    //clothing recs displayed if female and 60 is selected
	if ((gender.value === "1") &&(temp.value === "60")){ 
        if (weather.value == "sun") {
            var clothingTitle = document.createElement("h3");
            clothingTitle.innerHTML = "Sunglasses";
            var image = document.createElement("img");
            image.src = "img/sunglasses.png";
            image.setAttribute('class', 'img');//set attribute as class
            var paragraph = document.createElement("p");
            paragraph.innerHTML = "Sunglasses Description";
            paragraph.setAttribute('class','desc');
            var result4 = document.getElementById("result4");
            
                result4.appendChild(clothingTitle);//first, append title element
                result4.appendChild(image);//second, append image element
                result4.appendChild(paragraph);//third, append text element

        
            var clothingTitle = document.createElement("h3");
            clothingTitle.innerHTML = "Sunscreen";
            var image = document.createElement("img");
            image.src = "img/sunscreen.jpg";
            image.setAttribute('class', 'img');//set attribute as class
            var paragraph = document.createElement("p");
            paragraph.innerHTML = "Sunscreen Description";
            paragraph.setAttribute('class','desc');
            var result5 = document.getElementById("result5");
            
            result5.appendChild(clothingTitle);//first, append title element
            result5.appendChild(image);//second, append image element
            result5.appendChild(paragraph);//third, append text element
            
            }
        else if (weather.value == "cloud" || weather.value == "rain" ) {
            
            var clothingTitle = document.createElement("h3");
            clothingTitle.innerHTML = "Visor";
            var image = document.createElement("img");
            image.src = "img/visor.jpg";
            image.setAttribute('class', 'img');//set attribute as class
            var paragraph = document.createElement("p");
            paragraph.innerHTML = "Good for soaking up sweat or blocking the sun";
            paragraph.setAttribute('class','desc');
            var result4 = document.getElementById("result4");
            
            result4.appendChild(clothingTitle);//first, append title element
            result4.appendChild(image);//second, append image element
            result4.appendChild(paragraph);//third, append text element
        }
        var clothingTitle = document.createElement("h3");
        clothingTitle.innerHTML = "Sports Bra";
        var image = document.createElement("img");
        image.src = "img/female/sportsbra.png";
        image.setAttribute('class', 'img');//set attribute as class
        var paragraph = document.createElement("p");
        paragraph.innerHTML = "Sports Bra Description";
        paragraph.setAttribute('class','desc');
        var result1 = document.getElementById("result1");
            
        result1.appendChild(clothingTitle);//first, append title element
        result1.appendChild(image);//second, append image element
        result1.appendChild(paragraph);//third, append text element
            
        var clothingTitle = document.createElement("h3");
        clothingTitle.innerHTML = "Long Sleeve";
        var image = document.createElement("img");
        image.src = "img/female/longsleeve.png";
        image.setAttribute('class', 'img');//set attribute as class
        var paragraph = document.createElement("p");
        paragraph.innerHTML = "Long Sleeve Description";
        paragraph.setAttribute('class','desc');
        var result2 = document.getElementById("result2");
            
        result2.appendChild(clothingTitle);//first, append title element
        result2.appendChild(image);//second, append image element
        result2.appendChild(paragraph);//third, append text element
            
        var clothingTitle = document.createElement("h3");
        clothingTitle.innerHTML = "Shorts";
        var image = document.createElement("img");
        image.src = "img/female/shorts.png";
        image.setAttribute('class', 'img');//set attribute as class
        var paragraph = document.createElement("p");
        paragraph.innerHTML = "Shorts Description";
        paragraph.setAttribute('class','desc');
        var result3 = document.getElementById("result3");
            
        result3.appendChild(clothingTitle);//first, append title element
        result3.appendChild(image);//second, append image element
        result3.appendChild(paragraph);//third, append text element
        
	} 

	else if ((gender.value == "1") && (temp.value == "50"))
	{ 
	    alert("You've selected female and 50F degrees"); //test
	} 
    else if ((gender.value == "1") && (temp.value == "40"))
	{ 
	    alert("You've selected female and 40F degrees"); //test
	} 
    else if ((gender.value == "1") && (temp.value == "30"))
	{ 
	    alert("You've selected female and 30F degrees"); //test
	} 
    else if ((gender.value == "2") && (temp.value == "60"))
	{ 
	    alert("You've selected male and 60F degrees"); //test
	} 
    else if ((gender.value == "2") && (temp.value == "50"))
	{ 
	    alert("You've selected male and 50F degrees"); //test
	} 
    else if ((gender.value == "2") && (temp.value == "40"))
	{ 
	    alert("You've selected male and 40F degrees"); //test
	} 
    else if ((gender.value == "2") && (temp.value == "30"))
	{ 
	    alert("You've selected male and 30F degrees"); //test
	} 
}