$(function() {
	$("#potrdi_vpis").button().click(function(){
		var upo = document.getElementById("vstop").uporabnik.value;
		var ges = document.getElementById("vstop").geslo.value;
		var dostop = false;
		
		$.getJSON("../source/jsons/validacija/validacija.json", function(tmp){
			for(i in tmp.uporabniki){
				var uporabnik = tmp.uporabniki[i];
				
				if(upo == uporabnik.email && ges == uporabnik.geslo){
					dostop = true;
				}
			}
		})
		.done(function() {
			if(dostop){
				$("#napaka").addClass("hidden");
				window.location.replace("info.html");
			}
			else{
				$("#napaka").removeClass("hidden");
			}
  		});
	});
});