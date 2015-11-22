$(function(){
	$("#vnesi").button().click(function(){
		var datum = new Date();
    	var cas = datum.toTimeString().split(" ");
    	cas = cas[0];
    	
		$("#dijak").val(0);
		$("#dijak").selectmenu("refresh");
		$("#predmet").val(0);
		$("#predmet").selectmenu("refresh");
		$("#ocena").val(0);
		$("#ocena").selectmenu("refresh");
		$("#datum").val("");
		$(".ui.radio").prop("checked", false);
	});
});