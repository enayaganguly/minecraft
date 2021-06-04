var canvas= new fabric.Canvas('myCanvas');
steveX= 10;
steveY= 10;
blockImgW= 30;
blockImgH= 30;
var playerObject="";
var blockImgObject="";
function playerUpdate(){
    fabric.Image.fromURL("player.png",function(Img){
        playerObject= Img;
        playerObject.scaleToWidth(150);
        playerObject.scaleToHeight(140);
        playerObject.set({
            top: steveY, left: steveX});
        canvas.add(playerObject);

    });
}
function new_Image(getImg){
    fabric.Image.fromURL(getImg,function(Img){
        blockImgObject= Img;
        blockImgObject.scaleToWidth(blockImgW);
        blockImgObject.scaleToHeight(blockImgH);
        blockImgObject.set({
            top: steveY, left: steveX});
        canvas.add(blockImgObject);

    });
}
window.addEventListener("keydown", myKeydown);
function myKeydown(e){
    keyPressed= e.keyCode;
    if(e.shiftKey == true && keyPressed == '80'){
        console.log("shiftP");
        blockImgH = blockImgH + 10;
        blockImgW = blockImgW + 10;
        document.getElementById("width").innerHTML= blockImgW;
        document.getElementById("height").innerHTML= blockImgH;
    }
    if(e.shiftKey == true && keyPressed == '77'){
        console.log("shiftM");
        blockImgH = blockImgH - 10;
        blockImgW = blockImgW - 10;
        document.getElementById("width").innerHTML= blockImgW;
        document.getElementById("height").innerHTML= blockImgH;
    }
    if(keyPressed == '38'){
        up();
        console.log("up");
    }
    if(keyPressed == '37'){
        left();
        console.log("left");
    }
    if(keyPressed == '39'){
        right();
        console.log("right");
    }
    if(keyPressed == '40'){
        down();
        console.log("down");
    }
    if(keyPressed == '87'){
        new_Image('wall.jpg');
        console.log("wall");
    }
    if(keyPressed == '71'){
        new_Image('ground.png');
        console.log("ground");
    }
    if(keyPressed == '76'){
        new_Image('light_green.png');
        console.log("light");
    }
    if(keyPressed == '84'){
        new_Image('trunk.jpg');
        console.log("trunk");
    }
    if(keyPressed == '82'){
        new_Image('roof.jpg');
        console.log("roof");
    }
    if(keyPressed == '89'){
        new_Image('yellow_wall.png');
        console.log("yellow");
    }
    if(keyPressed == '68'){
        new_Image('dark_green.png');
        console.log("dark");
    }
    if(keyPressed == '85'){
        new_Image('unique.png');
        console.log("unique");
    }
    if(keyPressed == '67'){
        new_Image('cloud.jpg');
        console.log("cloud");
    }
}
function up(){
    if(steveY >= 30){
        steveY = steveY-blockImgH;
        canvas.remove(playerObject);
        playerUpdate();
        console.log("steveX,steveY " + steveX +" "+ steveY);

    }
}
function down(){
    if(steveY <= 500){
        steveY = steveY+blockImgH;
        canvas.remove(playerObject);
        playerUpdate();
        console.log("steveX,steveY " + steveX +" "+ steveY);

    }
    
}
function left(){
    if(steveX >= 0){
        steveX = steveX-blockImgW;
        canvas.remove(playerObject);
        playerUpdate();
        console.log("steveX,steveY " + steveX +" "+ steveY);

    }
}
function right(){
    if(steveX <= 850){
        steveX = steveX+blockImgW;
        canvas.remove(playerObject);
        playerUpdate();
        console.log("steveX,steveY " + steveX +" "+ steveY);

    }
}