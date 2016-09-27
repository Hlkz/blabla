
(function(doc){
    var hasClass = function(el, className) {
        return (' ' + el.className + ' ').indexOf(' ' + className + ' ') > -1;
    }
    doc.addEventListener('click', function(e) {
        if (hasClass(e.target, 'loadpage')) {
            e.preventDefault();
            var address = e.target.getAttribute('pageaddress');
            SwitchPage(address)
        }
    })
    
    
    
    
    
    
    
})(document);

/*
window.onload = function(){
	var x = document.getElementsByClassName("pagelink")
	for (var i = 0; i < x.length; i++) {
		console.log(x[i].getAttribute("page"))
			console.log(x[i])
		
		x[i].onclick = function() {
			console.log(x[i])
			return false
		}
	}
}
*/

function SwitchPage(name) {
	document.getElementById("page").innerHTML='<iframe id="pageobject" src="page/'+name+'" width="100%" frameBorder="0" onload="ResizePageIFrame()"></iframe>';
	window.history.pushState(null, null, "/"+name);
	return false;
}
function ResizePageIFrame() {
	var object = document.getElementById("pageobject")
	var Window = object.window?object.window:object.contentWindow;
	var Document = Window.document
	console.debug(Document.body.offsetHeight)
	object.style.height=(Document.body.scrollHeight)+"px";
}
