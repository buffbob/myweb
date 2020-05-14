const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */
for (let i=1; i<=10;i++){
	const newImage = document.createElement('img');
	const filepath = "static/images/ranch_web/ranch" + i + ".JPG";
	newImage.setAttribute('src', filepath);
	// newImage.setAttribute("class", "displayed_img");
	newImage.onclick = function(event){
		displayedImage.setAttribute("src", event.target.src);
	}
	thumbBar.appendChild(newImage);
}


/* Wiring up the Darken/Lighten button */

btn.onclick = function(){
	which_class = btn.getAttribute("class");
	if (which_class === "dark"){
		btn.setAttribute("class", "light");
		btn.textContent="Lighten";
		overlay.style.backgroundColor='rgba(0,0,0,0.5)';
	}
	else if (which_class === 'light'){
		btn.setAttribute("class", "dark");
		btn.textContent="Darken";
		overlay.style.backgroundColor='rgba(0,0,0,0)';
	}else{}
}