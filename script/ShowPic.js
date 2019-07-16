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
function insertafter(newElement,targetElement){
    var parent = targetElement.parentNode;
    if(parent.lastChild == targetElement)parent.appendChild(newElement);
    else parent.insertBefore(newElement,targetElement.nextSibling);
}
function preparePlaceholder(){
    var placeholder = document.createElement("img");
    placeholder.setAttribute("id","placeholder");
    placeholder.setAttribute("src","");
    placeholder.setAttribute("alt","myImage");
    var description = document.createElement("p")
    description.setAttribute("id","description");
    var desctext = document.createTextNode("Choose a Image");
    description.appendChild(desctext);
    var gallery = document.getElementById("imagegallery");
    insertafter(placeholder,gallery);
    insertafter(description,placeholder);

}
addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGally);