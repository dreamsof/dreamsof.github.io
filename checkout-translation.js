const ELEMENTS = [
	'text13'
];

const TRANSLATIONS = {
	'es': [
		/* text13 */ '<span>Precio pre-lanzamiento: <s>$3000 ARS</s><strong>$1500 ARS</strong></span><br><span><em>Pago por unica vez</em></span>'
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
