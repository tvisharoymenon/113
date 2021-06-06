

function preload ()
 {
}
function setup() {
    canvas = createCanvas(640,480);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
image(video,0,0,640,480);
fill(255,0,0);
stroke(255,0,0);
circle(39,38,75)
circle (600,38,75)
circle(39,440,75)
circle (600,440,75)
fill(0,255,0);
stroke(0,255,0);
rect (585,73,30,331)
rect(76,425,489,30)
rect (24,73,30,331)
rect( 75,27,490,30)



}
function take_snapshot(){
    save('tvisha.png');
}
function filter_tint(){
    tint_color=document.getElementById("color_name").value;
}
