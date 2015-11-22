$(document).ready(function(){
	var naslov = "";
	var opis = "";
	var oseba = vrednostPiskota("oseba").split(" ");
	var vloga = vrednostPiskota("vloga");
	var spol = vrednostPiskota("spol");
	
	switch(spol){
		case "m":
			naslov = naslov + "Pozdravljen ";
			break;
		case "ž":
			naslov = naslov + "Pozdravljena ";
			break;
	}
	
	naslov = naslov + oseba[0] + " " + oseba[1];
	$("#pozdrav").append(naslov);
	
	$.getJSON("../source/jsons/osebje.json", function(tmp){	
		switch(vloga){
			case "ravnatelj":
				var ravnatelj = tmp.osebje.ravnatelj;
				var profesorji = ravnatelj.profesorji;
				
				opis = opis + "Vaši dijaki so:<br><ul>";
				for(i in profesorji){
					opis = opis + "<li>" + profesorji[i].ime +
						" " + profesorji[i].priimek + ", profesor " +
						profesorji[i].predmet + "</li>";
				}
				opis = opis + "</ul>";
				
				break;
			case "profesor":
				var profesorji = tmp.osebje.profesorji;
				var profesor;
				
				for(i in profesorji){
					if(oseba[0] == profesorji[i].ime && 
					   oseba[1] == profesorji[i].priimek){
						profesor = profesorji[i];
						break;
					}
				}
				
				var dijaki = profesor.dijaki;
				
				opis = opis + "Vaši dijaki so:<br><ul>";
				for(i in dijaki){
					opis = opis + "<li>" + dijaki[i].ime +
						" " + dijaki[i].priimek + ", razred " +
						dijaki[i].razred + "</li>";
				}
				opis = opis + "</ul>";
				
				break;
			case "dijak":
				opis = opis + "Pridno študiraj :)<br><br>";
				break;
			case "stars":
				var starsi = tmp.osebje.starsi;
				var stars;
				
				for(i in starsi){
					if(oseba[0] == starsi[i].ime && 
					   oseba[1] == starsi[i].priimek){
						stars = starsi[i];
						break;
					}
				}
				var otroci = stars.otroci;
				if(otroci.length > 1){
					opis = opis + "Vaši otroci so:<br><ul>";
					for(i in otroci){
						opis = opis + "<li>" + otroci[i].ime +
							" " + otroci[i].priimek + "</li>";
					}
					opis = opis + "</ul>";
				}
				else{
					opis = opis + "Vaši otrok je:<br><ul>" + 
						"<li>" + otroci[0].ime + " " + 
						otroci[0].priimek + "</li></ul>";
				}
				break;
		}
	})
	.done(function(tmp) {
		opis = opis + "Trenutno ste logirani kot " + oseba[0] + " " + oseba[1] + 
		". <br> Če to ni vaš račun, se prosim nemudoma odjavite in nas o tem obvestite.";
	
		$("#opis").append(opis);
  	});
});