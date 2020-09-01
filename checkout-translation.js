const ELEMENTS = [
	'text13',
	'text14',
	'text11',
	'text15',
];

const TRANSLATIONS = {
	'es': [
		/* text13= */ '<span style="text-align: left !important;"> <strong>Precio pre-lanzamiento:</strong> <span>$15</span> <span style=" font-size: 60%; vertical-align: baseline; left: -0.2em; top: -0.3em; position: relative;">.00</span> <span style="font-size: 70%;">(USD)</span> </span> <br/> <em style="font-size: 0.8em;">(pago por unica vez, precio post-lanzamiento $30)</em> <br/>',

		/* text14= */ '<span>Una vez realizada la compra, Paypal va a enviarte directamente a la pagina para instalar nuestra aplicacion. </span><br><span>Por ahora solo disponible en Google Chrome. Otras plataformas seran agregadas en las proximas semanas.</span><br><span>Por preguntas, contactarnos a nuestro <a href="mailto:justtagsco@gmail.com">email</a>.</span>',
		/* text11= */ 'Captura de pantalla de la app. Con apenas unas pocas semillas, la app te dara un mix de 30 hashtags que contiene la mezcla exacta de hashtags de categorias chiquitos, medianos, grandes y enormes. Usar el mix te dara maximo performance en tus posts!',
		/* text15= */ 'Seleccione metodo de pago:'
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

function updateLanguageTo(language) {
	if (language == 'en') {
		return;
	}
	updateText(language);
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
