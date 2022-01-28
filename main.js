status = "";
value = "";

function setup() {
    canvas = createCanvas(450,450);
    canvas.center();
    canvas.position(550,180);
    video = createCapture(VIDEO);
    video.size(450,450);
    video.hide();
}

function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
    value = document.getElementById("object_name").Value;   
}

function modelLoaded() {
    console.log("Model Loaded!");
    status = "true";
}

function draw() {
    image(video, 0, 0, 450, 450);
}