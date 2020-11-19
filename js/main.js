class StickyNavigation {
	constructor() {
		this.currentId = null;
		this.currentTab = null;
		this.tabContainerHeight = 70;
		let self = this;
		$('.nav-tab').click(function () {
			self.onTabClick(event, $(this));
		});
		$(window).scroll(() => {
			this.onScroll();
		});
		$(window).resize(() => {
			this.onResize();
		});
	}
	onTabClick(event, element) {
		event.preventDefault();
		let scrollTop = $(element.attr('href')).offset().top - this.tabContainerHeight + 1;
		$('html, body').animate({
			scrollTop: scrollTop
		}, 600);
	}
	onScroll() {
		this.checkTabContainerPosition();
		this.findCurrentTabSelector();
	}
	onResize() {
		if (this.currentId) {
			this.setSliderCss();
		}
	}
	checkTabContainerPosition() {
		let offset = $('.hero').offset().top + $('.hero').height() - this.tabContainerHeight;
		if ($(window).scrollTop() > offset) {
			$('.nav-tabs-container').addClass('nav-tabs-container--top');
		} else {
			$('.nav-tabs-container').removeClass('nav-tabs-container--top');
		}
	}

	findCurrentTabSelector(element) {
		let newCurrentId;
		let newCurrentTab;
		let self = this;
		$('.nav-tab').each(function () {
			let id = $(this).attr('href');
			let offsetTop = $(id).offset().top - self.tabContainerHeight;
			let offsetBottom = $(id).offset().top + $(id).height() - self.tabContainerHeight;
			if ($(window).scrollTop() > offsetTop && $(window).scrollTop() < offsetBottom) {
				newCurrentId = id;
				newCurrentTab = $(this);
			}
		});
		if (this.currentId != newCurrentId || this.currentId === null) {
			this.currentId = newCurrentId;
			this.currentTab = newCurrentTab;
			this.setSliderCss();
		}
	}
	setSliderCss() {
		let width = 0;
		let left = 0;
		if (this.currentTab) {
			width = this.currentTab.css('width');
			left = this.currentTab.offset().left;
		}
		$('.nav-tab-slider').css('width', width);
		$('.nav-tab-slider').css('left', left);
	}

}
new StickyNavigation();

//email validation
function validateEmail() {
	var name = document.getElementById("name").value;
	var subject = document.getElementById("subject").value;
	var phone = document.getElementById("phone").value;
	var email = document.getElementById("email").value;
	var message = document.getElementById("message").value;
	var error_message = document.getElementById("error_message");

	error_message.style.padding = "10px";

	var text;
	if (name.length < 5) {
		text = "Por favor introduzca un nombre";
		error_message.innerHTML = text;
		return false;
	}
	if (subject.length < 10) {
		text = "Por favor introduzca un asunto";
		error_message.innerHTML = text;
		return false;
	}
	if (isNaN(phone) || phone.length != 9) {
		text = "Por favor introduzca un número de teléfono";
		error_message.innerHTML = text;
		return false;
	}

	if (email.indexOf("@") == -1 || email.length < 6) { //FALTA VALIDAR DESPUES DE @
		text = "Por favor introduzca un email";
		error_message.innerHTML = text;
		return false;
	}

	if (message.length <= 140) {
		text = "Por favor introduzca mínimo 140 carácteres";
		error_message.innerHTML = text;
		return false;
	}
	//alert("Si quieres contactar con la desarrolladora de esta web, haz click aqui Http");
	if (window.confirm(`OK to go to the developer's site, CANCEL to Stay here`)){
		window.open('http://joannasmerea.com', '_blank');
	} else {
		location.reload();
	};
	return false;
}
//order alphabetically for alumni
//SWITCH
$('#sort').click(function(){
    var alphabeticallyOrderedDivs = $('.item').sort(function(a, b) {
      return String.prototype.localeCompare.call($(a).data('title').toLowerCase(), $(b).data('title').toLowerCase());
  });

  var container = $("#aphaOrder");
  container.detach().empty().append(alphabeticallyOrderedDivs);
  $('#alumni').append(container);
})

for (let index = 0; index < array.length; index++) {
	const element = array[index];	
}