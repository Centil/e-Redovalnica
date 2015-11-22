$(function(){
	$("#vnesi").button().click(function(){
		var datum = new Date();
    	var cas = datum.toTimeString().split(" ");
    	cas = cas[0];
    	
		$("#dijak").val(0);
		$("#dijak").selectmenu("refresh");
		$("#predmet").val(0);
		$("#predmet").selectmenu("refresh");
		$("#datum").val("");
		$("#cas").val(cas);
		$("#minute").val(0);
	});
	$("#minute").spinner("option", "min", 0);
	$("#minute").spinner("option", "max", 59);
	
	var datum = new Date();
    var cas = datum.toTimeString().split(" ");
    cas = cas[0];
    
    $("#cas").val(cas);
});