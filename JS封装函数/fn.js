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
// 数组排序的比较函数，对数组的每一项按照属性名排序
function createComparisonFunction(propertyname) {
	return function(object1,object2){
		var value1 = object1[propertyname];
		var value2 = object2[propertyname];
		if(value1 < value2) {
			return -1;
		}else if (value1 > value2) {
			return 1;
		}else {
			return 0;
		}
	};
}
//经典的阶乘函数，缺点函数的执行与函数名紧紧的耦合在了一起
function factorial(num) {
	if(num <=1) {
		return 1;
	} else {
		return num*factorial(num - 1);
	}
}
//改进后的函数，无论引用后的函数是什么名字都可以保证正常的递归调用
function factorial(num) {
	if(num <=1) {
		return 1;
	} else {
		return num*arguments.callee(num - 1);
	}
}

// 通用的事件监听器函数
var Event={
	//页面加载完成后
	readyEvent: function (fn) {
		if (fn == null) {
			fn = document;
		}
		var oldload = window.onload;
		if (window.onload!='function') {
			window.onload = fn;
		} else {
			window.onload = function(){
				oldload();
				fn();
			};
		}
	},
	//视能力分别使用dom0/dom2/IE方式来绑定事件
	// 参数：操作的元素，事件名称，事件处理程序
	//添加事件
	addEvent : function(element,type,handler){
		if (element.addEventListener) {
			//事件类型，需要执行的函数，是否捕捉
			element.addEventListener(type,handler,false);
		} else if(element.attachEvent) {
			element.attachEvent('on' + type,function(){
				handler.call(element);
			});
		} else {
			element['on'+type] = handler;
		}
	},
	//移除事件
	removeEvent : function(element,type,handler){
		if (element.removeEventListener) {
			//事件类型，需要执行的函数，是否捕捉
			element.removeEventListener(type,handler,false);
		} else if(element.detachEvent) {
			element.detachEvent('on' + type,handler);
		} else {
			element['on'+type] = null;
		}
	},
	//阻止事件(主要是事件冒泡，因为IE不支持事件捕获)
	stopPropagation: function(ev) {
		if (ev.stopPropagation) {
			ev.stopPropagation();
		} else {
			ev.cancelBubble = true;
		}
	},
	//取消事件的默认行为
	preventDefault: function(event) {
		if (event.preventDefault) {
			event.preventDefault();
		} else {
			event.returnValue = false;
		}
	},
	//获取事件的目标
	getTarget : function(event) {
		return event.target || event.srcElement;
	},
	//获取event对象的引用，取到事件的所有信息，确保能随时使用event;
	getEvent : function(e) {
		var ev = e || window.event;
		if (!ev) {
			var c = this.getEvent.caller;
			while(c) {
				ev = c.arguments[0];
				if (ev && Event == ev.constructor) {
					break;
				}
				c = c.caller;
			}
		}
		return ev;
	}
};