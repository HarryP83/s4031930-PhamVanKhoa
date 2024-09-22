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
let disguststep2;
let disguststep4, disgusthand, disguststep44;
let maskshow = false;
let a, b;
let mina, maxa, minb, maxb;
let speed = 10;
let x1, x11;
let y1, y11;
let x2, x22;
let y2, y22;
let messages = ["bad behaviour", "contaminated water", "foul smells", "cheat", "strong perfumes", "poor hygiene habits", "laziness", 
"mean people", "moral violation", "mold", "rotten food", "dirtiness", "chemical fumes", "rude behavior", "insects found in food", "vomiting", "dirty environments",
"public restrooms", "unwashed hands", "garbage dumps", "offensive behaviour", "phony person", "backbiting"];
let clickPositions = [];
let wordCounts = {};
let randomMessage;
let boundingBox;
var organics = [];
var change, colorsPalette;
let disgustpage;

function preload() {

    bgImage = loadImage('images/disgustnew.png'); 
    volumeOnImg = loadImage('images/speaker-on.png');
    volumeOffImg = loadImage('images/speaker-off.png');
    song = loadSound('sound/disgust.mp3');
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
    disguststep2 = loadImage('images/disguststep2.png');
    disguststep4 = loadImage('images/disguststep4.png');
    disgusthand = loadImage('images/disgusthand.png');
    disguststep44 = loadImage('images/disguststep44.png');
    disgustpage = loadImage('images/disgustpage.png');
  
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
    b = height / 2 - 10;
    mina = width/2 - 160;
    maxa = width/2 - 120;
    minb = height/2 - 130;
    maxb = height/2 - 10;
    
    messages.forEach(word => {
      wordCounts[word] = 0;
    });
    randomMessage = random(messages);

    change = 0;
    colorsPalette = [
    color(0, 204, 82, 30), 
    color(0, 178, 71, 30), 
    color(0, 153, 60, 30), 
  ];

    boundingBox = {
      x: width / 2 - 500,
      y: height / 2 - 250,
      width: 1000,
      height: 500,
    };

    for (var i = 0; i < 110; i++) {
      organics.push(
        new Organic(
          0.1 + 1 * i,
          random(boundingBox.x, boundingBox.x + boundingBox.width), 
          random(boundingBox.y, boundingBox.y + boundingBox.height), 
          i * 1,
          i * random(90),
          colorsPalette[floor(random(colorsPalette.length))]
        )
      );
    }
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

    image(disgustpage, width - 230, 20, 150, 41);

    push();
    textAlign(CENTER, CENTER);
    textSize(90);
    textFont(Anton);
    fill(211, 201, 201);
    text("DISGUST", width / 2 + 4, height / 7);
    fill(128, 188, 88);
    text("DISGUST", width / 2, height / 7);
    pop();

    if (step === 1) {
      image(emtl, width / 2 - 500, height / 2 - 200, 1000, 500);
      image(joyeb, x11, y11, 200, 22);
      image(sadnesseb, x11, y11 + 100, 200, 22);
      image(angereb, x11, y11 + 200, 200, 22);
      image(feareb, x11, y11 + 300, 200, 22);
      image(disgusteb, x1, y1 + 400, 200, 22);
      textAlign(CENTER, CENTER);
      rectMode(CENTER);
      textSize(20);
      textFont(Anton);
      fill(211, 201, 201);
      text("To me, disgust is an emotion in response to the filth and uncleanliness of both objects and people. ", width / 2, height - 30 - padding, 1200, 100);
      textFont(NerkoOne);
      text("Click to choose the right eyebrown for disgust", width/2, height / 2 - 180);
    } else if (step === 2) {
      image(disguststep2, width / 2 - 500, height / 2 - 200, 1000, 500);
      image(joym, x22, y22, 150, 70);
      image(sadnessm, x22, y22 - 100, 150, 70);
      image(angerm, x22, y22 - 200, 150, 70);
      image(fearm, x22, y22 - 300, 150, 70);
      image(disgustm, x2, y2 - 400, 150, 70);
      textAlign(CENTER, CENTER);
      rectMode(CENTER);
      textSize(20);
      textFont(Anton);
      fill(211, 201, 201);
      text("As a result, people have varying levels of disgust for different things based on their perceptions of the world.", width / 2, height - 30 - padding, 1200, 100);
      textFont(NerkoOne);
      text("Click to choose the right mouth for disgust ", width/2, height / 2 - 180);
    } else if (step === 3) {
      for (var i = 0; i < organics.length; i++) {
        organics[i].show(change);
      }
      change += 0.01;
      textAlign(CENTER, CENTER);
      rectMode(CENTER);
      textSize(20);
      textFont(Anton);
      fill(211, 201, 201);
      text("I often feel disgusted by quite a lot of things such as rotten food or unethical behavior. \n Thus, I believe disgust helps me avoid harmful substances and pathogens.  ", width / 2, height - 30 - padding, 1200, 100);
      textFont(NerkoOne);
      text("Click randomly within the smoke to see things I find disgusting", width/2, height / 2 - 180);
      for (let i = 0; i < clickPositions.length; i++) {
        if (isWithinBoundingBox(clickPositions[i].x, clickPositions[i].y, boundingBox)) {
          text(messages[i], clickPositions[i].x, clickPositions[i].y);
        }
      }
    } else if (step === 4) {
      if (maskshow) {
        image(disguststep44, width / 2 - 500, height / 2 - 200, 1000, 500); 
      } else {
        image(disguststep4, width / 2 - 500, height / 2 - 200, 1000, 500);
      }     
      image(disgusthand, a, b, 229, 311);
      if (b <= height / 2 - 120) {
        maskshow = true;
      }
      textAlign(CENTER, CENTER);
      rectMode(CENTER);
      textSize(20);
      textFont(Anton);
      fill(211, 201, 201);
      text("However, sometimes, I try to hide my disgust in front of people to protect myself from feeling mean \n and overwhelmed by negativity.", width / 2, height - 30 - padding, 1200, 100);
      textFont(NerkoOne);
      text("Click W, A, S D to cover disgust's face with a mask", width/2, height / 2 - 180);
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

class Organic {
  constructor(radius, xpos, ypos, roughness, angle, color) {
    this.radius = radius;
    this.xpos = xpos;
    this.ypos = ypos;
    this.roughness = roughness;
    this.angle = angle;
    this.color = color;

    this.show = function (change) {
      noStroke();
      fill(this.color);

      push();
      translate(xpos, ypos);
      rotate(this.angle + change);
      beginShape();

      var off = 0;
      for (var i = 0; i < TWO_PI; i += 0.1) {
        var offset = map(noise(off, change), 0, 1, -this.roughness, this.roughness);
        var r = this.radius + offset;
        var x = r * cos(i);
        var y = r * sin(i);
        vertex(x, y);
        off += 0.1;
      }
      endShape();
      pop();
    };
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
  if (step === 3) {
    if (isWithinBoundingBox(mouseX, mouseY, boundingBox)) {
        clickPositions.push({ x: mouseX, y: mouseY });
        wordCounts[randomMessage]++;
        randomMessage = random(messages);
    }
}
}

function isWithinBoundingBox(x, y, box) {
  return x >= box.x && x <= box.x + box.width && y >= box.y && y <= box.y + box.height;
}

function keyPressed() {
  if (keyCode === 32) {
    step++;
    if (step > 4) {
      step = 1;
    }
  }
  if (step === 4) {
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
  if (keyCode === 49) { 
    window.location.href = "joy.html"; 
  }
  if (keyCode === 51) { 
    window.location.href = "anger.html"; 
  }
  if (keyCode === 52) { 
    window.location.href = "fear.html"; 
  }
  if (keyCode === 50) { 
    window.location.href = "sadness.html"; 
  }
}


function mouseClicked() {
  if (step === 1 && mouseX >= x1 && mouseX <= x1 + 200 && mouseY >= y1 + 400 && mouseY <= y1 + 400+ 22) {
    x1 = width / 2 - 100;
    y1 = height / 2 - 50 - 400;
  }
  if (step === 2 && mouseX >= x2 && mouseX <= x2 + 150 && mouseY >= y2 - 400 && mouseY <= y2 - 400 + 70) {
    x2 = width / 2 - 80;
    y2 = height / 2 + 115 + 400;
  }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    buttonX = width - buttonSize - 20;
    buttonY = 20;
  }
  
  