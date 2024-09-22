let bgImage;
let NerkoOne;
let volumeOnImg, volumeOffImg, isVolumeOn;
let song; 
let buttonSize = 40; 
let buttonX, buttonY; 
let homeIcon;
let homeIconX, homeIconY, homeIconWidth, homeIconHeight;
let Anton;
let step = 1;
let padding = 50;
let imageOverlay;
let isOverlayVisible = false;
let joy1;
let joyeb, sadnesseb, angereb, feareb, disgusteb;
let joym, sadnessm, angerm, fearm, disgustm;
let joystep2;
let heart, joyheart, joyheart1;
let x1, x11;
let y1, y11;
let x2, x22;
let y2, y22;
let a, b;
let mina, maxa, minb, maxb;
let heartshow = false;
let speed = 10;
let smile, smile1;
let smile1show = false;
let joypage;

function preload() {

    bgImage = loadImage('images/joynew.png'); 
    volumeOnImg = loadImage('images/speaker-on.png');
    volumeOffImg = loadImage('images/speaker-off.png');
    song = loadSound('sound/joy.mp3');
    NerkoOne = loadFont('font/NerkoOne-Regular.ttf');
    Anton = loadFont('font/Anton-Regular.ttf');
    imageOverlay = loadImage('images/menu.png');
    emtl= loadImage('images/emtl.png');
    homeIcon = loadImage('images/home.png');
    joyeb = loadImage('images/joyeb.png');
    sadnesseb = loadImage('images/sadnesseb.png');
    angereb = loadImage('images/angereb.png');
    feareb = loadImage('images/feareb.png');
    disgusteb = loadImage('images/disgusteb.png');
    joym = loadImage('images/joym.png');
    sadnessm = loadImage('images/sadnessm.png');
    angerm = loadImage('images/angerm.png');
    fearm = loadImage('images/fearm.png');
    disgustm = loadImage('images/disgustm.png');
    joystep2 = loadImage('images/joystep2.png');
    joyheart = loadImage('images/joyheart.png');
    joyheart1 = loadImage('images/joyheart1.png');
    heart = loadImage('images/heart.png');
    smile = loadImage('images/smile.png');
    smile1 = loadImage('images/smile1.png');
    joypage = loadImage('images/joypage.png');
    
  }

  function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
    song.loop();
    song.setVolume(0); 
  
    buttonX = width - 60;
    buttonY = 20;

    homeIconX = 30;
    homeIconY = 20;
    homeIconWidth = 40;
    homeIconHeight = 37;

    x1 = width/2 + 290;
    y1 = height/2 - 160;
    x2 = width/2 - 480;
    y2 = height/2 + 215;
    x11= width/2 + 290;
    y11= height/2 - 160;
    x22 = width/2 - 480;
    y22 = height/2 + 215;

    a =  width / 2 - 200;
    b = height / 2 + 50 ;
    mina = width/2 - 500;
    maxa = width/2 - 100;
    minb = height/2 - 250;
    maxb = height/2 + 250;

  }

