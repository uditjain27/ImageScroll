//document.getElementById("imga").style.top="300px";
/* var del= setInterval(function(){
    i+=10;
    if(j>=0.1){
        j-=0.02;
    };
    document.getElementById("imga").style.left= `${i}px`;
    document.getElementById("imgb").style.right= `${i}px`;
    document.getElementById("fade-out").style.opacity= `${j}`;
    if(i>20){
        clearInterval(del);
    };
},150); */
var control=1;
var i=-200;
var j=1;
document.getElementById("fade-out").onwheel= function(event){
    if(control==1){
        var del= setInterval(function(){
            if(i>350){
                clearInterval(del);
                control=0;
            }else{
                document.getElementById("imga").style.left= `${i}px`;
                document.getElementById("imgb").style.right= `${i}px`;
                document.getElementById("imga").style.visibility= "visible";
                document.getElementById("imgb").style.visibility= "visible";
                i+=10;
            }
            if(j>=0.05){
                document.getElementById("fade-out").style.opacity= `${j}`;
                j-=0.02;
            };       
        },100);
    }
    if(control==0){
        var y=event.deltaY;
        //document.getElementById("imgb").style.top= `${y}px`;
        var currentSize = document.getElementById("imga").offsetLeft;
        var currentSize1 = document.getElementById("imgb").offsetLeft;
        if(currentSize>10 && currentSize1>=10){
            if (y > 0) {
                newSize = parseInt(currentSize) + 15; //down
            } else if(y < 0) {
                newSize = parseInt(currentSize) - 15; //up
            }
            document.getElementById("imga").style.left = newSize + "px";
            document.getElementById("imgb").style.right = newSize + "px";
        }else if(currentSize<=10){
            newSize = parseInt(currentSize) + 15;
            document.getElementById("imga").style.left = newSize + "px";
            document.getElementById("imgb").style.right = newSize + "px";
        }else if(currentSize1<=10){
            newSize = parseInt(currentSize1) + 15;
            document.getElementById("imga").style.left = newSize + "px";
            document.getElementById("imgb").style.right = newSize + "px";
        }
    };
};