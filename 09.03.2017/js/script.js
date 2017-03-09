resetColor()
function clickMe(param){
   scrollCount=0;
   var attr=param.getAttribute("name");
   var bodyHeight=document.body.clientHeight;
   var bodyWidth=document.body.clientWidth;

   document.body.style.height=bodyHeight+"px"
   document.body.style.width=bodyWidth+"px"
   
   document.querySelector("#"+attr).style.height=window.innerHeight+"px";
   
   var sectionArr=document.querySelectorAll("section")
   for(i=0;i<sectionArr.length;i++){
   	if(sectionArr[i].getAttribute("id")==attr){
   		for(j=0;j<i;j++){
   			scrollCount+=sectionArr[j].clientHeight;

   		}
   		// console.log(scrollCount)
   		window.scrollTo(0,scrollCount)
   		
   	}
   }
}

function change(){
	var offsetCount=window.pageYOffset;
	if(offsetCount>120){
		document.querySelector("#nav").style.position="fixed"
	}
	if(offsetCount<=window.innerHeight-20){
		resetColor()
		document.getElementsByName("slider")[0].style.color="white"
	}else if(offsetCount<=window.innerHeight*2-20){
		resetColor()
		document.getElementsByName("work")[0].style.color="white"
		
	}else if(offsetCount<=window.innerHeight*3-20){
		resetColor()
		document.getElementsByName("team")[0].style.color="white"
		
	}else if(offsetCount<=window.innerHeight*4-20){
		resetColor()
		document.getElementsByName("news")[0].style.color="white"
		
	}else if(offsetCount<=window.innerHeight*5-20){
		resetColor()
		document.getElementsByName("contact")[0].style.color="white"
		
	}
}

function resetColor(){
	for(i=0;i<document.querySelectorAll("#nav li div").length;i++){
			document.querySelectorAll("#nav li div")[i].style.color="black"
			document.querySelectorAll("section")[i].style.height=window.innerHeight+"px"
		}
}