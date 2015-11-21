//tmp validacijski podatki za frontend
var imena = ["Ladislava", 
			 "Hilda", "Andrej", 
			 "Martin", "Anja", 
			 "Alenka"];
var priimki = ["Zid", 
			   "Tovsakova", "Burek", 
			   "Gajs", "Gajs", 
			   "Gajs"];
var emaili = ["ravnatelj@zidarska.si", 
			  "profesor1@zidarska.si", "profesor2@zidarska.si", 
			  "dijak1@zidarska.si", "dijak2@zidarska.si", 
			  "stars1@zidarska.si"];
var gesla = ["ravnatelj", 
			 "profesor1", "profesor2", 
			 "dijak1", "dijak2", 
			 "stars1"];
var vloge = ["ravnatelj-f", 
			 "profesor-f", "profesor-m", 
			 "dijak-m", "dijak-f", 
			 "stars-f"];

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
				console.log("upo: " + upo == uporabnik.email);
				console.log("ges: " + ges == uporabnik.geslo);
				console.log("dostop notri " + dostop);
			}
		})
		.done(function() {
    		console.log("dostop zunaj " + dostop);
		
			if(dostop){
				window.location.replace("info.html");
			}
  		});
		/*for(i in imena){
			if(upo == emaili[i] && ges == gesla[i]){
				dostop = true;
			}
		}*/
	});
});