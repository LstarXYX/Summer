function getNewContent(){
    var request = getHTTPObjcet();
    if(request)
    {
        request.open("GET","example.txt",true);
        request.onreadystatechange = function () {
            if(request.readyState == 4)
            {//处理响应
                var para = document.createElement("p");
                var txt = document.createTextNode(request.responseText);
                para.appendChild(txt);
                document.getElementById("new").appendChild(para);
            }
          };
          request.send(null);
    }else{
        alert("sorry,your browser doesn\'t support XMLHttpRequest");
    }
}
addLoadEvent(getNewContent);