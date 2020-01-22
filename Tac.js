// X-image: xbackground-removebg-preview.png
// O-image: circlettt.png

togglePic = true;

let togglePicture = function(){

    if(togglePic === true){
        togglePic=false;
    }
};

let hoverX = function(){

    image = document.createElement("IMG");
    image.onmouseover = togglePicture;
    image.src = "xbackground-removebg-preview.png";

    let content = document.getElementById("block1");

    content.appendChild(image);

};

let bruhv = function(){

    if(togglePic === false){
        image.src = "";
        togglePic=true;
    }
};