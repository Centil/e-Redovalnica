$(function(){
	$("#vnesi").button().click(function(){
		$("#opravicilo").val("");
		$("#dijak").val(0);
		$("#dijak").selectmenu("refresh");
		$("#datum").val("");
	});
});