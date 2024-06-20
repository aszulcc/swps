class Petal{
  
  constructor(x, y,img){
    this.x = x;
    this.y = y;
    this.img = img;
    this.w = img.width;
    this.h = img.height;
    this.animacja = false;
    this.base = this.x;
    this.randomAngle = random(TWO_PI);
  }
  
  display(){
    if(this.checkMouseOver()){
      
    image(this.img, this.x, this.y - 3)
      
    }else{
      
   
    image(this.img, this.x, this.y)
     }
    
    if(this.animacja){
      
      this.x = 20 * sin(this.randomAngle + frameCount * 0.05) + this.base;
      this.y = this.y + 2;
    }
  }
  
  checkMouseOver(){
    let  mouseOver;
    let tx = 1920 / 2 - 300;
    let ty = 1080/2 - 300;
    if(mouseX - tx > this.x && mouseX - tx < this.x + this.w && mouseY - ty > this.y && mouseY - ty < this.y + this.h){
      mouseOver = true;
    }else{
      mouseOver = false;
    }
    return mouseOver;
  }
  
  
  
}
