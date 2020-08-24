var currentPath = [];
var drawing = [];

function setup(){
    canvas = createCanvas(1345,637);
    canvas.mousePressed(start);
    button = createButton('CLEAR');
    button.position(70,50);


}

function draw(){
   background(51);
   button.mousePressed(()=>{
      clearDrawing();
   });
    if(mouseIsPressed){
       var point = {
          x:mouseX,
          y:mouseY
       }
      currentPath.push(point);
    }

    stroke(255);
    strokeWeight(5);
    noFill();
    for(var i=0; i<drawing.length; i++){
      var path = drawing[i];
      beginShape();
      for(var j =0; j<path.length; j++){
         vertex(path[j].x,path[j].y);
      }
      endShape();
    }
}
function start(){
   currentPath = [];
   drawing.push(currentPath);
}
function clearDrawing(){
   drawing = [];
}