// Hacer que la música repita cuando termine
window.addEventListener('DOMContentLoaded', function() {
	var audio = document.getElementById('musica-navidad');
	if(audio) {
		audio.addEventListener('ended', function() {
			audio.currentTime = 0;
			audio.play();
		});
	}
});
/**
 * @author Jose Angel Betancourt
 * @license GPL V3 2021
 */

'use strict'


/**
 * @function iniciar 
 * @description carga las funciones handler y particles.js
 */

// Código de partículas y otras funciones útiles permanecen aquí

// Inicializar particles.js
window.addEventListener('DOMContentLoaded', function() {
	if (window.particlesJS) {
		particlesJS.load('particles-js', 'js/particles.json', function() {
			console.log('particles.js loaded');
		});
	}
});

