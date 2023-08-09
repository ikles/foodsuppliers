jQuery(document).ready(function( $ ) {

  $(".toggle-mnu").click(function() {
    $(this).toggleClass("on");
    $(".top-mnu").slideToggle();
    return false;
  });

  $('body').click(function () {
    if( $(".toggle-mnu").hasClass("on") ){
      $(".toggle-mnu").removeClass("on");
      $(".top-mnu").fadeOut();
    }
  });


  $(".top-mnu").click(function (e) {
    e.stopPropagation();
  });


  $('.sexamples li').click(function () {  
    $('.hero form input[type="text"]').val($(this).text());
  });


//levels menu
  let isMobile={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return(isMobile.Android()||isMobile.BlackBerry()||isMobile.iOS()||isMobile.Opera()||isMobile.Windows())}}

  let body = document.querySelector('body');












  $('.production__slider').slick({
    infinite: false,    
    speed: 600,
    slidesToScroll: 1,
    autoplay: false,    
    slidesToShow: 5,
    cssEase: 'linear',  
    autoplaySpeed: 0,  
    arrows: true,
    pauseOnHover: true,  
    responsive: [
    {
      breakpoint: 1381,
      settings: {
        slidesToShow: 5
      }
    },   
    ]
  });

  $('.revs__slider').slick({
    infinite: false,    
    speed: 600,
    slidesToScroll: 1,
    autoplay: false,    
    slidesToShow: 3,
    cssEase: 'linear',  
    autoplaySpeed: 0,  
    arrows: false,
    dots: true,
    pauseOnHover: true,  
    responsive: [
    {
      breakpoint: 1381,
      settings: {
        slidesToShow: 5
      }
    },   
    ]
  });

  $('.news__slider').slick({
    infinite: false,    
    speed: 600,
    slidesToScroll: 1,
    autoplay: false,    
    slidesToShow: 3,
    cssEase: 'linear',  
    autoplaySpeed: 0,  
    arrows: false,
    dots: true,
    pauseOnHover: true,  
    responsive: [
    {
      breakpoint: 1381,
      settings: {
        slidesToShow: 5
      }
    },   
    ]
  });

  $('.pubs__slider').slick({
    infinite: false,    
    speed: 600,
    slidesToScroll: 1,
    autoplay: false,    
    slidesToShow: 4,
    cssEase: 'linear',  
    autoplaySpeed: 0,  
    arrows: true,
    dots: false,
    pauseOnHover: true,  
    responsive: [
    {
      breakpoint: 1381,
      settings: {
        slidesToShow: 5
      }
    },   
    ]
  });


  $('.more').click(function (e) {
    e.preventDefault();
    $(this).closest('p').addClass('show');
    $(this).hide();
  });


  function tabs(element) {    
    $(element).find('.tabs__list-item').click(function () {
      $(element).find('.tabs__list-item').removeClass('active');
      $(this).addClass('active');    
      let num = $(this).index();
      $(element).find('.tabs__content-list-item').removeClass('active');
      $(element).find('.tabs__content-list-item').eq(num).addClass('active');    
    });
  }

  tabs('.ncats__tabs');


/************************************/

/*$('.wrapper').prepend('<span class="eye-3"></span>');
let pg = parseInt(document.location.pathname.match(/\d+/))
$('body').addClass('active').css('background-image', "url('../img/"+pg+".jpg')");
$('body:not(.active)').css('background-image', "unset");

$('.eye-3').click(function (e) {
  e.preventDefault();  
  $('body').toggleClass('active');
  let pg = parseInt(document.location.pathname.match(/\d+/));
  $('body.active').css('background-image', "url('../img/"+pg+".jpg')");
  $('body:not(.active)').css('background-image', "unset");

});*/

/************************************/



  function popup(openLink, windowEl, closeEl) {  
    $(openLink).click(function(e) {
      e.preventDefault();
      $(windowEl).fadeIn();
      $('body').addClass('ohi');
    });
    $(closeEl).click(function(e) {
      e.preventDefault();
      $(windowEl).fadeOut();
      $('body').removeClass('ohi');
    });
    $('.modal-overlay').click(function () {
      $(this).fadeOut();
      $('body').removeClass('ohi');
    });
    $('.modal-form__block').click(function (e) {
      e.stopPropagation();  
    });

  }

  popup('.link2', '.modal-overlay_2', '.modal-close_2');
  popup('.link', '.modal-overlay_1', '.modal-close_1');


  $('a[href*=\\#]:not([href=\\#])').click(function () {
    elementClick = $(this).attr("href");
    destination = $(elementClick).offset().top;
    $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination - 85}, 1100);
    return false;
  });


  $(window).scroll(function(){
    var wt = $(window).scrollTop();  
    var wh = $(window).height();    
    if (wt > 600) {
      $('.serv-arr-up').show(400);
    }
    else {
     $('.serv-arr-up').hide();
   }
 });

  if($('select').length) {
    $('select').select2({
      minimumResultsForSearch: -1
    });
  }

}); //ready

