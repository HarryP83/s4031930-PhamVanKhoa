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
let fearstep2, fearstep3;
let topp, bottom, left, right;
let fearcrowd, fearcrowd1;
let crowd = false;
let x1, x11;
let y1, y11;
let x2, x22;
let y2, y22;
let fearpage;

function preload() {

    bgImage = loadImage('images/fearnew.png'); 
    volumeOnImg = loadImage('images/speaker-on.png');
    volumeOffImg = loadImage('images/speaker-off.png');
    song = loadSound('sound/fear.mp3');
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
    fearstep2 = loadImage('images/fearstep2.png');
    fearstep3 = loadImage('images/fearstep3.png');
    topp = loadImage('images/top.png');
    bottom = loadImage('images/bottom.png');
    left = loadImage('images/left.png');
    right = loadImage('images/right.png');
    fearcrowd = loadImage('images/fearcrowd.png');
    fearcrowd1 = loadImage('images/fearcrowd1.png');
    fearpage = loadImage('images/fearpage.png');

  }

  function setup() {
    angleMode(DEGREES);
    createCanvas(windowWidth, windowHeight);
    noStroke();
    song.loop();
    song.setVolume(0); 
  
    buttonX = width - 60;
    buttonY = 20;

    homeIconX = 30;
    homeIconY = 20;
    homeIconWidth = 40;
    homeIconHeight = 40;

    x1 = width/2 + 290;
    y1 = height/2 - 150;
    x2 = width/2 - 480;
    y2 = height/2 + 215;
    x11= width/2 + 290;
    y11= height/2 - 150;
    x22 = width/2 - 480;
    y22 = height/2 + 215;

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

    image(fearpage, width - 230, 20, 150, 41);

    push();
    textAlign(CENTER, CENTER);
    textSize(90);
    textFont(Anton);
    fill(211, 201, 201);
    text("FEAR", width / 2 + 4, height / 7);
    fill(174, 144, 198);
    text("FEAR", width / 2, height / 7);
    pop();

    if (step === 1) {
      image(emtl, width / 2 - 500, height / 2 - 200, 1000, 500);
      image(joyeb, x11, y11, 200, 22);
      image(sadnesseb, x11, y11 + 100, 200, 22);
      image(angereb, x11, y11 + 200, 200, 22);
      image(feareb, x1, y1 + 300, 200, 22);
      image(disgusteb, x11, y11 + 400, 200, 22);
      textAlign(CENTER, CENTER);
      rectMode(CENTER);
      textSize(20);
      textFont(Anton);
      fill(211, 201, 201);
      text("Fear is a fundamental emotion that serves as a protective mechanism, alerting us to potential threats or dangers. ", width / 2, height - 30 - padding, 1200, 100);
      textFont(NerkoOne);
      text("Click to choose the right eyebrown for sadness", width/2, height / 2 - 180);
    } else if (step === 2) {
      image(fearstep2, width / 2 - 500, height / 2 - 200, 1000, 500);
      image(joym, x22, y22, 150, 70);
      image(sadnessm, x22, y22 - 100, 150, 70);
      image(angerm, x22, y22 - 200, 150, 70);
      image(fearm, x2, y2 - 300, 150, 70);
      image(disgustm, x22, y22 - 400, 150, 70);
      textAlign(CENTER, CENTER);
      rectMode(CENTER);
      textSize(20);
      textFont(Anton);
      fill(211, 201, 201);
      text(" To me, it's a complex response involving both physical such as increasing heart rates, sweating\n and psychological components like worry or anxiety.", width / 2, height - 30 - padding, 1200, 100);
      textFont(NerkoOne);
      text("Click to choose the right mouth for sadness", width/2, height / 2 - 180);
    } else if (step === 3) {
      image(fearstep3, width / 2 - 500, height / 2 - 200, 1000, 500);
      let leftX = width/2 - 50;
      let leftY = height/2 + 50;

      let leftAngle = atan2(mouseY - leftY, mouseX - leftX);
    
      push();
      translate(leftX, leftY);
      fill(255);
      ellipse(0, 0, 75, 75);
      rotate(leftAngle);
      fill(0);
      ellipse(20, 0, 35, 35);
      pop();
    
      let rightX = width/2 + 50;
      let rightY = height/2 + 50;
      let rightAngle = atan2(mouseY - rightY, mouseX - rightX);
    
      push();
      translate(rightX, rightY);
      fill(255);
      ellipse(0, 0, 75, 75);
      rotate(rightAngle);
      fill(0);
      ellipse(20, 0, 35, 35);
      pop();

  if (mouseX > width/2 - 1000 / 2 && mouseX < width/2 + 1000 / 2 && mouseY > height/2 - 500 / 2 && mouseY < height/2 - 500 / 4) {
    text("change", width/2 - 10, height/2 - 650 / 4);
    text("death", width/2 - 40, height/2 - 500 / 4);
    text("heights", width/2 + 50, height/2 - 550 / 4);
    text("the dark", width/2 + 30, height/2 - 350 / 4);
    text("pain", width/2, height/2 - 200 / 4);
    image(topp, width/2 - 120, height/2 - 200, 247, 189);
  }

  if (mouseX > width/2 + 1000 / 4 && mouseX < width/2 + 1000 / 2 && mouseY > height/2 - 500 / 2 && mouseY < height/2 + 500 / 2) {
    text("illness", width/2 + 900 / 4, height/2 + 10);
    text("losing control", width/2 + 1600 / 4, height/2 + 70);
    text("snakes", width/2 + 1200 / 4, height/2 + 40);
    text("clowns", width/2 + 1700 / 4, height/2 + 10);
    text("lizards", width/2 + 1000 / 4, height/2 + 90);
    image(right, width/2 + 100, height/2 - 100, 401, 298);
  }

  if (mouseX > width/2 - 1000 / 2 && mouseX < width/2 + 1000 / 2 && mouseY > height/2 + 900 / 4 && mouseY < height/2 + 900 / 2) {
    text("ghosts", width/2 - 50, height/2 + 1100 / 4);
    text("loneliness", width/2 - 20, height/2 + 850 / 4);
    text("failure", width/2 + 30, height/2 + 700 / 4);
    text("murders", width/2 + 50, height/2 + 1000 / 4);
    text("spiders", width/2, height/2 + 550 / 4);
    image(bottom, width/2 - 120, height/2 + 110, 247, 189);
  }

  if (mouseX > width/2 - 1000 / 2 && mouseX < width/2 - 1000 / 4 && mouseY > height/2 - 1000 / 2 && mouseY < height/2 + 500 / 2) {
    text("rejection", width/2 - 1600 / 4, height/2 + 120);
    text("public speaking", width/2 - 1500 / 4, height/2 + 10);
    text("drowning", width/2 - 1300 / 4, height/2 + 70);
    text("blood", width/2 - 1000 / 4, height/2);
    text("betrayal", width/2 - 900 / 4, height/2 + 50);
    image(left, width/2 - 500, height/2 - 100, 401, 298);
  }
      textAlign(CENTER, CENTER);
      rectMode(CENTER);
      textSize(20);
      textFont(Anton);
      fill(211, 201, 201);
      text("To be honest, I am fearful of lots of things such as the dark, ghosts, blood, etc., \n and I can rarely control myself when I face these.", width / 2, height - 30 - padding, 1200, 100);
      textFont(NerkoOne);
      text("Move the mouse around to see things I am fearful of", width/2, height / 2 - 180);
    } else if (step === 4) {
      if (crowd) {
        image(fearcrowd1, width / 2 - 500, height / 2 - 200, 1000, 500);
      } else {
        image(fearcrowd, width / 2 - 500, height / 2 - 200, 1000, 500);
      }
      textAlign(CENTER, CENTER);
      rectMode(CENTER);
      textSize(20);
      textFont(Anton);
      fill(211, 201, 201);
      text("Sometimes, I am ashamed of my fears, but I believe everybody has their fears, so it's quite normal. \nI'm not alone and neither are you, so don't hide your fears!", width / 2, height - 30 - padding, 1200, 100);
      textFont(NerkoOne);
      fill(0);
      text("Click to find fear", width/2, height / 2 - 180);
      fill(211, 201, 201);
      text("Click to find fear", width/2 + 2, height / 2 - 180);
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

    if (step === 4){
      if (mouseX >= width/2 - 1000/2 + 60 && mouseX <= width/2 - 1000/2 + 160 && mouseY >= height/2 - 500/2 + 280 && mouseY <= height/2 - 500/2 + 420) {
      crowd = true;
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
  if (step === 4 && keyCode === 67) { 
    fireEffect = true;
    cry1show = true;
  }
  if (keyCode === 49) { 
    window.location.href = "joy.html"; 
  }
  if (keyCode === 51) { 
    window.location.href = "anger.html"; 
  }
  if (keyCode === 50) { 
    window.location.href = "sadness.html"; 
  }
  if (keyCode === 53) { 
    window.location.href = "disgust.html"; 
  }
}

function mouseClicked() {
  if (step === 1 && mouseX >= x1 && mouseX <= x1 + 200 && mouseY >= y1 + 300 && mouseY <= y1 + 300+ 22) {
    x1 = width / 2 - 100;
    y1 = height / 2 - 50 - 300;
  }
  if (step === 2 && mouseX >= x2 && mouseX <= x2 + 150 && mouseY >= y2 - 300 && mouseY <= y2 - 300 + 70) {
    x2 = width / 2 - 80;
    y2 = height / 2 + 115 + 300;
  }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    buttonX = width - buttonSize - 20;
    buttonY = 20;
  }
  
  