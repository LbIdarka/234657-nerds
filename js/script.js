var link = document.querySelector(".button");
var popup = document.querySelector(".container-post");
var close = document.querySelector(".container-post-close");
var introduce = popup.querySelector("[name=name-post]");
var form = popup.querySelector("form");
var letter = popup.querySelector("[name=email-post]");
var storage = localStorage.getItem("letter");

	link.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.add("container-post-show");

	if (storage) {
		letter.value = storage;
	}

		introduce.focus();
	});

	close.addEventListener("click", function(event) {
		event.preventDefault();
		popup.classList.remove("container-post-show");
		popup.classList.remove("container-post-error");
	});

	form.addEventListener("submit", function() {
		if (!introduce.value || !letter.value) {
			event.preventDefault();
			popup.classList.remove("container-post-error");
			popup.offsetWidth = popup.offsetWidth;
			popup.classList.add("container-post-error");
			} else {
			localStorage.setItem("letter", letter.value);
			}
	});

	window.addEventListener("keydown", function(event) {
		if (event.keyCode === 27) {
		if (popup.classList.contains("container-post-show")) {
			popup.classList.remove("container-post-show");
			popup.classList.remove("container-post-error");
			}
		}
	})



var myMap;
var myPlacemark;
// Дождёмся загрузки API и готовности DOM.
	ymaps.ready(init);

	function init () {
		// Создание экземпляра карты и его привязка к контейнеру с
		// заданным id ("map").
		myMap = new ymaps.Map('map', {
				// При инициализации карты обязательно нужно указать
				// её центр и коэффициент масштабирования.
			center: [59.939217855632,30.320243544952387], // Москва
			zoom: 17
		}, {
			searchControlProvider: 'yandex#search'
		}),
		myPlacemark = new ymaps.Placemark([59.93863106417265,30.3230545], {}, {
			iconLayout: 'default#image',
			iconImageHref: "img/point-map.png",
			iconImageSize: [231, 190],
			iconImageOffset: [-60, -200]
	});

		myMap.geoObjects.add(myPlacemark);
	}
