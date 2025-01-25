document.addEventListener('DOMContentLoaded', function() {
	// Настройка эффекта "карусель"
	const showSlider = new Swiper('.showcase-carousel', {
		loop: true,                    // возможность крутить слайд
		slidesPerView: 2.5,                // отображения элемента в энном кол-ве
		speed: 1800,					// Скорость прокрутывания
		centeredSlides: true,            // Делает активный элемент центральным
		navigation: {
			nextEl: '.showcase-navigation_next',
			prevEl: '.showcase-navigation_prev'
		}      
	})

	document.querySelector('video').playbackRate = 2             /* document. Интерфейс документа служит точкой входа для получения содержимого веб-страницы, для получения URL-адреса страницы или создания новых элементов в документе) */
		// playbackRate - скорость проигрывания видео
})
