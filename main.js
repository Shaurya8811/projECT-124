function setup() {

    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,550);
    canvas.position(560,150);
    poseNet=ml5.poseNet(video,modelloaded);
    poseNet.on('pose' , gotPoses);
}

function modelloaded() {

    console.log('it works!');
}

function gotPoses(results) {

  if(results.length > 0){
      console.log(results);
  }

}

function draw() {

    background("grey");
}

function urname() {

    var name= document.getElementById("urname").value;
}