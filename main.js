leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
song = "";
function play(){
song.play();
song.setVolume(1);
song.rate(1);
}

function preload(){
song = loadSound("mus_dogroom.ogg");
}

function setup(){
    canvas = createCanvas(600, 500);
    canvas.position(650, 250);
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);

    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video, 0, 0, 600, 500);
}

function modelLoaded(){
    console.log("PoseNet is ready to DJ!");
}

function gotPoses(results){
    if (results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("Left wrist posX = "+leftWristX);
        console.log("Left wrist posY = "+leftWristY);
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("Right wrist posX = "+rightWristX);
        console.log("Right wrist posY = "+rightWristY);
    }
}