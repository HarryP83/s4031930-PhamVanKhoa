let bgImage;
let joybg, sadbg, angerbg, fearbg, disgustbg;
let NerkoOne;
let volumeOnImg, volumeOffImg, isVolumeOn;
let song; 
let buttonSize = 40; 
let buttonX, buttonY; 
let mask;
let mask1;
let x, y, z, j, s, a, f, d;
let speed = 0.1;
let imageOverlay;
let isOverlayVisible = false;
let manual = true;

function preload() {
  bgImage = loadImage('images/a3bg.png'); 
  joybg = loadImage('images/joybg.png');
  sadbg = loadImage('images/sadbg.png');
  angerbg = loadImage('images/angerbg.png');
  fearbg = loadImage('images/fearbg.png');
  disgustbg = loadImage('images/disgustbg.png');
  volumeOnImg = loadImage('images/speaker-on.png');
  volumeOffImg = loadImage('images/speaker-off.png');
  song = loadSound('sound/front.mp3');
  NerkoOne = loadFont('font/NerkoOne-Regular.ttf');
  mask = loadImage('images/mask.png');
  mask1 = loadImage('images/mask1.png');
  imageOverlay = loadImage('images/menu.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  song.loop();
  song.setVolume(0); 

  buttonX = width - 60;
  buttonY = 30;

  x = 100;
  y = 100;
  z = 100;
  j = 100;
  s = 100;
  a = 100;
  f = 100;
  d = 100;
}

function draw() {
  let imgAspect = bgImage.width / bgImage.height;
  let canvasAspect = width / height;
  
  let imgWidth, imgHeight;

  if (canvasAspect > imgAspect) {
    imgWidth = width;
    imgHeight = width / imgAspect;
  } else {
    imgWidth = height * imgAspect;
    imgHeight = height;
  }
  
  image(bgImage, 0, 0, imgWidth, imgHeight);

  image(joybg, width/5 + 210, j - 110, 928/1.2, 924/1.2);
  j += speed;
  if (j > 100 || j <= 90) {
    speed *= -1;}
  image(sadbg, width/5 - s - 129, 150, 873/1.2, 1029/1.2);
    s += speed;
  if (s > 120 || s <= 80) {
    speed *= -1;}
  image(angerbg, width/5 + a - 28, 369, 944/1.2, 847/1.2);
      a += speed;
  if (a > 100 || a <= 90) {
    speed *= -1;}
  image(fearbg, width/5 - 90, f - 120, 914/1.2, 974/1.2);
        f += speed;
  if (f > 100 || f <= 90) {
    speed *= -1;}
  image(disgustbg, width/5 + d + 320, 140, 882/1.2, 1032/1.2);
        d += speed;
  if (d > 100 || d <= 90) {
    speed *= -1;}

  image(mask, 120, x - 20, 350, 293);
  x += speed;
  if (x > 100 || x <= 90) {
    speed *= -1;}

  image(mask1, 350, 50, y + 20, 100);
  y += speed;
  if (y > 120 || y <= 80) {
    speed *= -1;}

  image(mask1, width/2 + 300, height/2 - z - 300, 400, 350);
  z += speed;
  if (z > 100 || z <= 90) {
    speed *= -1;}

  if (isVolumeOn) {
    image(volumeOnImg, buttonX, buttonY, buttonSize, buttonSize);
  } else {
    image(volumeOffImg, buttonX, buttonY, buttonSize, buttonSize);
  }
  rectMode(CENTER);
  fill(0, 0, 0, 50);
  rect(width / 2, height - height / 10 + 17, 200, height / 15, 20);
  fill(255, 255, 255);
  text("EXPERIENCE", width / 2, height - height / 10 + 27);
  textAlign(CENTER)
  textFont(NerkoOne);
  textSize(30);
  if (mouseX > width / 2 - 100 && mouseX < width / 2 - 100 + 200 &&
    mouseY > height - height / 10 + 20 - height / 15 / 2 && mouseY < height - height / 10 + 20 - height / 15 / 2 + height / 15) {
    cursor(HAND);
} else {
    cursor();
}

  if (keyIsDown(85)) {
      isOverlayVisible = true;
  } else {
      isOverlayVisible = false;
    }
  
  if (isOverlayVisible) {
      image(imageOverlay, width / 2 - 500, height / 2 - 200, 1000, 500);
    }

  if (manual) {
    fill(0, 0, 0, 127); 
    rect(width / 2, height / 2, width, height); 
    fill(255); 
    text('Recommend experiencing on 1920 x 1080 screen and with music turning on. \n Press "U" to read the user mannual. Press "C" to close this.', width / 2, height / 2);
    noStroke();
  }
}

function mousePressed() {
    if (getAudioContext().state !== 'running') {
    getAudioContext().resume();
  }
  if (mouseX > buttonX && mouseX < buttonX + buttonSize && mouseY > buttonY && mouseY < buttonY + buttonSize) {
    isVolumeOn = !isVolumeOn; 

    if (isVolumeOn) {
      song.setVolume(1); 
    } else {
      song.setVolume(0); 
    }
  }

  if (mouseX > width / 2 - 100 && mouseX < width / 2 - 100 + 200 &&
    mouseY > height - height / 10 + 20 - height / 15 / 2 && mouseY < height - height / 10 + 20 - height / 15 / 2 + height / 15) {
    window.location.href = "joy.html";
}
}

function keyPressed() {
  if (keyCode === 67) { 
    manual = false; 
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  buttonX = width - buttonSize - 20;
  buttonY = 20;
}
