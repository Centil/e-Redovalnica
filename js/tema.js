$(document).ready(function(){
	$("input:button, input:submit, button").button();
	$(".ui.datetime").datepicker({
            dateFormat: "dd/mm/yy"
	});
	$(".ui.time, .ui.datetime").addClass("ui-state-default");
	$(".ui.spinner").spinner();
	$(".ui.selector").selectmenu({
		position:{
			my: "right center", 
			at: "right center"
		}
	});
	$("legend").attr("align", "center");
});