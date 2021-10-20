noseX = 0;
noseY = 0;
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
difference = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550, 400);
    canvas.position(600, 300);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("PoseNet is loaded....");
}

function gotPoses(results){
    if (results.length > 0){
        console.log(results);
        noseX = (results[0].pose.nose.x)-150;
        noseY = (results[0].pose.nose.y)-100;
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        difference = floor(leftWristX - rightWristX);
    }
}

function draw(){
    background("e62595");
    fill("#03fca5");
    stroke("#09ab72");
    square(noseX, noseY, difference);
}