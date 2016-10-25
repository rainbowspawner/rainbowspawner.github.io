$(document).ready(function() {
// JavaScript Document
	var total= 0;
	var index = 0;
	var taskArray = [];

$.getJSON( "contacts.json", function(myjson) {
  	console.log( "JSON Data: " + myjson);
	for(i=0;i<myjson.contacts.length;i++){
	$(".tasktable").append("<tr class='taskrow'><th>"+i+"</th><td>"+myjson.contacts[i].name+"</td><td>"+myjson.contacts[i].email+"</td><td>"+myjson.contacts[i].address.town+"</td></tr>");
	}

  });
  
$( "#mydate" ).datepicker({
  dateFormat: "dd-mm-yyyy"
});


$("#add").click(function(){	
	//addTask();
});
		
	
});