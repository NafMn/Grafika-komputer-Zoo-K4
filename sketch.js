let img;
let cloud1;
let gunung;

function preload() { 
  img1 = loadImage('mth.png')
  img2 = loadImage('pnd.png')
  img3 = loadImage('jrp.png')
  img4 = loadImage('beru.png')
  img5 = loadImage('monk.png')
  img6 = loadImage('sing.png')
  img7 = loadImage('gjh.png')
  img8 = loadImage('gnug.png')
}

function setup() {
  createCanvas(1050, 650);
  cloud1 = {
    x: width / 2,
    y: height / 8,
    speed: 1.4
  };
  
  cloud2 = {
    x: width / 99,
    y: height / 9 + 100,
    speed: 0.9
  };
  
  cloud3 = {
    x: width / 10,
    y: height / 7 + 11,
    speed: 0.8
  };
  
  cloud4 = {
    x: width / 10,
    y: height / 17 + 1,
    speed: 1.6
  };
  
  cloud5 = {
    x: width / 4,
    y: height / 17 + 1,
    speed: 0.6
  };
  
  cloud6 = {
    x: width / 4,
    y: height / 17 + 1,
    speed: 0.8
  };
  
  cloud7 = {
    x: width / 4,
    y: height / 17 + 1,
    speed: 0.7
  };

  cloud8 = {
    x: width / 4,
    y: height / 17 + 100,
    speed: 0.7
  };
}

function draw() {
  background(0, 255, 254);
  
  fill(127, 255, 1);
  rect(0, height / 1.5, width, height / 3);
  
  cloud1.x += cloud1.speed;
  if (cloud1.x > width + 50) {
    cloud1.x = -50;
  }
  
  // Menggerakkan awan kedua
  cloud2.x += cloud2.speed;
  if (cloud2.x > width + 100) {
    cloud2.x = -100;
  }
  
   // Menggerakkan awan ketiga
  cloud3.x += cloud3.speed;
  if (cloud3.x > width + 150) {
    cloud3.x = -150;
  }
  
   // Menggerakkan awan kempat
  cloud4.x += cloud4.speed;
  if (cloud4.x > width + 150) {
    cloud4.x = -150;
  }
  
   // Menggerakkan awan kelima
  cloud5.x += cloud5.speed;
  if (cloud5.x > width + 250) {
    cloud5.x = -150;
  }
  
   // Menggerakkan awan keenam
  cloud6.x += cloud6.speed;
  if (cloud6.x > width + 150) {
    cloud6.x = -250;
  }
  
   // Menggerakkan awan ketuju
  cloud7.x += cloud7.speed;
  if (cloud7.x > width / 150) {
    cloud7.x = -150;
  }
       // Menggerakkan awan kedelapan
  cloud8.x += cloud8.speed;
  if (cloud8.x > width / 150) {
    cloud8.x = -150;
    
  // Menambahkan text
    textSize(14);
  fill(255);
  text("UAS GRAFKOM Kelompok 4", 20,620);
    textSize(14);
  fill(255);
  text("Ucup,Nafis,Muss", 20,635);
  
  //  textSize(44);
 // fill(0);
  //textStyle(BOLDITALIC);
  //text('Kebun Binatang',340, 200);
  }
  
  // Menggambar awan pertama
  drawCloud(cloud1.x, cloud1.y);
  
  // Menggambar awan kedua
  drawCloud(cloud2.x, cloud2.y);
  
    // Menggambar awan ketiga
  drawCloud(cloud3.x, cloud3.y);
  
     // Menggambar awan keempat
  drawCloud(cloud4.x, cloud4.y);
  
     // Menggambar awan diam 1
  drawCloud(cloud5.x=11, cloud5.y=11);
  
       // Menggambar awan diam2
  drawCloud(cloud6.x=1001, cloud6.y=111);
  
       // Menggambar awan diam3
  drawCloud(cloud7.x=581, cloud7.y=61);
  
      // Menggambar awan kedelapan
  drawCloud(cloud8.x, cloud8.y);
  
  
  // Matahari
  let x = width / 7 - img1.width / 2 + sin(frameCount * 0.05) * 10; // Perubahan posisi x dengan menggunakan fungsi sin()
  let y = height / 7 - img1.height / 2 + cos(frameCount * 0.05) * 10; // Perubahan posisi y dengan menggunakan fungsi cos()
  image(img1, x, y)
  
       //gunung
  let xcv = width / 28 - img8.width / 9; // Perubahan posisi x dengan menggunakan fungsi sin()
  let ycv = height / 10 - img8.height / 22; // Perubahan posisi y dengan menggunakan fungsi cos()
  image(img8, xcv, ycv)
  
  //Panda
  let xpd = width / 1.9 - img2.width / 2 + sin(frameCount * 0.11) * 11; // Perubahan posisi x dengan menggunakan fungsi sin()
  let ypd = height / 1.36 - img2.height / 2; // Perubahan posisi y dengan menggunakan fungsi cos()
  image(img2, xpd, ypd)
  
  //jerapah
  let xjr = width / 4.3 - img3.width / 2; // Perubahan posisi x dengan menggunakan fungsi sin()
  let yjr = height / 1.57 - img3.height / 2; // Perubahan posisi y dengan menggunakan fungsi cos()
  image(img3, xjr, yjr)
  
  //beruang
  let xbr = width / 13 - img4.width / 2; // Perubahan posisi x dengan menggunakan fungsi sin()
  let ybr = height / 1.4 - img4.height / 2; // Perubahan posisi y dengan menggunakan fungsi cos()
  image(img4, xbr, ybr)
  
  //monyet
  let xmn = width / 2.6 - img5.width / 2; // Perubahan posisi x dengan menggunakan fungsi sin()
  let ymn = height / 1.37 - img5.height / 2 + sin(frameCount *0.31) * 12; // Perubahan posisi y dengan menggunakan fungsi cos()
  image(img5, xmn, ymn)
  
    //singa
  let xlk = width / 1.2 - img6.width / 2; // Perubahan posisi x dengan menggunakan fungsi sin()
  let ylk = height / 1.39 - img6.height / 2; // Perubahan posisi y dengan menggunakan fungsi cos()
  image(img6, xlk, ylk)
  
     //gajah
  let xnm = width / 1.36 - img7.width / 2; // Perubahan posisi x dengan menggunakan fungsi sin()
  let ynm = height / 1.36 - img7.height / 2; // Perubahan posisi y dengan menggunakan fungsi cos()
  image(img7, xnm, ynm)
  
  img2.resize(320, 200)
  img3.resize(450, 330)
  img4.resize(320, 200)
  img5.resize(320, 200)
  img6.resize(300, 200)
  img7.resize(380, 400)
  img8.resize(1250, 500)
  
  function drawCloud(x, y) {
  noStroke();
  fill(255);
  ellipse(x, y, 70, 50);
  ellipse(x + 15, y - 10, 70, 50);
  ellipse(x + 50, y, 80, 30);
  ellipse(x + 30, y + 10, 50, 40);
    
   //membuat sungai
  //triangle(30, 705, 58, 20, 60, 410);
  // describe('A blue triangle with a rgb(0,0,0) outline on a rgb(128,128,128) canvas.');
}
}