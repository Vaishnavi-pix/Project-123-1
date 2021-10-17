leftWristX=0;
rightWristX=0;
difference=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,500);
    canvas.position(560,150);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);
}
function gotPoses(result){
if(result.length>0){
    console.log(result);
    leftWristX=result[0].pose.leftWrist.x;
    rightWristX=result[0].pose.rightWrist.x;
    difference=floor(leftWristX-rightWristX);
}
}
function modelLoaded(){
    console.log("Model Loaded");
}
function draw(){
    background("#64d9b6");
    textSize(difference);
    fill("#f77676");
    text("Vaishnavi",50,400);
}