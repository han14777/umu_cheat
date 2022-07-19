//like
var p=$$("#comment-list>div")
for(var i=0;i<p.length;i++){
var did=p[i].getAttribute("data-id")
console.log(did);
var httpRequest = new XMLHttpRequest();
httpRequest.open('POST', 'https://m.umu.cn/uapi/v1/like/save', true); 
httpRequest.setRequestHeader("Content-type","application/x-www-form-urlencoded");
httpRequest.send('obj_type=4&obj_id='+did+'&action=like');

httpRequest.onreadystatechange = function () {
    if (httpRequest.readyState == 4 && httpRequest.status == 200) {
        var json = httpRequest.responseText;
        console.log(json);
    }
};
}
/*
var tmplate=document.getElementById('__pageDataTemplate__').innerHTML;
var jsdata=JSON.parse(tmplate)
var eid=jsdata.data.element_info.element_id
*/
//comment
var tmplate=$$('#__pageDataTemplate__')[0].innerHTML
var jsdata=JSON.parse(tmplate)
var eid=jsdata.data.element_info.element_id

var p=$$("#comment-list>div")
for(var i=0;i<p.length;i++){
var did=p[i].getAttribute("data-id")

console.log(did);
var httpRequest = new XMLHttpRequest();
httpRequest.open('POST', 'https://m.umu.cn/uapi/v1/comment/save', true); 
httpRequest.setRequestHeader("Content-type","application/x-www-form-urlencoded");
httpRequest.send('show_parent_id='+did+'&comment_parent_id='+did+'&parent_type=4&parent_id='+eid+'&comment_type=1&comment=aaa');

httpRequest.onreadystatechange = function () {
    if (httpRequest.readyState == 4 && httpRequest.status == 200) {
        var json = httpRequest.responseText;
        console.log(json);
    }
};
}

//show_parent_id=22156246&comment_parent_id=29001448&parent_type=4&parent_id=34524870&comment_type=1&comment=nihao
//show_parent_id=22181991&comment_parent_id=33358819&parent_type=4&parent_id=34524870&comment_type=1&comment=yse


