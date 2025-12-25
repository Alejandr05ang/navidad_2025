// Pantalla de bienvenida universal: activa música y video al tocar
window.addEventListener('DOMContentLoaded', function() {
	var overlay = document.getElementById('welcome-overlay');
	var audio = document.getElementById('musica-navidad');
	var video = document.querySelector('header video');
	var errorMsg = document.getElementById('media-error-msg');
	if (overlay) {
		var btn = document.getElementById('start-experience-btn');
		var startExperience = function() {
			overlay.style.display = 'none';
			var audioPromise = audio ? audio.play() : Promise.resolve();
			var videoPromise = video && video.play ? video.play() : Promise.resolve();
			// Si alguna reproducción falla, mostrar mensaje
			Promise.allSettled([audioPromise, videoPromise]).then(function(results) {
				var failed = results.some(function(r) { return r.status === 'rejected'; });
				if (failed && errorMsg) {
					errorMsg.style.display = 'flex';
				}
			});
			if (btn) btn.removeEventListener('click', startExperience);
		};
		if (btn) btn.addEventListener('click', startExperience);
	}
});
// Mostrar botón para activar música en móviles y manejar reproducción
window.addEventListener('DOMContentLoaded', function() {
	var audio = document.getElementById('musica-navidad');
	var btn = document.getElementById('play-music-btn');
	// Detectar si es móvil
	var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
	if (isMobile && btn && audio) {
		btn.style.display = 'block';
		btn.addEventListener('click', function() {
			audio.play();
			btn.style.display = 'none';
		});
		// Pausar música hasta interacción
		audio.pause();
	}
});
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

