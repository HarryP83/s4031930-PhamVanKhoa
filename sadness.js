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
let sadstep2;
let cry, cry1;
let cry1show = false;
let hand, holdmask;
let a, b;
let mina, maxa, minb, maxb;
let mask;
let maskshow = false;
let speed = 10;
let x1, x11;
let y1, y11;
let x2, x22;
let y2, y22;
let particles = [];
let fireEffect = false;
let sadpage;

function preload() {

    bgImage = loadImage('images/sadnessnew.png'); 
    volumeOnImg = loadImage('images/speaker-on.png');
    volumeOffImg = loadImage('images/speaker-off.png');
    song = loadSound('sound/sad.mp3');
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
    sadstep2 = loadImage('images/sadstep2.png');
    cry = loadImage('images/cry.png');
    cry1 = loadImage('images/cry1.png');
    hand = loadImage('images/hand.png');
    holdmask = loadImage('images/holdmask.png');
    mask = loadImage('images/maskshow.png');
    sadpage = loadImage('images/sadpage.png');

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
    homeIconHeight = 40;

    x1 = width/2 + 290;
    y1 = height/2 - 150;
    x2 = width/2 - 480;
    y2 = height/2 + 215;
    x11= width/2 + 290;
    y11= height/2 - 150;
    x22 = width/2 - 480;
    y22 = height/2 + 215;

    a = width / 2 - 140;
    b = height / 2 - 120;
    mina = width/2 - 150;
    maxa = width/2;
    minb = height/2 - 120;
    maxb = height/2 - 10;
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

    image(sadpage, width - 230, 20, 150, 41);

    push();
    textAlign(CENTER, CENTER);
    textSize(90);
    textFont(Anton);
    fill(211, 201, 201);
    text("SADNESS", width / 2 + 4, height / 7);
    fill(68, 164, 224);
    text("SADNESS", width / 2, height / 7);
    pop();

    if (step === 1) {
      image(emtl, width / 2 - 500, height / 2 - 200, 1000, 500);
      image(joyeb, x11, y11, 200, 22);
      image(sadnesseb, x1, y1 + 100, 200, 22);
      image(angereb, x11, y11 + 200, 200, 22);
      image(feareb, x11, y11 + 300, 200, 22);
      image(disgusteb, x11, y11 + 400, 200, 22);
      textAlign(CENTER, CENTER);
      rectMode(CENTER);
      textSize(20);
      textFont(Anton);
      fill(211, 201, 201);
      text("Sadness can manifest as a heavy, empty feeling, which is to me the opposite of joy. ", width / 2, height - 30 - padding, 1200, 100);
      textFont(NerkoOne);
      text("Click to choose the right eyebrown for sadness", width/2, height / 2 - 180);
    } else if (step === 2) {
      image(sadstep2, width / 2 - 500, height / 2 - 200, 1000, 500);
      image(joym, x22, y22, 150, 70);
      image(sadnessm, x2, y2 - 100, 150, 70);
      image(angerm, x22, y22 - 200, 150, 70);
      image(fearm, x22, y22 - 300, 150, 70);
      image(disgustm, x22, y22 - 400, 150, 70);
      textAlign(CENTER, CENTER);
      rectMode(CENTER);
      textSize(20);
      textFont(Anton);
      fill(211, 201, 201);
      text("It often emerges in different situations, like when feeling overwhelmed, \n facing disappointments or dealing with loss. ", width / 2, height - 30 - padding, 1200, 100);
      textFont(NerkoOne);
      text("Click to choose the right mouth for sadness", width/2, height / 2 - 180);
    } else if (step === 3) {
      if (maskshow) {
        image(mask, width / 2 - 500, height / 2 - 200, 1000, 500); 
      } else {
        image(holdmask, width / 2 - 500, height / 2 - 200, 1000, 500);
      }     
      image(hand, a, b, 229, 311);
      if (b >= height / 2 - 10) {
        maskshow = true;
      }
      textAlign(CENTER, CENTER);
      rectMode(CENTER);
      textSize(20);
      textFont(Anton);
      fill(211, 201, 201);
      text("I used to hide my sadness, but then I realise, I feel better to express it.", width / 2, height - 30 - padding, 1200, 100);
      textFont(NerkoOne);
      text("Click W, A, S D to remove the mask", width/2, height / 2 - 180);
    } else if (step === 4) {
      image(cry, width / 2 - 500, height / 2 - 200, 1000, 500);
      if (cry1show) {
        image(cry1, width / 2 - 500, height / 2 - 200, 1000, 500);
      }
      textAlign(CENTER, CENTER);
      rectMode(CENTER);
      textSize(20);
      textFont(Anton);
      fill(211, 201, 201);
      text("When I feel sad, crying brings me a sense of relief and heals me emotionally. \n Thus, embracing sadness as a part of life can me help restore balance.", width / 2, height - 30 - padding, 1200, 100);
      textFont(NerkoOne);
      text("Hold C to cry", width/2, height / 2 - 180);
      for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update();
        particles[i].show();
        if (particles[i].isDead()) {
          particles.splice(i, 1);
        }
      }
      if (fireEffect) {
        let p = new Particle(width/2 - 40, height/2- 20);
        let p1 = new Particle(width/2 + 40, height/2 - 20);
        particles.push(p);
        particles.push(p1);
      }
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
  if (keyCode === 52) { 
    window.location.href = "fear.html"; 
  }
  if (keyCode === 53) { 
    window.location.href = "disgust.html"; 
  }
}

function keyReleased() {
  if (step === 4 && keyCode === 67) {
    fireEffect = false;
    cry1show = false;
  }
}

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vx = random(-1, 1);
    this.vy = random(0.1, 2);
    this.alpha = 255;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= 5;
  }

  show() {
    noStroke();
    fill(186, 206, 204, this.alpha);
    ellipse(this.x, this.y, 16);
  }

  isDead() {
    return this.alpha <= 0;
  }
}

function mouseClicked() {
  if (step === 1 && mouseX >= x1 && mouseX <= x1 + 200 && mouseY >= y1 + 100 && mouseY <= y1 + 100+ 22) {
    x1 = width / 2 - 100;
    y1 = height / 2 - 50 - 100;
  }
  if (step === 2 && mouseX >= x2 && mouseX <= x2 + 150 && mouseY >= y2 - 100 && mouseY <= y2 - 100 + 70) {
    x2 = width / 2 - 80;
    y2 = height / 2 + 115 + 100;
  }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    buttonX = width - buttonSize - 20;
    buttonY = 20;
  }
  
  