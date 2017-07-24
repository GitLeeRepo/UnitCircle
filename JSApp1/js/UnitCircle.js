var rads = function (x) { return x * Math.PI / 180; };
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var angle = 0;
var canvasWidth = parseInt(c.getAttribute("Width"));
var canvasHeight = parseInt(c.getAttribute("Height"));


//events
document.getElementById("myCanvas").onclick = function (event) {
    var angle = parseInt(document.getElementsByName("angle")[0].value);
    var increment = parseInt(document.getElementsByName("increment")[0].value);
    document.getElementsByName("angle")[0].value = angle + increment;
    DisplayUnitCircle();
}

document.getElementById("angle").onchange = function (event) {
    DisplayUnitCircle();
}

document.getElementById("angle").onblur = function (event) {
    DisplayUnitCircle();
}


// functions (some stub) used in khan environment but not native to js
function stroke(x, y, z) { }

function fill(x, y, z) { }

function strokeWeight(x) { }

function ellipse(x, y, r, startAngle, endAngle)
{
    //var c = document.getElementById("myCanvas");
    //var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(x, y, r, startAngle, endAngle);
    ctx.stroke();
}

function line(x1, y1, x2, y2)
{
    //var c = document.getElementById("myCanvas");
    //var ctx = c.getContext("2d");
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

function point(x, y)
{

}

function sin(angle) { return Math.sin(rads(angle)).toFixed(8); } // using degrees rather than radians

function cos(angle) { return Math.cos(rads(angle)).toFixed(8); } // using degrees rather than radians

function text(str, x, y)
{
    //doc.write(str + "<br>");
}

function ctext(str, x, y)
{
    ctx.font = "15px Arial";
    ctx.strokeText(str, x, y);
}


function ClearCanvas() {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
}
function test() { text("test", 10, 10); }



function DisplayUnitCircle() {
    //soh cah toa
    var row = 10;
    var rowHeight = 20;

    ClearCanvas();

    stroke(255, 0, 0);
    fill(255, 0, 0);
    strokeWeight(2);


    var angle = document.getElementsByName("angle")[0].value; // in degrees
    var cX = canvasWidth/2;
    var cY = 300;
    var r = 100;

    //0 and 360 degrees label on unit circle
    var x = r * cos(0);
    var y = r * sin(0);
    ctext("0pi | 2pi", cX + x + 10, cY - y);

    //90 degree label on unit circle
    x = r * cos(90);
    y = r * sin(90);
    ctext("pi/2", cX + x - 10, cY - y - 10);

    //180 degree label on unit circle
    x = r * cos(180);
    y = r * sin(180);
    ctext("pi", cX + x - 20, cY - y);

    //270 degree label on unit circle
    x = r * cos(270);
    y = r * sin(270);
    ctext("3pi/2", cX + x - 10, cY - y + 20);

    x = r * cos(angle);
    y = r * sin(angle);
    ctext("angle=" + angle, 10, row += rowHeight);
    ctext("radius=" + r, 10, row += rowHeight);
    ctext("sin(angle)=" + sin(angle), 10, row += rowHeight);
    ctext("cos(angle)=" + cos(angle), 10, row += rowHeight);
    ctext("x=" + x + " (r*cos(" + angle + "): " +
        cos(angle) + ")", 10, row += rowHeight); // had to remove .toFixed(8) from cos(angle) - need inherit - works with Math.cos()
    ctext("y=" + y + " (r*sin(" + angle + "): " +
        sin(angle) + ")", 10, row += rowHeight); // had to remove .toFixed(8) from sin(angle) - need inherit - works with Math.sin()
    fill(255, 255, 255);
    ellipse(cX, cY, r, 0, r * 2, ctx);
    line(cX, cY, cX + x, cY - y, ctx);
    strokeWeight(5);
    point(cX, cY);
    point(cX + x, cY - y);
}

DisplayUnitCircle(); // initial display, further ones through events
