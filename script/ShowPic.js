function ShowPic(whichpic){
    if(!document.getElementById("placeholder"))return false;
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src",source);
    if(document.getElementById("description")){
        var text = whichpic.getAttribute("title");
        var description = document.getElementById("description");
        description.firstChild.nodeValue = text;
    }
    return true;
    
}
function prepareGally(){
    if(!document.getElementById)return false;
    if(!document.getElementsByTagName)return false;
    if(!document.getElementById("imagegallery"))return false;
    var gally = document.getElementById("imagegallery");
    var links = gally.getElementsByTagName("a");
    for(var i = 0;i<links.length;i++)
    {
        links[i].onclick = function(){
            return !ShowPic(this);
        }
    }
}
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
function countBodyChildren(){
    var body_element = document.getElementsByTagName("body")[0];
    alert(body_element.childNodes.length);
}
