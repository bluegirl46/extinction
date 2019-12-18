function setup() {
 size(858, 536)
 scarlet=loadImage("images/scarlet.jpg");

  
}
//The draw function happens over and over again
function draw() {
  //image(Amphibians,0,0); 
  loadPixels();
 scarlet.loadPixels();
  for (intx = 0; x < width; x++) {
   for (inty = 0; y < height; y++) {
    intloc = x+y*width;
    floatb = brightness (scarlet.pixels[loc]);
    if (b > mouseX, mouseY) {
      pixels[loc] = color(lightgrey); 
    } else {
      pixels[loc] = color(black);
    }

             

  }
 }    



