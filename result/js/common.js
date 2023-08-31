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





  let inputFile = document.querySelector('#fileMulti');
  let imgWrapper = document.querySelector('.file__total > span');


  function download2(input) {
    let file = input.files[0];

    let reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = ev => {
      const src = ev.target.result
      imgWrapper.innerHTML = `${file.name}`
    }
  }


  if ($('#fileMulti').length) {
    inputFile.addEventListener("change", function () {
      download2(this);
    });
  }


///


  let inputFile2 = document.querySelector('#fileMulti2');
  let imgWrapper2 = document.querySelector('.filetext');


  function download3(input) {
    let file = input.files[0];

    let reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = ev => {
      const src = ev.target.result
      imgWrapper2.innerHTML = `${file.name}`
    }
  }


  if ($('#fileMulti2').length) {
    inputFile2.addEventListener("change", function () {
      download3(this);
    });
  }


///////////////////

  let inputFile3 = document.querySelector('#fileMulti3');
  let imgWrapper3 = document.querySelector('.user-photo');


  function download4(input) {
    let file = input.files[0];

    let reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = ev => {
      const src = ev.target.result      
      imgWrapper3.innerHTML = `<img src="${src}" alt="${file.name}" />`
      /*imgWrapper3.innerHTML = `${file.name}`*/
    }
  }


  if ($('#fileMulti3').length) {    
    inputFile3.addEventListener("change", function () {
      download4(this);
      console.log(this);
    });
  }


