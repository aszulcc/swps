let platki = [];
let pngs = [];
let lodyga;
let bg = 1;
let font;
let count = 0;
let strzalka;
let chapter = 0;
let trx = 1920 / 2 - 300;
let tray = 1080 / 2 - 300; 

function preload(){
  
   font = loadFont('PixelifySans-Regular.ttf');
   lodyga = loadImage('lodyga.png');
   strzalka = loadImage('strzalka.png');
  
  // ładowanie płatków
   for(let i = 0; i<6; i++){
      let path = 'p' + str(i + 1) + '.png'; //ścieżka od p1, p2 etc
      let img = loadImage(path); 
      pngs.push(img);
  }
}

  
function setup() {
    
  createCanvas(1920, 1080);

  textFont(font);
  textSize(40);
  textAlign(CENTER, CENTER);
    
    //dodanie płatków z klasy petal
    let platek = new Petal(300, 200, pngs[0]);
      platki.push(platek);
      platek = new Petal(305, 220, pngs[1]);
      platki.push(platek);
       platek = new Petal(198, 220, pngs[2]);
      platki.push(platek);
      platek = new Petal(155, 200, pngs[3]);
      platki.push(platek);
      platek = new Petal(190, 105, pngs[4]);
      platki.push(platek);
      platek = new Petal(295, 105, pngs[5]);
      platki.push(platek);
 
  }
  
function mouseReleased(){
      chapter++; //zmienna doo czarnego ekranu na początku
   for(let i = 0; i < 6; i++){ //animacja dla każdego płatka
     if(platki[i].checkMouseOver()){
       platki[i].animacja = true;
       bg*= -1;
       count++;
     }
   if(mouseX > 1500 && mouseX < 1500 + strzalka.width && mouseY > 800 && mouseY < 800 + strzalka.height){ //kliknięcie strzałki dalej
     window.open('https://olagac.github.io/5etapowzalobysmutek/', '_self');
   }
       
   }
}

function draw() {
  
  if(bg < 0){ //zmieniające się tło
    background(249, 220, 92);
  }else{
    background(108, 117, 125);
  }
  fill(0);
 text('Pluck the petals', 1920/2, 200)
  
 

  
  if(count>=6){ //pojawienie się strzałki po wyrwaniu płatków
  image(strzalka, 1500, 800);
  }
    
 translate(1920 / 2 - 300, 1080 / 2 - 300);
    
    
  for(let i = 0;i < platki.length; i++){
   platki[i].display();   
 }
  image(lodyga, 60, 60);
  
  translate(-1920 / 2 + 300, -1080 / 2 + 300);
  
   if (chapter == 0) { //ekran przed kwiatkiem
    background(0);
    fill(255);
    textAlign(CENTER);
    text('level 3 Bargaining',1920/2,1080/2, 300);
    
  }
  
}


  
  
  
