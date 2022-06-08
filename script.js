// Man

// Challenges
// #1 - Add Vertical Movement -Done
// #2 - Make player wrap around the canvas
// #3 - Make player stop at edge of canvas -Done

// Setup Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 400;
cnv.height = 400;

// Global Variables
let x = 100;
let y = 100,health = 0, bady=100,badx = 150,left1 = false, up1 = false, go = true,
game = false, goodx = 50, goody = 300, left2 = false, up2 = false, full = false, trigger = true,start = true,
mouseX = 0, mouseY = 0, one = false, two = false, scoreval = 0, scoti = true,scorhigh = 0, badvar = 1;



let rightKeyPressed = false;
let leftKeyPressed = false;
let upKeyPressed = false;
let downKeyPressed = false;

let rightKeyPressed2 = false;
let leftKeyPressed2 = false;
let upKeyPressed2 = false;
let downKeyPressed2 = false;
let x2=100,y2=25;


// Call Draw Function on Page Load
window.addEventListener("load", draw);

function draw() {
  // LOGIC
  if (!one && !two){
  ctx.font = "42px Arial bold";
  ctx.fillStyle = "grey";
  ctx.fillRect(0,0,cnv.width,cnv.height);
  ctx.fillStyle = "white";
  ctx.fillRect(50,100,140,75);
  ctx.fillRect(220,100,140,75);
  ctx.fillRect(100,0,200,75);
  ctx.fillStyle = "black";
  ctx.fillText("1player", 50,150,150);
  ctx.fillText("2player", 225,150,150);
  ctx.fillText("Highscore: "+scorhigh, 100,50,190);
  scoreval = 0;
  }




  if (one){

  if (rightKeyPressed ) {
    x += 5;
  }

  if (leftKeyPressed  ) {
    x += -5;
  }
  if (upKeyPressed   ) {
    y += -5;
  }
  if (downKeyPressed ) {
    y += 5;
  }

  if (y+50 <=0){
    y =400;
  } else if (y >= 400){
    y=0;
  }
  if (x >= 400){
    x = 0;
  } else if (x+50 <= 0){
    x=400;
  }
  if (badx <=0){
    left1 = false;
  } else if (badx+200 >= 400 ) {
    left1 = true;
  }
  if (bady <=0){
    up1 = false;
  } else if (bady+150 >= 400 ) {
    up1 = true;
  }
  if (left1){
    badx-=badvar;
  } else {
    badx+=badvar;
  }
  if (up1){
    bady-=badvar;
  } else {
    bady+=badvar;
  }
  if (goodx <=0){
    left2 = false;
  } else if (goodx+75 >= 400 ) {
    left2 = true;
  }
  if (goody <=0){
    up2 = false;
  } else if (goody+75 >= 400 ) {
    up2 = true;
  }
  if (left2){
    goodx-=5;
  } else {
    goodx+=5;
  }
  if (up2){
    goody-=5;
  } else {
    goody+=5;
  }
  if (x +50>= badx && x <= badx +200 && y <= bady +150 && y+50 >=bady ){
    health += .75;
  }
  if (x +50>= goodx && x <= goodx +75 && y <= goody +75 && y+50 >=goody && !full ){
    health -= .5;
  }
  
  if (health >= 50){
    health = 50;
    go = false; 
    one = false;
    x = 25;
    y = 25;
    badx = 100;
    bady = 100;
    scoreval = 0;


    health = 0;
  } else if (health === 0){
    full = true;
  } else {
    full = false;
  }
  if (trigger){
    const timer = setTimeout(random, Math.random()*4000);
    trigger = false;
  }
  // DRAWING
  // Draw Background
  ctx.fillStyle = "skyblue";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  // Draw Rectangle
  ctx.fillStyle = "red";
  ctx.fillRect(badx, bady, 200, 150);
  ctx.fillStyle = "green";
  ctx.fillRect(goodx, goody, 75, 75);

  ctx.fillStyle = "purple";
  ctx.fillRect(x, y, 50, 50);

  ctx.fillStyle = "teal";
  ctx.fillRect(x, y, 50-health, 50);
  if(scoti){
    const score = setTimeout(scorez, 1000);
    scoti = false;
  }
  ctx.fillStyle = "black";
    ctx.fillText("Score: "+ scoreval, 0,30);
}




if (two){
  

  if (rightKeyPressed ) {
    x += 5;
  }

  if (leftKeyPressed  ) {
    x += -5;
  }
  if (upKeyPressed   ) {
    y += -5;
  }
  if (downKeyPressed ) {
    y += 5;
  }

  if (rightKeyPressed2 ) {
    x2 += 5;
  }

  if (leftKeyPressed2  ) {
    x2 += -5;
  }
  if (upKeyPressed2   ) {
    y2 += -5;
  }
  if (downKeyPressed2 ) {
    y2 += 5;
  }





  if (y+50 <=0){
    y =400;
  } else if (y >= 400){
    y=0;
  }
  if (x >= 400){
    x = 0;
  } else if (x+50 <= 0){
    x=400;
  }

  if (y2+50 <=0){
    y2 =400;
  } else if (y2 >= 400){
    y2=0;
  }
  if (x2 >= 400){
    x2 = 0;
  } else if (x2+50 <= 0){
    x2=400;
  }





  if (badx <=0){
    left1 = false;
  } else if (badx+200 >= 400 ) {
    left1 = true;
  }
  if (bady <=0){
    up1 = false;
  } else if (bady+150 >= 400 ) {
    up1 = true;
  }
  if (left1){
    badx-=badvar;
  } else {
    badx+=badvar;
  }
  if (up1){
    bady-=badvar;
  } else {
    bady+=badvar;
  }
  if (goodx <=0){
    left2 = false;
  } else if (goodx+75 >= 400 ) {
    left2 = true;
  }
  if (goody <=0){
    up2 = false;
  } else if (goody+75 >= 400 ) {
    up2 = true;
  }
  if (left2){
    goodx-=5;
  } else {
    goodx+=5;
  }
  if (up2){
    goody-=5;
  } else {
    goody+=5;
  }
  if (x +50>= badx && x <= badx +200 && y <= bady +150 && y+50 >=bady ||
    x2 +50>= badx && x2 <= badx +200 && y2 <= bady +150 && y2+50 >=bady){
    health += .75;
  }
  if (x +50>= goodx && x <= goodx +75 && y <= goody +75 && y+50 >=goody && !full ||
     x2 +50>= goodx && x2 <= goodx +75 && y2 <= goody +75 && y2+50 >=goody && !full){
    health -= .5;
  }
  
  if (health >= 50){
    health = 50;
    go = false; 
    two = false;
    x = 25;
    y = 25;
    x2 = 50;
    y2 = 25;

    badx = 100;
    bady = 100;
    scoreval = 0;


    health = 0;
  } else if (health === 0){
    full = true;
  } else {
    full = false;
  }
  if (trigger){
    const timer = setTimeout(random, Math.random()*4000);
    trigger = false;
  }
  // DRAWING
  // Draw Background
  ctx.fillStyle = "skyblue";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  // Draw Rectangle
  ctx.fillStyle = "red";
  ctx.fillRect(badx, bady, 200, 150);
  ctx.fillStyle = "green";
  ctx.fillRect(goodx, goody, 75, 75);

  ctx.fillStyle = "purple";
  ctx.fillRect(x, y, 50, 50);

  ctx.fillStyle = "teal";
  ctx.fillRect(x, y, 50-health, 50);


  ctx.fillStyle = "yellow";
  ctx.fillRect(x2, y2, 50, 50);

  ctx.fillStyle = "orange";
  ctx.fillRect(x2, y2, 50-health, 50);







  if(scoti){
    const score = setTimeout(scorez, 1000);
    scoti = false;
  }
  ctx.fillStyle = "black";
    ctx.fillText("Score: "+ scoreval, 0,30);
}

    
    

  // Tell draw to run again at 60FPS
  requestAnimationFrame(draw);
}

