var status = "";
var objName = "";
function setup() {
    canvas = createCanvas(480, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(480, 380);
    video.hide();
}

function start() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
    objName = document.getElementById("objName").value;
}

function modelLoaded() {
    status = true;
    console.log("Model Loaded!");
}

function draw() {
    image(video, 0, 0, 480, 380);
}
