function getNextElement(node){
    if(node.nodeType == 1)
    {
        return node;
    }
    if(node.nextSibling)
    {
        return getNextElement(node.nextSibling);
    }
    return null;
}
function styleElementSiblings(tag,theclass) {
    if (!document.getElementsByTagName)return false;
    var elems = document.getElementsByTagName(tag);
    var elem;
    for(var i = 0;i<elems.length;i++){
        elem = getNextElement(elems[i].nextSibling);
        addClass(elem,theclass);
    }
}
function stripeTables(){
    if(!document.getElementsByTagName)return false;
    var tables = document.getElementsByTagName("table");
    var odd,rows;
    for(var i = 0;i<tables.length;i++)
    {
        odd = false;
        rows = tables[i].getElementsByTagName("tr");
        for(var j = 0;j<rows.length;j++)
        {
            if(odd == true)
            {
                addClass(rows[j],"odd");
                odd = false;
            }
            else{
                odd = true;
            }
        }
    }
}
function highlightRows(){
    if(!document.getElementsByTagName)return false;
    var rows = document.getElementsByTagName("tr");
    for(var i = 0;i<rows.length;i++)
    {
        rows[i].onmouseover = function(){
            this.style.fontWeight = "bold";
        }
        rows[i].onmouseout = function () {
            this.style.fontWeight = "normal";
        }
        
    }

}

addLoadEvent(highlightRows);
addLoadEvent(function(){
    styleElementSiblings("h1","intro");
} );
addLoadEvent(stripeTables);