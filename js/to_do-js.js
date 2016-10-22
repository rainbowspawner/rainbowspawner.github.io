$(document).ready(function() {
// JavaScript Document
	var total= 0;
	var index = 0;
	var taskArray = [];

$("#add").click(function(){	
	addItem();
});

$("#remove").click(function(){	
	removeItem();
});


		/*function removeItem(){
	taskArray.splice(0,1);
	$(".tablerow").remove();
	for(i=0;i<taskArray.length;i++){
		$(".tasktable").append("<tr class='tablerow'><th>"+(i+1)+"</th><td>"+taskArray[i].name+"</td><td>"+taskArray[i].priority+"</td><td>"+"<input name='checkbox-1a' id="+index+" type='checkbox'></td></tr>");		
	}
	
	}*/

	
function removeItem(id){
	taskArray.splice(id,1);
	$(".tablerow").remove();
	for(i=0;i<taskArray.length;i++){
		$(".tasktable").append("<tr class='tablerow'><th>"+(i+1)+"</th><td>"+taskArray[i].name+"</td><td>"+taskArray[i].priority+"</td><td>"+"<input name='checkbox-1a' id='"+i+"' type='checkbox'></td></tr>");		
	$("#"+i).change(function(){
	console.log("chk");	
	if ($(this).is(':checked'));{

		removeItem(this.id);
		index--;
	}
	});
	}
	console.log(taskArray);	
}	

function addItem(){		
	var taskObj ={};
	
	taskObj.name = $("#task").val();
	taskObj.priority = Number($("#priority").val());
	
	taskArray[index] = taskObj;
	//console.log(taskArray);	
	
	$(".tasktable").append("<tr class='tablerow'><th>"+(index+1)+"</th><td>"+taskArray[index].name+"</td><td>"+taskArray[index].priority+"</td><td>"+"<input name='checkbox-1a' id='"+index+"' type='checkbox'></td></tr>");		
	console.log(index+" "+taskArray)
	$("#"+index).change(function(){
	console.log("chk");	
	if ($(this).is(':checked'));{

		removeItem(this.id);
		index--
	}
	});

	index++;



	}




});