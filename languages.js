
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

	'text13',  // step 1
	'text14',  // step 2
	'text18'  // step 3
];

const TRANSLATIONS = {
	'es': [
		/* text01:  intro */ 'haz tus posteos de instagram visibles usando los hashtags elegidos por nuestro algoritmo',
		/* button1 */ 'DESCARGA LA HERRAMIENTA',

		/* text06:  title section 1 */ 'DEJÁ DE USAR LOS HASHTAGS INCORRECTOS',
		/* text07:  content section 1 */ 'No importa si eres influencer, fotógrafo o social media manager, al usar hashtags compites con otros posteos que buscan la misma audiencia que tú. Por ejemplo: al usar #Travel estarás enterrando tu publicación junto con millones de otros usuarios. Es por esto que debes seleccionar los hashtags de forma inteligente para lograr el mejor cocktail que potencie tu publicación.',

		/* text09:  title section 2 */ 'EFECTO CASCADA',
		/* text10:  content section 2 */ 'Tus posteos merecen ser vistos. PUNTO. Solo introduce un par de hashtags semilla y deja que nuestro algoritmo elija por ti 30 hashtags perfectos para el cocktail. Donde cada uno de los hashtags seleccionados ayudará a generar el efecto cascada basado en la cantidad de posteos que haya en cada hashtag seleccionado.',

		/* text03:  title section 3 */ 'HACKEA LA ESTRATEGIA DE HASHTAGS',
		/* text12:  content section 3 */ 'Si seleccionas tus posteos de forma estratégica ¿porqué no haces lo mismo con los hashtags que usas? Tienes que ser metódico y elegir hashtags que permitan que tus publicaciones lleguen a ser top-performer en la mayoría de hashtags que usas. El cocktail de 30-hashtags brindado por la herramienta Just Tags permitirá que tus posteos sean top-performer en el 60% de los hashtags utilizados. Dándote mayor competitividad para los 40% de hashtags restantes (con más post compitiendo contigo). De esta forma tu posteo puede beneficiarse del efecto cascada.',

		/* text02:  title */ 'SE INTELIGENTE, HAZTE VIRAL',
		/* text04:  subtitle */ 'hackea la #estrategia con nuestro algoritmo ahora',
		/* button2 */ 'EMPEZAR AHORA',

		/*  text16: bio1 ...  */ '@josefina.mariap - diseñadora gráfica "2 días después de publicar mi primera foto con los hashtags que obtuve de la herramienta Just Tags, ¡el 59% de las personas que vieron la publicación no me seguían! Esto es impresionante."',
		/*  text11: bio2 ...  */ '@benja.xp - blogger/fotógrafo "No puedo creer lo fácil que es conseguir que mis publicaciones sean más vistas con esta herramienta. Todo este tiempo perdido sin siquiera usar hashtags. Ahora en segundos obtengo 30 combinaciones bien pensadas de hashtags listos para expandir mi alcance. "',
		/*  text17: bio3 ...  */ '@weremoto - Comunidad Remota "Si necesitan que su publicación se dispare sobre las impresiones de personas que no lo siguen, entonces deje de buscar, esto es lo que necesitan."',

		/* button3: */ 'DESCARGA AHORA JUST TAGS',

		/* text13:  step 1 */ '1er paso - descarga la herramienta',
		/* text14:  step 2 */ '2do paso - inserta los hashtags semilla y copia los 30 hashtags que te entrega la herramienta listos para ser usados en tu post.',
		/* text18:   step 3 */ '3er paso - monitorea los resultados en la página de insights de instagram. *captura de pantalla de un posteo de nuestros usuarios usando los hashtags generados con Just Tags'
	]
};

function getPreferedLlanguage() {
	// if (!!navigator && !!navigator.languages && navigator.languages.length > 0) {
	// 	return navigator.languages[0]; 
	// } else if (!!navigator && !!navigator.language) {
	// 	return navigator.language;
	// } else {
	// 	return 'en';
	// }
	return 'es';
}

window.addEventListener("load", (event) => {
	var language = getPreferedLlanguage();
	if (language == 'en') {
		console.log('default english');
		return;
	}

	if (! language in TRANSLATIONS) {
		console.log('language not supported');
		return;
	}

	var translation = TRANSLATIONS[language];
	if (translation.length != ELEMENTS.length) {
		console.log('wrong number of strings / elements');
		return;
	}
	for (var i = 0; i < translation.length; i++) {
		let element = document.getElementById(ELEMENTS[i]);
		let translatedText = translation[i];
		element.textContent = translatedText;
	}
});
