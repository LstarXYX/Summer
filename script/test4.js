function displayAbbreviations(){
    if(!document.getElementsByTagName||!document.createElement||!document.createTextNode)
    return false;
    //取得所有略缩词
    var abbreviations = document.getElementsByTagName("abbr");
    if(abbreviations<1)return false;
        var defs = new Array();
        //遍历所有略缩词
        for(var i = 0;i<abbreviations.length;i++)
        {
            var current_abbr = abbreviations[i];
            if(current_abbr.childNodes.length<1)continue;
            var definition =current_abbr.getAttribute("title");
            var key = abbreviations[i].lastChild.nodeValue;
            defs[key] = definition;
        }
        //创建定义列表
        var dlist = document.createElement("dl");
        //遍历定义
        for(key in defs){
            var definition = defs[key];
            //创建定义标题
            var dtitile = document.createElement("dt");
            var dtitile_text = document.createTextNode(key);
            dtitile.appendChild(dtitile_text);
            //创建定义描述
            var ddesc = document.createElement("dd");
            var ddesc_text = document.createTextNode(definition);
            ddesc.appendChild(ddesc_text);
            //把他们添加到定义列表
            dlist.appendChild(dtitile);
            dlist.appendChild(ddesc);
        }
        if(dlist.childNodes.length<1)return false;
        //创建标题
        var header = document.createElement("h2");
        var header_text = document.createTextNode("Abbreviations");
        header.appendChild(header_text);
        //把标题添加到页面主体
        document.body.appendChild(header);
        //把定义列表添加到页面主体
        document.body.appendChild(dlist);
}
function displayCitations() {
    //取得所有引用
    var quotes = document.getElementsByTagName("blockquote");
    //遍历引用
    for (let i = 0; i < quotes.length; i++) {
        //如果没有cite属性，继续循环
        if (!quotes[i].getAttribute("cite")) {
            continue;
        }
        //保存cite属性
        var url = quotes[i].getAttribute("cite");
        //取得引用中的所有元素节点
        var quoteChildren = quotes[i].getElementsByTagName('*');
        //如果没有元素节点，继续循环
        if(quoteChildren.length<1)continue;
        //取得引用中的最后一个元素节点
        var elem = quoteChildren[quoteChildren.length-1];
        //创建标记
        var link = document.createElement("a");
        var link_text = document.createTextNode("source");
        link.appendChild(link_text);
        link.setAttribute("href",url);
        var superscript = document.createElement("sup");
        superscript.appendChild(link);
        //把标记添加到引用中的最后一个元素节点
        elem.appendChild(superscript);
    }
}
addLoadEvent(displayAbbreviations);
addLoadEvent(displayCitations);