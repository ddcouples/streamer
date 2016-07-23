
var imgMouseoverEfficiency={

    /*设定element为relative定位的div元素，其下面的结构为
    <div>
        <a><img /></a>
    </div>
    使用方法调用函数 imgMouseoverEfficiency.lightStreamer(document.getElementById("imageDiv3"));
    */
    lightStreamer: function (element) {
        element.style.position = "relative";
        element.style.display = "inline-block";
        element.style.overflow = "hidden";
        var span = document.createElement("span"),
             img = element.getElementsByTagName("img")[0],
             width = img.offsetWidth,
             height = img.offsetHeight;
        span.style.height = height + "px";
        span.style.width = "80px";
        //span.style.border = "1px solid black";//方便测试
        span.style.background = "-o-linear-gradient(left, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0) 100%)";
       span.style.background = "-moz-linear-gradient(left, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0) 100%)";
       span.style.background = " -webkit-gradient(linear, left top, right top, color-stop(0%, rgba(255, 255, 255, 0)), color-stop(50%, rgba(255, 255, 255, 0.2)), color-stop(100%, rgba(255, 255, 255, 0)))";
        span.style.transform = "skewX(-25deg)";
        span.style.position = "absolute";
        span.style.top = "0";
        span.style.left = -Math.ceil(width * 0.7)+"px";
        //span.style.left = Math.ceil(width * 1.4) + "px";
        element.appendChild(span);
        var timer = null;
        element.onmouseover = function () {
            clearInterval(timer);
            var curLeft = span.offsetLeft, targetLeft = Math.ceil(width * 1.4);
                timer = setInterval(function () {
                    curLeft = curLeft + 20*(targetLeft-curLeft)/targetLeft+1;//缓动 先快后慢
                    span.style.left = curLeft + "px";
                    if (curLeft > targetLeft) {
                        clearInterval(timer);
                        span.style.left = -Math.ceil(width * 0.7) + "px";
                    }
                }, 10)
        }
    }
}

function addSelf(x,y){
    x=x+10;
    if (x < y) {
       return x;
        setTimeout(addSelf, 50);
    }
}

function getHypotenuse(x, y) {
    return Math.floor(Math.sqrt(x * x + y * y));
}