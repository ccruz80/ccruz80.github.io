// JavaScript Document
$(document).ready(function() {
		
		$("li").click(function() {
		$("li").removeClass("current");
		$("div").removeClass("current");
		
		$(this).addClass("current");
		
		var tabSelected =$(this).attr("data-tab");
		
		$("#" + tabSelected).addClass("current");

	}); 
	
	
}); 

// for Drying page
$("input#convert").click(function() {
	//gets number from input
	var potSize = parseFloat($("#calc").val()) *.10
	
	//If answer is not a number a message will appear
	if(isNaN(potSize)) {
		$("span#answer").remove();
		$("p#results").append(`<span id="answer"> Please type in a number</span>`);
	}
	
	//shows the results at the buttom of input field
	else {
		var cm = document.getElementById("cm").checked;
		var mm = document.getElementById("mm").checked;
		var inch = document.getElementById("in").checked;
		
		if (cm === false) {
			$("span#answer").remove();
			$("p#results").append(`<span id="answer"> Select measurement </span>`)
		}
		
		if(potSize === null) {
			{
			$("span#answer").remove();
			$("p#results").append(`<span id="answer"> Please type in a number </span>`)
		}

		}
		
		if (cm) {
			$("span#answer").remove();
			$("p#results").append(`<span id="answer">${potSize.toFixed(2)} cm </span>`)
		}
		
		if (mm) {
			$("span#answer").remove();
			$("p#results").append(`<span id="answer">${potSize.toFixed(2)} mm </span>`)
		}
		
		if (inch) {
			$("span#answer").remove();
			$("p#results").append(`<span id="answer">${potSize.toFixed(2)} in </span>`)
		}
		
	}	
	
	

});

// for image hover page 2
$(".img1").hover(function(){
	$(this);
	$("#ex1").removeClass("start");
	$("#ex1").addClass("end");

}, function(){
	$(this);
	$("#ex1").removeClass("end");
	$("#ex1").addClass("start");	

});

$(".img2").hover(function(){
	$(this);
	$("#ex2").removeClass("start");
	$("#ex2").addClass("end");


}, function(){
	$(this);
	$("#ex2").removeClass("end");
	$("#ex2").addClass("start");
	

});

//radio buttons for drying tab

$("#dryTime").click(function(){
	var small= document.getElementById("size1").checked;
	var medium= document.getElementById("size2").checked;
	var big= document.getElementById("size3").checked;
	
	if(small) {
		$("#output").html("1 - 2 Days")
	}
	
	if(medium){
		$("#output").html("2 - 3 Days")
	}
	
	if(big){
		$("#output").html("3 - 6 Days")
	}
})


