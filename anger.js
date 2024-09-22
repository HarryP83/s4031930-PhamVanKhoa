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
let angerstep2, angerstep4;
let a, b;
let mina, maxa, minb, maxb;
let speed = 10;
let x1;
let y1;
let x2;
let y2;
let angershow;
let angershow1 = false;
let particles = [];
let fireEffect = false;
let maskmoving = true; 
let m = 25;
let emtlmask;
let angerpage;

function preload() {

    bgImage = loadImage('images/angernew.png'); 
    volumeOnImg = loadImage('images/speaker-on.png');
    volumeOffImg = loadImage('images/speaker-off.png');
    song = loadSound('sound/anger.mp3');
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
    angerstep2 = loadImage('images/angerstep2.png');
    angerstep4 = loadImage('images/angerstep4.png');
    angershow = loadImage('images/angershow.png');
    emtlmask = loadImage('images/emtlmask.png');
    angerpage = loadImage('images/angerpage.png');
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

    image(angerpage, width - 230, 20, 150, 41);

    push();
    textAlign(CENTER, CENTER);
    textSize(90);
    textFont(Anton);
    fill(211, 201, 201);
    text("ANGER", width / 2 + 4, height / 7);
    fill(239, 56, 50);
    text("ANGER", width / 2, height / 7);
    pop();

    if (step === 1) {
      image(emtl, width / 2 - 500, height / 2 - 200, 1000, 500);
      image(joyeb, x11, y11, 200, 22);
      image(sadnesseb, x11, y11 + 100, 200, 22);
      image(angereb, x1, y1 + 200, 200, 22);
      image(feareb, x11, y11 + 300, 200, 22);
      image(disgusteb, x11, y11 + 400, 200, 22);
      textAlign(CENTER, CENTER);
      rectMode(CENTER);
      textSize(20);
      textFont(Anton);
      fill(211, 201, 201);
      text("To me, anger is a complex emotion that can range from mild irritation to intense rage.", width / 2, height - 30 - padding, 1200, 100);
      textFont(NerkoOne);
      text("Click to choose the right eyebrown for anger", width/2, height / 2 - 180);
    } else if (step === 2) {
      image(angerstep2, width / 2 - 500, height / 2 - 200, 1000, 500);
      image(joym, x22, y22, 150, 70);
      image(sadnessm, x22, y22 - 100, 150, 70);
      image(angerm, x2, y2 - 200, 150, 70);
      image(fearm, x22, y22 - 300, 150, 70);
      image(disgustm, x22, y22 - 400, 150, 70);
      textAlign(CENTER, CENTER);
      rectMode(CENTER);
      textSize(20);
      textFont(Anton);
      fill(211, 201, 201);
      text("It can be caused by various factors such as perceived threats, frustrations, or injustices", width / 2, height - 30 - padding, 1200, 100);
      textFont(NerkoOne);
      text("Click to choose the right mouth for anger", width/2, height / 2 - 180);
    } else if (step === 3) {
      image(angerstep4, width / 2 - 500, height / 2 - 200, 1000, 500);
      if (angershow1) {
        image(angershow, width / 2 - 500, height / 2 - 200, 1000, 500);
      }
      textAlign(CENTER, CENTER);
      rectMode(CENTER);
      textSize(20);
      textFont(Anton);
      fill(211, 201, 201);
      text("I often feel angry when I get bad marks, when I see someone unfairly treated or when expectations are unmet.", width / 2, height - 30 - padding, 1200, 100);
      textFont(NerkoOne);
      text("Hold C to charge my anger", width/2, height / 2 - 180);
      for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update();
        particles[i].show();
        if (particles[i].isDead()) {
          particles.splice(i, 1);
        }
      }
      if (fireEffect) {
        let p = new Particle(width/2 - 40, height/2- 100);
        let p1 = new Particle(width/2 - 20, height/2 - 100);
        let p2 = new Particle(width/2 + 20, height/2 - 100);
        let p3 = new Particle(width/2 + 40, height/2 - 100);
        let p4 = new Particle(width/2 + 60, height/2 - 100);
        let p5 = new Particle(width/2 -60, height/2 - 100);
        let p6 = new Particle(width/2, height/2 - 100);
        particles.push(p);
        particles.push(p1);
        particles.push(p2);
        particles.push(p3);
        particles.push(p4);
        particles.push(p5);
        particles.push(p6);
      }
    } else if (step === 4) {
      image(angershow, width / 2 - 500, height / 2 - 200, 1000, 500);
      textAlign(CENTER, CENTER);
      rectMode(CENTER);
      textSize(20);
      textFont(Anton);
      fill(211, 201, 201);
      text("But if I do not control my anger well, it can lead to a lot of problems related to my health or relationships. Thus, I always tell myself to take a deep breath to hide my anger when facing situations that make me angry. ", width / 2, height - 30 - padding, 1200, 100);
      textFont(NerkoOne);
      text("Click to hide my anger by a mask", width/2, height / 2 - 180);
      image(emtlmask, m, height / 2 - 130, 177, 239);
      if (maskmoving) {
        m += 5;
        if (m > width + 25) {
          m = -25;
        }
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

   maskmoving = !maskmoving;

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
  if (step === 3 && keyCode === 67) { 
    fireEffect = true;
    angershow1 = true;
  }
  if (keyCode === 49) { 
    window.location.href = "joy.html"; 
  }
  if (keyCode === 50) { 
    window.location.href = "sadness.html"; 
  }
  if (keyCode === 52) { 
    window.location.href = "fear.html"; 
  }
  if (keyCode === 53) { 
    window.location.href = "disgust.html"; 
  }
}

function keyReleased() {
  if (step === 3 && keyCode === 67) {
    fireEffect = false;
    angershow1 = false;
  }
}

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vx = random(-1, 1);
    this.vy = random(-2, -0.1);
    this.alpha = 255;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= 5;
  }

  show() {
    noStroke();
    fill(239, 56, 50, this.alpha);
    ellipse(this.x, this.y, 16);
  }

  isDead() {
    return this.alpha <= 0;
  }
}

function mouseClicked() {
  if (step === 1 && mouseX >= x1 && mouseX <= x1 + 200 && mouseY >= y1 + 200 && mouseY <= y1 + 200+ 22) {
    x1 = width / 2 - 100;
    y1 = height / 2 - 50 - 200;
  }
  if (step === 2 && mouseX >= x2 && mouseX <= x2 + 150 && mouseY >= y2 - 200 && mouseY <= y2 - 200 + 70) {
    x2 = width / 2 - 80;
    y2 = height / 2 + 115 + 200;
  }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    buttonX = width - buttonSize - 20;
    buttonY = 20;
  }
  
  