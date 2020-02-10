function add(){
    var x = document.getElementById("num1").value;
    var y = document.getElementById("num2").value;
    var total = Number(x) + Number(y);
    document.getElementById("output").innerHTML = total;
}
function sub(){
    var x = document.getElementById("num1").value;
    var y = document.getElementById("num2").value;
    var total = Number(x) - Number(y);
    document.getElementById("output").innerHTML = total;
}
function mul(){
    var x = document.getElementById("num1").value;
    var y = document.getElementById("num2").value;
    var total = Number(x) * Number(y);
    document.getElementById("output").innerHTML = total;
}
function div(){
    var x = document.getElementById("num1").value;
    var y = document.getElementById("num2").value;
    var total = Number(x) / Number(y);
    document.getElementById("output").innerHTML = total;
}
function mod(){
    var x = document.getElementById("num1").value;
    var y = document.getElementById("num2").value;
    var total = Number(x) % Number(y);
    document.getElementById("output").innerHTML = total;
}
function inc(){
    var x = document.getElementById("num1").value;
    var y = document.getElementById("num2").value;
    var total = Number(++x) + Number(++y);
    document.getElementById("output").innerHTML = total;
}
function dec(){
    var x = document.getElementById("num1").value;
    var y = document.getElementById("num2").value;
    var total = Number(--x) + Number(--y);
    document.getElementById("output").innerHTML = total;
}