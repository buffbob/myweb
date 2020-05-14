//const thumbBar = document.querySelector(".thumb-bar");
//const displayedImage = document.querySelector(".displayed-img");
//

// displayedImage.setAttribute("src", "static/images/ranch_web/ranch1.JPG");

//for (i=1; i<=10; i++){
//    const newImage = document.createElement("img");
//    const filepath = "static/images/ranch_web/ranch" + i + ".JPG";
//    newImage.setAttribute("src", filepath);
//    newImage.setAttribute("class", "displayed-img"); // todo: remove?????
//    newImage.onclick = function(event){
//        displayedImage.setAttribute("src", event.target.src);
//        }
//    thumbBar.appendChild(newImage);
//}


////  clock
function startTime() {
    const clockDiv = document.querySelector("#clock");
    let time = new Date();
    let hours = time.getHours();
    let mins = time.getMinutes();
    let secs = time.getSeconds();
    secs = checkTime(secs);
    mins = checkTime(mins);
    clockDiv.innerHTML = hours + ":" + mins + "." + secs;
    let t = setTimeout(startTime, 500);
}
function checkTime(num) {
    // if num less than 10 then add 0 at the beginning and return
    if (num < 10) {
      num = "0" + num;
    }
    return num;
}

function init() {
    startTime();
    const out_div = document.querySelector("#display-area");
    const disp_img = document.querySelector("#display-img");
    const thumbBar = document.querySelector('#thumb-bar-div');

    disp_img.width = document.querySelector("#display-area").clientWidth;
    let micro_img_width = Math.floor(disp_img.width/10);
    let i = 0;
    for (i = 1; i <= 10; i++) {
      let newImage = document.createElement('img');
      let filepath = 'static/images/ranch_web/ranch' + i + ".JPG";
      newImage.setAttribute('src', filepath);
      newImage.setAttribute("class", "micro-img");
      newImage.width = micro_img_width;
      newImage.onclick = function(event) {
        disp_img.setAttribute('src', event.target.src);
      }
      thumbBar.appendChild(newImage);
    }
}

function adjustSideBarImg(){
    let disp_img = document.querySelector("#display-img");
    disp_img.width = document.querySelector("#display-area").clientWidth;
    let micro_img_width = Math.floor(disp_img.width/10);
    let micros = document.querySelectorAll(".micro-img");
    for (i = 0; i < 10; i++) {
      micros[i].width = micro_img_width;
    }

}
window.onload = init;
window.onresize = adjustSideBarImg;
