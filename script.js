status="";
reswq = "";
objects = [];
function preload(){

}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function start(){
    dectector = ml5.objectDetector("cococssd",modelloaded);
    document.getElementById("status").innerHTML = "Status is detecting objects";
    reswq = document.getElementById("reswq").status;
    detector.detect(video,gotresults);
}

function modelloaded(){
    console.log("model is loaded");
    status = true;
}

function draw(){
    image(video,0,0,300,300);

    if(status != ""){
        for(i = 0; i < objects.length; i++){
            percentage = floor(objects[i].confidence*100);
            noFill();
            stroke("red");
            rect(object[i].x,object[i].y,object[i].width,object[i].height);
            fill("red");
            text(object[i].label+" "+percentage+"%");
        }
    }
}

function gotresults(results,error){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        objects = results;
    }
}