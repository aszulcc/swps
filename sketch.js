let platki = [];
let pngs = [];
let lodyga;
let bg = 1;
//let bg1;
//let bg2;

function preload(){
  
   lodyga = loadImage('lodyga.png');
   // bg1 = loadImage('bg1.png');
   // bg2 = loadImage('bg2.png');
  
   for(let i = 0; i<6; i++){
     let path = 'p' + str(i + 1) + '.png'; //ścieżka od p1, p2, p3 etc
      let img = loadImage(path); 
      pngs.push(img);
  }
}

  
  function setup() {
    
  createCanvas(600, 600);
    
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
      
   for(let i = 0; i < 6; i++){
     if(platki[i].checkMouseOver()){
       platki[i].animacja = true;
       //bg*= -1;
     }
       
   }
}

function draw() {
  
  //if(bg > 0){
    // image(bg1, 0, 0);
 // }else{
  //   image(bg2, 0 , 0);
 // }
 background(220);
  
  
  for(let i = 0;i < platki.length; i++){
   platki[i].display();   
 }
  image(lodyga, 60, 60);
  
}


  
  
  
