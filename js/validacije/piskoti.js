//ustvarimo nov piskot
function nastaviPiskot(ime, vrednost, stDni){
	var datum = new Date();
	datum.setTime(datum.getTime() + (stDni * 24 * 60 * 60 * 1000));
	var potece = "expires="+datum.toUTCString();
	document.cookie = ime + "=" + vrednost + "; " + potece;
}

//dobimo vrednost piskota
function vrednostPiskota(ime){
	var imePiskota = ime + "=";
	var piskoti = document.cookie.split(";");
	
	for(i in piskoti){
		var piskot = piskoti[i];
		
		while(piskot.charAt(0) == " "){
			piskot = piskot.substring(1);
		}
		
		if(piskot.indexOf(ime) == 0){
			return piskot.substring(ime.length+1, piskot.length);
		}
	}
	
	return "";
}

//pobrišemo obstoječi piškot
function pobrisiPiskot(ime){
	var datum = new Date();
	datum.setTime(datum.getTime() - (24 * 60 * 60 * 1000));
	var preneha = "expires="+datum.toUTCString();
	document.cookie = ime + "=; " + preneha;
}

//ustvari vse potrebne piškote
function ustvariPiskote(ime, priimek, vloga, spol){
	nastaviPiskot("oseba", ime + " " + priimek, 1/24);
	nastaviPiskot("vloga", vloga, 1/24);
	nastaviPiskot("spol", spol, 1/24);
}

//pobrise vse potrebne piškote
function pobrisiPiskote(){
	pobrisiPiskot("oseba");
	pobrisiPiskot("vloga");
	pobrisiPiskot("spol");
}