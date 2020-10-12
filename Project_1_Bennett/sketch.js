// then make an array
// limit array size
// limit speed

var clust1;
var clust2;
let xLoc;
var c1, c2 c3;
var collection = []; // making an array

function setup() {
  locX = 10;
  createCanvas(windowWidth, windowHeight);
  background(255);
  c1 = color(87, 199, 232);
  c2 = color(168, 116, 229);
  clust1 = new Cluster(3, c1, 100, 200);
  clust2 = new Cluster(1, c2, 60, 80);
  
  clust1.display();
  clust2.display();
}

function draw() {
  background(255);
  //clust1.update();
  clust1.wobble();
  //clust1.checker();
  clust1.display();
  
  clust2.wobble();
 //clust2.update();
  //clust2.checker();
  clust2.display();
  
  for(var i = 0; i < collection.length; i++){
    collection[i].update();
    collection[i].display();
  }
  
}

function mousePressed(){
  var newbie = new Cluster(random(1, 4), c2, mouseX, mouseY);
  collection.push(newbie);
}