// EVENT STUFF
document.addEventListener("keydown", keydownHandler);
document.addEventListener("keyup", keyupHandler);
document.addEventListener("mousemove", mousemoveHandler);
document.addEventListener("mousedown", mousedownH);


function keydownHandler(event) {
  console.log(event.keyCode);

  if (event.keyCode === 39) {
    rightKeyPressed = true;
  } else if (event.keyCode === 37) {
    leftKeyPressed = true;
  } else if (event.keyCode === 38) {
    upKeyPressed = true;
  } else if (event.keyCode === 40) {
    downKeyPressed = true;
  }
  if (event.keyCode === 68) {
    rightKeyPressed2 = true;
  } else if (event.keyCode === 65) {
    leftKeyPressed2 = true;
  } else if (event.keyCode === 87) {
    upKeyPressed2 = true;
  } else if (event.keyCode === 83) {
    downKeyPressed2 = true;
  }


}

function keyupHandler(event) {
  if (event.keyCode === 39) {
    rightKeyPressed = false;
  } else if (event.keyCode === 37) {
    leftKeyPressed = false;
  } else if (event.keyCode === 38) {
    upKeyPressed = false;
  } else if (event.keyCode === 40) {
    downKeyPressed = false;
  }
  if (event.keyCode === 68) {
    rightKeyPressed2 = false;
  } else if (event.keyCode === 65) {
    leftKeyPressed2 = false;
  } else if (event.keyCode === 87) {
    upKeyPressed2 = false;
  } else if (event.keyCode === 83) {
    downKeyPressed2 = false;
  }
}

function random(){

  let hogie = Math.floor(Math.random()*2)+1;
  if (hogie = 1){up1= !up1;
  up2 = !up2;} else{
  left1 = !left1;
  left2 = !left2;}
  



  trigger = true;
}

function mousemoveHandler(event) {
  //update mousex and mousey
  let cnvRect = cnv.getBoundingClientRect();
  mouseX = event.x - cnvRect.x;
  mouseY = event.y - cnvRect.y;
}

function mousedownH (){
  if (!game){
  if (mouseX >= 50 && mouseX <= 190 && mouseY >= 100 && mouseY <= 175){
      one = true;
      //start = false;
      
  } else if (mouseX >= 220 && mouseX <= 360 && mouseY >= 100 && mouseY <= 175){
      two = true;
      //start = false;
      
  }}
}
function scorez(){
  scoreval++
  if (scoreval > scorhigh){
    scorhigh = scoreval;
  }
  if (scoreval >= 5){
    badvar += 1
  } else if (scoreval <=1){
    badvar = 1
  }
  scoti = true;
}