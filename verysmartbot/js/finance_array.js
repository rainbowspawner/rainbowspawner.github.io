$(document).ready(function() {
// JavaScript Document
	var total= 0;
	var index = 0;
	var taskArray = [];

$("#add").click(function(){	
	addTask();
});
	
function addTask(){		
	var taskObj ={};
	taskObj.name = $("#task").val();
	taskObj.priority = Number($("#priority").val());
	
	taskArray[index] = taskObj;
	
	$(".tasktable").append("<tr class='taskrow'><th>"+index+"</th><td>"+taskArray[index].name+"</td><td>"+taskArray[index].priority+"</td><td><input type='checkbox' id="+index+"></td></tr>");
	//total +=itemArray[index].priority; 		
	
	 $("#"+index).change(function() {
	 console.log(this.id);
        if($(this).is(":checked")) {
            removeTask(this.id);
        }              
    });
    index++;
	}
	
	function removeTask(id){
		$(".taskrow").remove();
		taskArray.splice(id,1);
		for(i=0;i<taskArray.length;i++){
		  $(".tasktable").append("<tr class='taskrow'><th>"+i+"</th><td>"+taskArray[i].name+"</td><td>"+taskArray[i].priority+"</td><td><input type='checkbox' id="+i+"></td></tr>");
		  $("#"+i).change(function() {
        	if($(this).is(":checked")) {
            	removeTask(this.id);
        	}              
   		 });
		}
		console.log(taskArray);
	}
});