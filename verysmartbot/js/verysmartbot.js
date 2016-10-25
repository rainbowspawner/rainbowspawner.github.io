$(document).ready(function() {
// JavaScript Document
	var index = 0;
	var qnArray = [];
	var ansArray = [];
	var replyArray = []

$.getJSON( "reply.json", function(thejson) {
  	
	ansArray = thejson.replies;
	/*for(i=0;i<myjson.contacts.length;i++){
	$(".tasktable").append("<tr class='taskrow'><th>"+i+"</th><td>"+myjson.contacts[i].name+"</td><td>"+myjson.contacts[i].email+"</td><td>"+myjson.contacts[i].address.town+"</td></tr>");
	}*/

  });
  
$("#ask").click(function(){	
	addQuestion();
});

function getRandomInt(max) {
  min = 0;
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function addQuestion(){
	var QnObj ={};
	var randomIndex=0;
	QnObj.qn = $("#question").val();
	var str = $("#question").val();
	var res = str.split(" ");
	for (i=0;i<res.length;i++){
		for (j=0;j<ansArray.length;j++){
			var n = ansArray[j].qnword.search(res[i]);
			console.log("wd length "+res[i].length);
			if (res[i].length>1){
		if (n>-1){
			replyArray.push(ansArray[j].answer);
			}
		}
		}
	}
	qnArray[index] = QnObj;
	randomIndex = getRandomInt(replyArray.length);

	$(".chattable").append("<tr class='chatrow me'><td>Me: "+qnArray[index].qn+"</td></tr>");
	if(replyArray.length>1){
	$(".chattable").append("<tr class='chatrow VerySmartBot'><td>VerySmartBot: "+replyArray[randomIndex]+"</td></tr>");
	}else{
		$(".chattable").append("<tr class='chatrow VerySmartBot'><td>VerySmartBot: Ask Siri, she is dumber than me</td></tr>");
	}
	replyArray.splice(0,replyArray.length);
} 
	
});