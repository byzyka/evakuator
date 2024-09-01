$(document).ready(function(){
	var tab = $('#tabs .tabs__body> div'); 
	tab.hide().filter(':first').show(); 
	
	// Клики по вкладкам.
	$('#tabs .tabs__items a').click(function(){console.log(11);
        $('#tabs .tabs__items a').removeClass('active');
        $(this).addClass('active');
        $('.tabs__block').hide(); 
        $($(this).attr('href')).show(); 
        return false;
	});
 
	// Клики по якорным ссылкам.
	$('.tabs-target').click(function(){
		$('#tabs .tabs__items a[href=' + $(this).attr('href')+ ']').click();
	});
	
	// Отрытие вкладки из хеша URL
	/*if(window.location.hash){
		$('#tabs-nav a[href=' + window.location.hash + ']').click();
		window.scrollTo(0, $("#" . window.location.hash).offset().top);
	}*/

	var tabTechnologies = $('#tabs-technologies .tabs-technologies-items > div'); 
	tabTechnologies.hide().filter(':first').show(); 
	
	// Клики по вкладкам.
	$('#tabs-technologies .tabs-technologies-nav a').click(function(){
		tabTechnologies.hide(); 
		tabTechnologies.filter(this.hash).show(); 
		$('#tabs-technologies .tabs-technologies-nav a').removeClass('active');
		$(this).addClass('active');
		return false;
	}).filter(':first').click();
 
	// Клики по якорным ссылкам.
	$('.tabs-target').click(function(){
		$('#tabs .tabs__items a[href=' + $(this).attr('href')+ ']').click();
	});
	
	// Отрытие вкладки из хеша URL
	/*if(window.location.hash){
		$('#tabs-nav a[href=' + window.location.hash + ']').click();
		window.scrollTo(0, $("#" . window.location.hash).offset().top);
	}*/

    const swiper = new Swiper(".characteristics__slider", {
        slidesPerView: 1,
        breakpoints: {
            1200: {
            
            slidesPerView: 2,
            
            },
        },

        centeredSlides: false,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
            clickable: true,
        },
        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        },
     });


    $.each($('.radiobuttuns__item'),function(index, val) {
        if($(this).find('input').prop('checked')==true){
            $(this).addClass('activeCheck');
        }
    });

    $('body').on('click', '.radiobuttuns__item', function(event) {
        $(this).parents('.radiobuttuns').find('.radiobuttuns__item').removeClass('activeCheck');
        $(this).parents('.radiobuttuns').find('.radiobuttuns__item input').prop('checked', false);
        $(this).toggleClass('activeCheck')
        $(this).find('input').prop('checked', true);
        return false;
    });

    $('body').on('click', '.header__btn', function(){
        if($('.form__window').hasClass('hidden')) {
            $('section').addClass('hidden');
            $('.form__window').removeClass('hidden'); 
            window.scrollTo(0, 0);           
        } else {
            $('section').removeClass('hidden');
            $('.form__window').addClass('hidden');
        }
    })
});