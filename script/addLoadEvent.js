function addLoadEvent(func)
{
    var oldonload = window.onload;
    if(typeof window.onload!="function")
    {
        window.onload = func;
    }
    else
    {
        window.onload = function(){
            oldonload();
            func();
        }
    }
}
function addClass(element,value)
{
    if(!element.className)
    {
        element.className = value;
    }
    else
    {
        element.className+=" "+value;
    }
}
function moveElement(elementID,final_x,final_y,interval){
    if(!document.getElementById)return false;
    if(!document.getElementById(elementID))return false;
    var elem = document.getElementById(elementID);
    if(elem.movement)
    {
        clearTimeout(elem.movement);
    }
    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);
    if(xpos==final_x&&ypos==final_y)return false;
    if(xpos<final_x)xpos++;
    if(xpos>final_x)xpos--;
    if(ypos<final_y)ypos++;
    if(ypos>final_y)ypos--;
    elem.style.left = xpos+"px";
    elem.style.top  = ypos+"px";
    repeat = "moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")";
    elem.movement = setTimeout(repeat,interval);
}