var pika1=document.getElementById('dot1');
var pika2=document.getElementById('dot2');
var pika3=document.getElementById('dot3');
var pika4=document.getElementById('dot4');
var lB=document.getElementById('lButton');
var rB=document.getElementById('rButton');
var i=0;
var slideshow=document.getElementById('photos');

var background=["url(images/img.jpg)","url(images/img1.jfif)","url(images/img2.jfif)","url(images/img3.jfif)"];
{
	pika1.onmouseover=function(){
		this.style.backgroundColor="#999999"
	}
	pika2.onmouseover=function(){
		this.style.backgroundColor="#999999"
	}
	pika3.onmouseover=function(){
		this.style.backgroundColor="#999999"
	}
	pika4.onmouseover=function(){
		this.style.backgroundColor="#999999"
	}
	pika1.onmouseout=function(){
		this.style.backgroundColor="#bbbbbb"
	}
	pika2.onmouseout=function(){
		this.style.backgroundColor="#bbbbbb"
	}
	pika3.onmouseout=function(){
		this.style.backgroundColor="#bbbbbb"
	}
	pika4.onmouseout=function(){
		this.style.backgroundColor="#bbbbbb"
	}
}
pika1.onclick=function(){
	slideshow.style.backgroundImage=background[0];
}
pika2.onclick=function(){
	slideshow.style.backgroundImage=background[1];
}
pika3.onclick=function(){
	slideshow.style.backgroundImage=background[2];}
pika4.onclick=function(){
	slideshow.style.backgroundImage=background[3];}

rB.onclick=function(){
	i++;
	if(i==4){
		i=0;
	}
	slideshow.style.backgroundImage=background[i];
}
lB.onclick=function(){
	i--;
	if(i<0){
		i=3;
	}
	slideshow.style.backgroundImage=background[i];
}

