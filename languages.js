
const IMAGES_SRC_PATH = 'assets/images/';

const ELEMENTS = [
	'text01',  // intro
	'button1',

	'text06',  // title section 1
	'text07',  // content section 1

	'text09',  // title section 2
	'text10',  // content section 2

	'text03',  // title section 3
	'text12',  // content section 3

	'text02',  // title
	'text04',  // subtitle
	'button2',

	'text16',  // bio 1
	'text11',  // bio 2
	'text17',  // bio 3

	'button3',

	'text14',  // step 1
	'text18'  // step 2
];

const TRANSLATIONS = {
	'es': [
		/* intro (text01) */ 'haz visibles tus posteos de instagram usando los hashtags elegidos por nuestro algoritmo',
		/* button 1 */ 'DESCARGÁ LA HERRAMIENTA',

		/* title section 1 (text06) */ 'DEJÁ DE USAR LOS HASHTAGS INCORRECTOS',
		/* content section 1 (text07) */ 'No importa si eres influencer, fotógrafo o social media manager, al usar hashtags <strong>compites</strong> con otros posteos que buscan la misma audiencia que tú.<br/> <em>Por ejemplo:</em> al usar <strong>#Travel</strong> estarás enterrando tu publicación junto con millones de otros usuarios. Es por esto que debes seleccionar tus hashtags de forma inteligente para lograr el <strong>mejor cocktail</strong> que potencie tu publicación.',

		/* title section 2 (text09) */ 'EFECTO CASCADA',
		/* content section 2 (text10) */ 'Tus posteos merecen ser vistos. <strong>PUNTO</strong>. Solo introduce un par de hashtags semilla y deja que <strong>nuestro algoritmo</strong> elija por ti <strong>30 hashtags perfectos</strong> para el cocktail. Donde cada uno de los hashtags seleccionados ayudará a generar el efecto cascada basado en la cantidad de posteos que haya en cada hashtag seleccionado.',

		/* title section 3 (text03) */ 'HACKEA LA ESTRATEGIA DE HASHTAGS',
		/* content section 3 (text12) */ 'Si seleccionas tus posteos de forma estratégica ¿porqué no haces lo mismo con los hashtags que usas? Tienes que ser metódico y elegir hashtags que permitan que tus publicaciones sean <strong>destacadas</strong> en la mayoría de hashtags que usas.<br/>El cocktail de 30-hashtags brindado por la herramienta <strong>Just Tags</strong> permitirá que <strong>tus posteos sean lideres</strong> en el 60% de los hashtags utilizados. Dándote mayor competitividad para los 40% de hashtags restantes (con más post compitiendo contigo). De esta forma tu posteo puede beneficiarse del efecto cascada.',

		/* title (text02) */ 'SE INTELIGENTE, HAZTE VIRAL',
		/* subtitle (text04) */ 'hackea la #estrategia con nuestro algoritmo ahora',
		/* button 2 */ 'EMPEZÁ AHORA',

		/* bio1 (text16) */ '<strong>@josefina.mariap</strong> - diseñadora gráfica "2 días después de publicar mi primera foto con los hashtags que obtuve de la herramienta Just Tags, ¡el 59% de las personas que vieron la publicación no me seguían! Esto es impresionante."',
		/* bio2 (text11) */ '<strong>@benja.xp</strong> - blogger/fotógrafo "No puedo creer lo fácil que es conseguir que mis publicaciones sean más vistas con esta herramienta. Todo este tiempo perdido sin siquiera usar hashtags. Ahora en segundos obtengo 30 combinaciones bien pensadas de hashtags listos para expandir mi alcance. "',
		/* bio3 (text17) */ '<strong>@weremoto</strong> - Comunidad Remota "Si necesitan que su publicación se dispare sobre las impresiones de personas que no lo siguen, entonces deje de buscar, esto es lo que necesitan."',

		/* button 3 */ 'DESCARGÁ JUST TAGS AHORA',

		/* step 1 (text14) */ '<strong>1do paso</strong> - inserta los hashtags <em>semilla</em> y copia los 30 hashtags que te entrega la herramienta listos para ser usados en tu post.',
		/* step 2 (text18) */ '<strong>2er paso</strong> - monitorea los resultados en la página de insights de instagram.<br/><em>*captura de pantalla de un posteo de nuestros usuarios usando los hashtags generados con Just Tags</em>'
	]
};

const IMAGES = [
	'image10-img',  // gif promo
	'image09-img'  // gif walkthrough
];

const TRANSLATED_IMAGES = {
	'es': [
		'image10-es.gif',  // gif promo
		'image09-es.gif'  // gif walkthrough
	]
};

function getPreferedLanguage() {
	if (!!navigator && !!navigator.languages && navigator.languages.length > 0) {
		return navigator.languages[0]; 
	} else if (!!navigator && !!navigator.language) {
		return navigator.language;
	} else {
		return 'en';
	}
}

function setLanguage(language) {
	if (language.length != 2) {
		return;
	}
	if (language == 'en') {
		// location.reload();
		window.location.reload(false); 
	} else {
		updateLanguageTo(language);
	}
}

function updateText(language) {
	var translation = TRANSLATIONS[language];
	if (translation.length != ELEMENTS.length) {
		console.log('ERROR: wrong number of strings / elements');
		return;
	}
	for (var i = 0; i < translation.length; i++) {
		let element = document.getElementById(ELEMENTS[i]);

		if (!element) {
			console.log("ERROR: couldn't find " + ELEMENTS[i]);
			continue;
		}

		let translatedText = translation[i];
		element.innerHTML = translatedText;
	}
}

function updateImages(language) {
	var translatedImages = TRANSLATED_IMAGES[language];
	if (!translatedImages) {
		console.log('ERROR: no translated images for ' + language);
		return;
	}
	if (translatedImages.length != IMAGES.length) {
		console.log('ERROR: wrong number of images / elements');
		return;
	}
	for (var i = 0; i < IMAGES.length; i++) {
		let imageElement = document.getElementById(IMAGES[i]);

		if (!imageElement) {
			console.log("ERROR: couldn't find image " + IMAGES[i]);
			continue;
		}
		imageElement.src = translatedImages[i];
		imageElement.dataset.src = translatedImages[i];
	}
}

function updateLanguageTo(language) {
	if (language == 'en') {
		return;
	}
	updateText(language);
	updateImages(language);
}

window.addEventListener("load", (event) => {
	var language = getPreferedLanguage();
	console.log('language ' + language);

	if (!(language in TRANSLATIONS)) {
		if (language.length <= 2) {
			console.log('(1) no translation for: ' + language);
			return;
		}
		language = language.substring(0, 2);
		if (!(language in TRANSLATIONS)) {
			console.log('(2) no translation for: ' + language);
			return;
		} else {
			console.log('fallback to: ' + language);
		}
	}
	updateLanguageTo(language);
});
