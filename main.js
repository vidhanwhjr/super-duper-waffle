img = "";

object = [];
status1 = "";
function preload(){
    img = loadImage("dog_cat.jpg");
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    object_dectector = ml5.objectDetector('cocossd', ModelLoded);
    document.getElementById('status').innerHTML = "Status- Detecting objects";
}

function ModelLoded(){
    console.log("Model Lo-dead");
    status1 = true;
    object_dectector.detect(img, gotResults);
}

function gotResults(error, results){
    if(error){
        console.error(error);

    }
    else{
        console.log(results);
        object = results;
    }
}


function draw(){
    image(img, 0, 0, 640, 420);

    if(status1 != ""){
        document.getElementById("status").innerHTML = "Status - Object detected";

        for(i = 0; i < object.length; i++){
            fill('#045ff22');
            accuracy = floor(object[i].confidence* 100);
            text(object[i].label + " " + accuracy + "%", object[i].x + 15, object[i].y + 15);
            noFill();
            stroke('#aa78ff');
            rect(object[i].x, object[i].y, object[i].width, object[i].height);
        }
    }

    /*fill("#FF0000");
    stroke("#ff0000");
    text("Dog", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(45, 50, 350, 300);

    fill("#0022ff");
    stroke("#0022ff");
    text("Cat", 240, 75);
    noFill();
    rect(240, 50,350, 300);*/


}

