$(document).ready(function(){
	var vloga = vrednostPiskota("vloga");
	switch(vloga){
		case "ravnatelj":
			$("#meni_vnos_odsotnost").remove();
			$("#meni_vnos_ocena").remove();
			$("#meni_vnos_opravicilo").remove();
			$("#meni_prikaz_redovalnica").remove();
			break;
		case "profesor":
			$("#meni_vnos_opravicilo").remove();
			break;
		case "dijak":
			$("#meni_vnos_porocilo").remove();
			$("#meni_vnos_odsotnost").remove();
			$("#meni_vnos_ocena").remove();
			$("#meni_vnos_opravicilo").remove();
			break;
		case "stars":
			$("#meni_vnos_porocilo").remove();
			$("#meni_vnos_odsotnost").remove();
			$("#meni_vnos_ocena").remove();
			break;
		default:
			//pobrisiPiskote();
			//window.location.replace("vstop.html");
	}
});

$("#meni_odjava").click(function(){
	pobrisiPiskote();
});