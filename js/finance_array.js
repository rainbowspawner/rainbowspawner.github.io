$(document).ready(function() {
// JavaScript Document
	var total= 0;
	var index = 0;
	var itemArray = [];

$("#add").click(function(){	
	addItem();
});

$("#remove").click(function(){	
	removeItem();
});
	
function removeItem(){
	$("#myrow").remove();
}	
function addItem(){		
	var itemObj ={};
	
	itemObj.name = $("#item").val();
	itemObj.price = Number($("#price").val());
	
	itemArray[index] = itemObj;
	console.log(itemArray);	
	
	$(".itemtable").append("<tr id="+index+"><th>"+index+"</th><td>"+itemArray[index].name+"</td><td>"+itemArray[index].price+"</td></tr>");		
	total +=itemArray[index].price; 
	$(".totaltable").replaceWith("<tbody class='totaltable'><tr><th></th><td>Total</td><td>$"+total+"</td></tr></tbody>");			
	index++;
	}
	
	});