///////////////////




  ///

  $('.edit__thumbs > div').click(function () {
    $(this).remove();
  });

  $('.thumbs__del').click(function () {
    $(this).remove();
    $('.edit__thumbs > div').remove();
  });


  $('.pline__del').click(function () {
    $(this).closest('.pline__row').remove();  
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
      breakpoint: 1201,
      settings: {
        slidesToShow: 4
      }
    },   
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3
      }
    },   
    {
      breakpoint: 641,
      settings: {
        slidesToShow: 2
      }
    },   
    {
      breakpoint: 376,
      settings: {
        slidesToShow: 1
      }
    }
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
      breakpoint: 1401,
      settings: {
        slidesToShow: 3
      }
    },   
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1
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
      breakpoint: 1201,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1
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
      breakpoint: 1201,
      settings: {
        slidesToShow: 3
      }
    },   
    {
      breakpoint: 641,
      settings: {
        slidesToShow: 2
      }
    },  
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 1
      }
    },
    ]
  });

  $('.prodcompany__list').slick({
    infinite: false,    
    speed: 600,
    slidesToScroll: 1,
    autoplay: false,    
    slidesToShow: 5,
    cssEase: 'linear',  
    autoplaySpeed: 0,  
    arrows: true,
    dots: false,
    pauseOnHover: true,  
    responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4
      }
    },   
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3
      }
    }
    ,   
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    },    
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 1
      }
    }
    ]
  });

  $('.brands__row').slick({
    infinite: false,    
    speed: 600,
    slidesToScroll: 1,
    autoplay: false,    
    slidesToShow: 8,
    cssEase: 'linear',  
    autoplaySpeed: 0,  
    arrows: false,
    dots: false,
    pauseOnHover: true,  
    variableWidth: true,
    responsive: [
    {
      breakpoint: 1651,
      settings: {
        slidesToShow: 6
      }
    },   
    {
      breakpoint: 1401,
      settings: {
        infinite: true,
        slidesToShow: 4,
        dots: true,
        
      }
    }, 
    ]
  });

  if( $(window).width() < 641 ) {
    $('.hero form input[type="text"]').attr('placeholder', 'Найти...');
  }



  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',
    
  });

  $('.slider-nav').slick({
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    arrows: true,
    centerMode: false,
    vertical: true,
    focusOnSelect: true,
    responsive: [
    {
      breakpoint: 1401,
      settings: {        
        slidesToShow: 4
      }
    },
    {
      breakpoint: 1200,
      settings: {        
        slidesToShow: 3
      }
    },
    {
      breakpoint: 768,
      settings: {        
        vertical: false,
        arrows: false,
      }
    },
    {
      breakpoint: 768,
      settings: {        
        vertical: false,
        arrows: false,
        slidesToShow: 4
      }
    }
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
  tabs('.modal__tabs');



  //$('.accordion-content').first().slideDown().toggleClass('open-content');
  $('.accordion-header').click(function () {
    $(this).toggleClass('active-header');
    $(this).prev().slideToggle().toggleClass('open-content');

    if( ! $(this).hasClass('active-header') ) {
      $(this).text($(this).attr('data-show'));
    }
    else {
     $(this).text($(this).attr('data-hide')); 
   }
 });



  $('.message__hide').click(function () {
    const main = $(this).closest('.message');
    const content = main.find('.message__content');
    
    if( ! main.hasClass('hide') ) {
      $(this).text($(this).attr('data-show'));
      main.addClass('hide');
      content.slideUp();
    }
    else {
     $(this).text($(this).attr('data-hide')); 
     main.removeClass('hide');
     content.slideDown();
   }
 });


  $('.foodprods__show').click(function (e) {
    e.preventDefault();
    const list = $(this).prev();

    list.toggleClass('open');

    if( list.hasClass('open') ) {
      $(this).text($(this).attr('data-hide'));
      list.addClass('open');      
    }
    else {
     $(this).text($(this).attr('data-show')); 
     list.removeClass('open');     
   }
 });



  $.fn.HvrSlider = function () {
    return this.each(function () {
      var el = $(this);
      if (el.find('img').length > 1) {
        var hvr = $('<div>', {
          class: 'hvr',
          append: [
            $('<div>', {
              class: 'hvr__images',
              append: $('<div>', {
                class: 'hvr__sectors',
              }),
            }),
            $('<div>', {
              class: 'hvr__dots',
            }),
            ],
          insertAfter: el,
          prepend: el,
        });
        var hvrImages = $('.hvr__images', hvr);
        var hvrImage = $('img', hvr);
        var hvrSectors = $('.hvr__sectors', hvr);
        var hvrDots = $('.hvr__dots', hvr);
        el.prependTo(hvrImages);
        hvrImage.each(function () {
          hvrSectors.prepend('<div class="hvr__sector"></div>');
          hvrDots.append('<div class="hvr__dot"></div>');
        });
        $('.hvr__dot:first', hvrDots).addClass('hvr__dot--active');
        var setActiveEl = function (el) {
          hvrImage.hide().eq(el.index()).show();
          $('.hvr__dot', hvrDots).removeClass('hvr__dot--active').eq(el.index()).addClass('hvr__dot--active');
        };
        $('.hvr__sector', hvrSectors).hover(function () {
          setActiveEl($(this));
        });
        hvrSectors.on('touchmove', function (e) {
          var position = e.originalEvent.changedTouches[0];
          var target = document.elementFromPoint(position.clientX, position.clientY);
          if ($(target).is('.hvr__sector')) {
            setActiveEl($(target));
          }
        });
      }
    });
  };

  $('.images').HvrSlider();



  $(".regions__item ul").mCustomScrollbar({
    axis: "y",
    theme: "dark-3",
    mouseWheel: 1,
    scrollInertia: '230'
  });    


  /*if( $(window).width() < 1200 ) {    
    $(".infos__table-w").mCustomScrollbar({
      axis: "x",
      theme: "dark-3",
      mouseWheel: 1,
      scrollInertia: '130'
    });      
  }


  $(window).resize(function() {
    if( $(window).width() < 1200 ) {      
      $(".infos__table-w").mCustomScrollbar({
        axis: "x",
        theme: "dark-3",
        mouseWheel: 1,
        scrollInertia: '130'
      });      
    }
  });*/
  



  $('.burger').click(function () {
    $(this).toggleClass('burger-open');
    $('body').toggleClass("body-open");
    $('.header__col').toggleClass("open");    
  });




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


  $('[data-fancybox="gallery"]').fancybox({
    arrows: true,
    infobar: false,
    smallBtn: false,
    toolbar: true,
    iframe : {
      css : {
        width : '950px'
      }
    },    
    slideClass: "myClass",
    baseClass: "myclass"
  });


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

  popup('#modal1', '.modal-overlay_1', '.modal-close_1');
  popup('#modal2', '.modal-overlay_2', '.modal-close_2');
  popup('#modal3', '.modal-overlay_3', '.modal-close_3');
  popup('#modal4', '.modal-overlay_4', '.modal-close_4');
  popup('#modal5', '.modal-overlay_5', '.modal-close_5');
  popup('#modal6', '.modal-overlay_6', '.modal-close_6');
  popup('#modal7', '.modal-overlay_7', '.modal-close_7');


  $('a[href*=\\#]:not([href=\\#])').click(function () {
    elementClick = $(this).attr("href");
    destination = $(elementClick).offset().top;
    $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination - 0}, 1100);
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


//window.onload = () => {
//  sessionStorage.text = "";
//  sessionStorage.visible = false
//}

//We will use the text and visible variables for demonstration purposes as session storage does not work with code snippets. The star can really be anything you want

const star = "*";
let text = "";
let isVisible = false;

function toggle(id) {
  const button = document.getElementById(id);
  const input = document.getElementById("password-input");
  
  switch (isVisible) {
  case false:
    button.innerText = "Hide Password";
    input.value = text;
    isVisible = true;
    break;
  case true:
    button.innerText = "Show Password";
    input.value = star.repeat(text.length);
    isVisible = false;
  }
  
  console.log(`Text When Button Clicked: ${text}`);
}

function formatInput(id) {


  const elem = document.getElementById(id);
  const keyPressed = event.key;

  
  if (keyPressed == "Backspace") {
    text = text.substring(0, text.length - 1);
    elem.value = elem.value.substring(0, elem.value.length);
    console.log(`Text at Backspace: ${text}`)
    return;
  }
  
  if (keyPressed.length == 1) {
    text = text + keyPressed;
    elem.value = text;
  }
  
  
  
  switch (isVisible) {
  case false:
    elem.value = star.repeat(text.length - 1)
    console.log(`Text When Password = Hidden: ${text}`)
    break;
  case true:
    elem.value = text;      
    elem.value = elem.value.substring(0, text.length - 1)
      /*console.log(`Text When Password = Visible: ${text}`)*/
  }
}