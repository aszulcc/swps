class Petal{
  
  constructor(x, y,img){
    this.x = x;
    this.y = y;
    this.img = img;
    this.w = img.width;
    this.h = img.height;
    this.animacja = false;
    this.base = this.x;
    
  }
  
  display(){
    if(this.checkMouseOver()){
      
    image(this.img, this.x, this.y - 3)
      
    }else{
      
   
    image(this.img, this.x, this.y)
     }
    
    if(this.animacja){
      
      this.x = 20 * sin(frameCount * 0.05) + this.base;
      this.y = this.y + 2;
    }
  }
  
  checkMouseOver(){
    let  mouseOver;
    if(mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h){
      mouseOver = true;
    }else{
      mouseOver = false;
    }
    return mouseOver;
  }
  
  
  
}