function draw () {
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

    image(homeIcon, homeIconX, homeIconY, homeIconWidth, homeIconHeight);
  
    if (isVolumeOn) {
      image(volumeOnImg, buttonX, buttonY, buttonSize, buttonSize);
    } else {
      image(volumeOffImg, buttonX, buttonY, buttonSize, buttonSize);
    }

    image(joypage, width - 230, 20, 150, 41);
    
    push();
    textAlign(CENTER, CENTER);
    textSize(90);
    textFont(Anton);
    fill(211, 201, 201);
    text("JOY", width / 2 + 4, height / 7);
    fill(241, 184, 113);
    text("JOY", width / 2, height / 7);
    pop();

    if (step === 1) {
      image(emtl, width / 2 - 500, height / 2 - 200, 1000, 500);
      image(joyeb, x1, y1, 200, 22);
      image(sadnesseb, x11, y11 + 100, 200, 22);
      image(angereb, x11, y11 + 200, 200, 22);
      image(feareb, x11, y11 + 300, 200, 22);
      image(disgusteb, x11, y11 + 400, 200, 22);
      textAlign(CENTER, CENTER);
      rectMode(CENTER);
      textSize(20);
      textFont(Anton);
      fill(211, 201, 201);
      text("Sometime I am joyful without feeling it. \n Maybe, joy comes from basic things around me that I may not aware of. ", width / 2, height - 30 - padding, 1200, 100);
      textFont(NerkoOne);
      text("Click to choose the right eyebrown for joy", width/2, height / 2 - 180);
    } else if (step === 2) {
      image(joystep2, width / 2 - 500, height / 2 - 200, 1000, 500);
      image(joym, x2, y2, 150, 70);
      image(sadnessm, x22, y22 - 100, 150, 70);
      image(angerm, x22, y22 - 200, 150, 70);
      image(fearm, x22, y22 - 300, 150, 70);
      image(disgustm, x22, y22 - 400, 150, 70);
      textAlign(CENTER, CENTER);
      rectMode(CENTER);
      textSize(20);
      textFont(Anton);
      fill(211, 201, 201);
      text("To me, joy is the melody that dances through my heart, a symphony of happiness that uplifts my spirit.", width / 2, height - 30 - padding, 1200, 100);
      textFont(NerkoOne);
      text("Click to choose the right mouth for joy", width/2, height / 2 - 180);
    } else if (step === 3) {
      if (heartshow) {
        image(joyheart1, width / 2 - 500, height / 2 - 200, 1000, 500); 
      } else {
        image(joyheart, width / 2 - 500, height / 2 - 200, 1000, 500);
      }     
      image(heart, a, b, 51, 46);
      if (a >= width/2 - 100 && b >= height / 2 + 160) {
        heartshow = true;
      }
      textAlign(CENTER, CENTER);
      rectMode(CENTER);
      textSize(20);
      textFont(Anton);
      fill(211, 201, 201);
      text("Joy fills my heart when I achieve a personal goal, or when I spend time with my beloved ones.", width / 2, height - 30 - padding, 1200, 100);
      textFont(NerkoOne);
      text("Click W, A, S D to move the yellow heart to cover the X", width/2, height / 2 - 180);
    } else if (step === 4) {
      image(smile, width / 2 - 500, height / 2 - 200, 1000, 500);
      if (smile1show) {
      image(smile1, width / 2 - 500, height / 2 - 200, 1000, 500);
      }
      textAlign(CENTER, CENTER);
      rectMode(CENTER);
      textSize(20);
      textFont(Anton);
      fill(211, 201, 201);
      text("Whether it's the simple pleasure of living a peaceful life or exhilarating thrill of a new adventure, \n joy is a constant companion that makes life worth living. So do not hide the smile! ", width / 2, height - 30 - padding, 1200, 100);
      textFont(NerkoOne);
      text("Hold S to reveal the smile", width/2, height / 2 - 180);
    }

    if (keyIsDown(85)) {
      isOverlayVisible = true;
    } else {
      isOverlayVisible = false;
    }
  
    if (isOverlayVisible) {
      image(imageOverlay, width / 2 - 500, height / 2 - 200, 1000, 500);
    }

}

function mousePressed() { 
    if (mouseX > buttonX && mouseX < buttonX + buttonSize && mouseY > buttonY && mouseY < buttonY + buttonSize) {
      isVolumeOn = !isVolumeOn; 
      if (isVolumeOn) {
        song.setVolume(1); 
      } else {
        song.setVolume(0); 
      }
    }
   
   if (mouseX > homeIconX && mouseX < homeIconX + homeIconWidth && mouseY > homeIconY && mouseY < homeIconY + homeIconHeight) {
          window.location.href = "index.html";
   }
   
}

function keyPressed() {
  if (keyCode === 32) {
    step++;
    if (step > 4) {
      step = 1;
    }
  }
  if (step === 3) {
    if (keyIsDown(65)) { 
      a -= speed;
      a = constrain(a, mina, maxa);
    } else if (keyIsDown(87)) { 
      b -= speed;
      b = constrain(b, minb, maxb);
    } else if (keyIsDown(83)) { 
      b += speed;
      b = constrain(b, minb, maxb);
    } else if (keyIsDown(68)) { 
      a += speed;
      a = constrain(a, mina, maxa);
    }
  }
  if (step === 4 && keyCode === 83) { 
    smile1show = true;
  }
  if (keyCode === 50) { 
    window.location.href = "sadness.html"; 
  }
  if (keyCode === 51) { 
    window.location.href = "anger.html"; 
  }
  if (keyCode === 52) { 
    window.location.href = "fear.html"; 
  }
  if (keyCode === 53) { 
    window.location.href = "disgust.html"; 
  }
}

function keyReleased() {
  if (step === 4 && keyCode === 83) {
    smile1show = false;
  }
}

function mouseClicked() {
  if (step === 1 && mouseX >= x1 && mouseX <= x1 + 200 && mouseY >= y1 && mouseY <= y1 + 22) {
    x1 = width / 2 - 100;
    y1 = height / 2 - 50;
  }
  if (step === 2 && mouseX >= x2 && mouseX <= x2 + 150 && mouseY >= y2 && mouseY <= y2 + 70) {
    x2 = width / 2 - 80;
    y2 = height / 2 + 115;
  }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    buttonX = width - buttonSize - 20;
    buttonY = 20;
  }
  
  