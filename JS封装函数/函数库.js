//文档完全加载后需要运行的函数
function addLoadEvent(func) {
	var oldload=window.onload;
	if (typeof window.onload!='function') {
		window.onload=func;
	}else{
		window.onload=function(){
			oldload();
			func();
		}
	}
}
//getElementsByClassName()函数
function getByClass(clsName, parent){
 //定义函数getByClass()实现获取document或指定父元素下所有class为on的元素  
	 var results=[];
	 var oParent=document.getElementById(parent)||document;
	 var eles=oParent.getElementsByTagName("*");
	 for(var i=0;i<eles.length;i++){
	     if(eles[i].className.indexOf(clsName)!=-1){
	         results.push(eles[i]);
	     }
	 }return results;
}
//insertAfter函数
function insertAfter(newElement,targetElement){
	var parent=targetElement.parentNode;
	if (parent.lastChild==targetElement) {
		parent.appendChild(newElement);
	}else{
		parent.insertBefore(newElement,targetElement.nextSibling);
	}
}
//addClass函数
function addClass(element,value){
	if (!element.className) {
		element.className=value;
	}else{
		newClassName=element.className;
		newClassName+=" ";
		newClassName+=value;
		element.className=newClassName;
	}
}
//导航栏高亮显示当前页面，适用于有好几个不同的页面，点击不同链接，转到不同页面
function highlightPage(){
	var links = document.getElementsByTagName('a');
	var linkurl;//导航链接的地址
	//遍历导航链接a
	for (var i = 0; i < links.length; i++) {
		linkurl = links[i].getAttribute('href');
		currentrl = window.location.href;//当前页面的url
		if (currentrl.indexOf(linkurl)!= -1) {
			links[i].className = "here";//给当前页面添加class
			var linktext = links[i].lastChild.nodeValue;//保存链接的文本
			document.body.setAttribute('id',linktext);//给当前页面的body添加id为链接的value值
		}
	}
}

