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
				popup.classList.add("post-close");
				popup.classList.remove("post-close");
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
			
			
			
			