$(function(){



 if ($('.statistic__item-num').length > 0) { 
    
    $(".statistic__item-num").each(function(){
      $(this).prop("Counter", 0).animate({
        Counter:$(this).text()
      },{
        duration: 2000,
        easing:"swing",
        step:function(now){
          $(this).text(Math.ceil(now));
        }
      });
    });
  }

  $(".header__menu-btn").on("click", function () {
    $(".header__menu-btn").toggleClass("active");
    $(".header__list").toggleClass("active");
    $(".header__btn").toggleClass("active");
    $("body").toggleClass("lock");
    $(".header__inner").toggleClass("open");
  });

  $(".header__list a").on("click", function () {
    $(".header__list a").removeClass("visited");
    $(this).addClass("visited");
  });
  
  $(".header__item-child a").on("click", function () {
    $(this).toggleClass('active');
    $(this).next().toggleClass('sub-menu--active');
  });
  
  $("#back-to-top").bind('click', function(e){
    e.preventDefault();
    $('body,html').animate({scrollTop: 0}, 400);    
  });

  $(".form").validate({
    errorElement: "span",
    rules:{
      full_name: {
        required: true,
        minlength: 3
      },
      email: {
        required: true,
        email: true
      },
      phone: {
        required: true,
        minlength: 10
      },
      company: {
        required: true,
        minlength: 3
      },
    },
    messages:{
      full_name: {
        required: 'Enter the full name'
      },
      email: {
        required: ' The email field is required'
      },
      phone: {
        required: ' The phone field is required'
      },
      company: {
        required: ' The company field is required'
      },
      state: {
        required: 'Select State/Province'
      },
    }
  });

  if($(window).width() <= 767) {
    $(".table-prev").click(function () { 
      var leftPos = $('.table-wrapper').scrollLeft();
      $(".table-wrapper").animate({scrollLeft: leftPos - 2000}, 800);
    });

    $(".table-next").click(function () { 
      var leftPos = $('.table-wrapper').scrollLeft();
      $(".table-wrapper").animate({scrollLeft: leftPos + 2000}, 800);
    });
  }

  $(".accordeon dd").hide().prev().click(function () {
    $(this).parents(".accordeon").find("dd").not(this).slideUp().prev().removeClass("active");
    $(this).next().not(":visible").slideDown().prev().addClass("active");
    $("dl").removeClass("open");
    $(this).parent().toggleClass("open");
  });


  if ($(".slider").length) {
    $('.slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      speed: 700,
      arrows: true,
      dots: false,
      autoplay: true,
      autoplaySpeed: 4000,
    });
  }

  new WOW().init();

  if ($('.slick-slider').length > 0){
    $(".slick-slider").slick("refresh"); $(".slick-slider").slick("setPosition");
  }

});

$(document).ready(function(){
  if ($('.header').length > 0){
    const navOffset = $(".header").offset().top + 200;
    $(window).scroll(function() {
    
      const scrolled = $(this).scrollTop();
    
      if (scrolled > navOffset){
        $('header').addClass("sticky animate__animated animate__fadeInDown");
        $('header').next().addClass("margin-top");
      } else if (scrolled < navOffset){
        $('header').removeClass("sticky animate__animated animate__fadeInDown");
        $('header').next().removeClass("margin-top");
      }
    });
  }
  if ($('.map').length > 0){
  if ($('.check').length > 0) { 
    let input = document.querySelector('#payerSearch');
    let input_data = '';
    input.oninput = handleSearc;
    const inputInc = document.querySelector('.payer-search__input-wrapper i');
    const payer_list = document.querySelectorAll('#payer_list li');
    inputInc.addEventListener('click', function (e) {
      input.value = '';
      for (let i = 0; i < payer_list.length; i++) {
        payer_list[i].style.display = ''
      }
      inputInc.classList.remove('text')
    });

    function handleSearc(e) {
      input_data = e.target.value.toUpperCase();
      e.target.value.toUpperCase().length > 0 ? inputInc.classList.add('text') : inputInc
        .classList.remove('text');
      for (let i = 0; i < payer_list.length; i++) {
        if (payer_list[i].innerHTML.toUpperCase().indexOf(input_data) > -1) {
          payer_list[i].style.display = ''
        } else {
          payer_list[i].style.display = 'none'
        }
      }
    }
  }
 
  var map = AmCharts.makeChart("mapdiv", {
    type: "map",
    theme: "light",
    panEventsEnabled: !0,
    backgroundColor: "#E8E8E8",
    backgroundAlpha: 1,
    zoomControl: {
      zoomControlEnabled: !0,
    },
    dataProvider: {
      map: "usaHigh",
      getAreasFromMap: !0,
      areas: [],
    },
    areasSettings: {
      autoZoom: !0,
      color: "#FFFFFF",
      colorSolid: "#339900",
      selectedColor: "#339900",
      outlineColor: "#1D9125",
      rollOverColor: "#339900",
      rollOverOutlineColor: "#666666",
    },
  })
  document.querySelector('#elastic').oninput = function () {
    let val = this.value.trim().toLowerCase();
    let elasticItems = document.querySelectorAll('.elastic li');
    if (val != '') {
      elasticItems.forEach((elem) => {
        let searchValPos = elem.innerText.toLowerCase().search(val);
        if (searchValPos == -1) {
          elem.classList.add('hide');
          elem.querySelector('a').innerHTML = elem.innerText
        } else {
          elem.classList.remove('hide');
          let str = elem.innerText;
          elem.querySelector('a').innerHTML = insertMark(str, searchValPos, val.length)
        }
      })
    } else {
      elasticItems.forEach((elem) => {
        elem.classList.add('hide');
        elem.querySelector('a').innerHTML = elem.innerText
      })
    }
  }

  function insertMark(string, pos, len) {
    return string.slice(0, pos) + '<mark>' + string.slice(pos, pos + len) + '</mark>' + string.slice(
      pos + len)
  }

  window.onload = function () {
    let stateContainer = Array.from(document.getElementsByTagName('svg'));
    let goStateBtn = document.getElementById('goStateBtn');

    function getStateUrl(stateName) {
      const stateList = [{
        url: 'https://claimgenix.com/medicaid-billing-software-for-idaho/',
        name: 'Idaho'
      }, {
        url: 'https://claimgenix.com/medicaid-billing-software-for-iowa/',
        name: 'Iowa'
      }, {
        url: 'https://claimgenix.com/medicaid-billing-software-for-alabama/',
        name: 'Alabama'
      }, {
        url: 'https://claimgenix.com/alaska-medicaid-billing-software/',
        name: 'Alaska'
      }, {
        url: 'https://claimgenix.com/medicaid-billing-software-for-arizona/',
        name: 'Arizona'
      }, {
        url: 'https://claimgenix.com/medicaid-billing-software-for-arkansas/',
        name: 'Arkansas'
      }, {
        url: 'https://claimgenix.com/medicaid-billing-software-for-wyoming/',
        name: 'Wyoming'
      }, {
        url: 'https://claimgenix.com/medicaid-billing-software-for-washington/',
        name: 'Washington'
      }, {
        url: 'https://claimgenix.com/medicaid-billing-software-for-vermont/',
        name: 'Vermont'
      }, {
        url: 'https://claimgenix.com/medicaid-billing-software-for-virginia/',
        name: 'Virginia'
      }, {
        url: 'https://claimgenix.com/medicaid-billing-software-for-wisconsin/',
        name: 'Wisconsin'
      }, {
        url: 'https://claimgenix.com/hawaii-medicaid-billing-software/',
        name: 'Hawai'
      }, {
        url: 'https://claimgenix.com/medicaid-billing-software-for-delaware/',
        name: 'Delaware'
      }, {
        url: 'https://claimgenix.com/medicaid-billing-software-for-georgia/',
        name: 'Georgia'
      }, {
        url: 'https://claimgenix.com/medicaid-billing-software-for-west-virginia/',
        name: 'West Virginia'
      }, {
        url: 'https://claimgenix.com/medicaid-billing-software-for-illinois/',
        name: 'Illinois'
      }, {
        url: 'https://claimgenix.com/medicaid-billing-software-for-indiana',
        name: 'Indiana'
      }, {
        url: 'https://claimgenix.com/medicaid-billing-software-for-california/',
        name: 'California'
      }, {
        url: 'https://claimgenix.com/kansas-medicaid-billing-software/',
        name: 'Kansas'
      }, {
        url: 'https://claimgenix.com/medicaid-billing-software-for-kentucky',
        name: 'Kentucky'
      }, {
        url: 'https://claimgenix.com/medicaid-billing-software-for-colorado/',
        name: 'Colorado'
      }, {
        url: 'https://claimgenix.com/medicaid-billing-software-for-connecticut/',
        name: 'Connecticut'
      }, {
        url: 'https://claimgenix.com/medicaid-billing-software-for-louisiana/',
        name: 'Louisiana'
      }, {
        url: 'https://claimgenix.com/massachusetts-medicaid-billing-software/',
        name: 'Massachusetts'
      }, {
        url: 'https://claimgenix.com/medicaid-billing-software-for-minnesota/',
        name: 'Minnesota'
      }, {
        url: 'https://claimgenix.com/mississippi-medicaid-billing-software/',
        name: 'Mississippi'
      }, {
        url: 'https://claimgenix.com/missouri-medicaid-billing-software/',
        name: 'Missouri'
      }, {
        url: 'https://claimgenix.com/medicaid-billing-software-for-michigan/',
        name: 'Michigan'
      }, {
        url: 'https://claimgenix.com/montana-medicaid-billing-software/',
        name: 'Montana'
      }, {
        url: 'https://claimgenix.com/medicaid-billing-software-for-maine/',
        name: 'Maine'
      }, {
        url: 'https://claimgenix.com/medicaid-billing-software-for-maryland/',
        name: 'Maryland'
      }, {
        url: 'https://claimgenix.com/medicaid-billing-software-for-nebraska',
        name: 'Nebraska'
      }, {
        url: 'https://claimgenix.com/medicaid-billing-software-for-nevada',
        name: 'Nevada'
      }, {
        url: 'https://claimgenix.com/new-hampshire-medicaid-billing-software/',
        name: 'New Hampshire'
      }, {
        url: 'https://claimgenix.com/medicaid-billing-software-for-new-jersey',
        name: 'New Jersey'
      }, {
        url: 'https://claimgenix.com/ny-medicaid-billing-software',
        name: 'New York'
      }, {
        url: 'https://claimgenix.com/new-mexico-medicaid-billing-software/',
        name: 'New Mexico'
      }, {
        url: 'https://claimgenix.com/medicaid-billing-software-for-ohio',
        name: 'Ohio'
      }, {
        url: 'https://claimgenix.com/medicaid-billing-software-for-oklahoma/',
        name: 'Oklahoma'
      }, {
        url: 'https://claimgenix.com/medicaid-billing-software-for-oregon/',
        name: 'Oregon'
      }, {
        url: 'https://claimgenix.com/medicaid-billing-software-for-pennsylvania/',
        name: 'Pennsylvania'
      }, {
        url: 'https://claimgenix.com/medicaid-billing-software-for-rhode-island/',
        name: 'Rhode Island'
      }, {
        url: 'https://claimgenix.com/north-carolina-medicaid-billing-software/',
        name: 'North Carolina'
      }, {
        url: 'https://claimgenix.com/north-dakota-medicaid-billing-software/',
        name: 'North Dakota'
      }, {
        url: 'https://claimgenix.com/tennessee-medicaid-billing-software/',
        name: 'Tennessee'
      }, {
        url: 'https://claimgenix.com/medicaid-billing-software-for-texas',
        name: 'Texas'
      }, {
        url: 'https://claimgenix.com/medicaid-billing-software-for-florida/',
        name: 'Florida'
      }, {
        url: 'https://claimgenix.com/medicaid-billing-software-for-south-dakota/',
        name: 'South Dakota'
      }, {
        url: 'https://claimgenix.com/medicaid-billing-software-for-south-carolina/',
        name: 'South Carolina'
      }, {
        url: 'https://claimgenix.com/medicaid-billing-software-for-utah/',
        name: 'Utah'
      }]
      stateList.forEach(e => {
        if (e.name.replace(/\s/g, '') === stateName) {
          goStateBtn.style.display = 'block';
          goStateBtn.innerText = 'go to ' + e.name;
          goStateBtn.setAttribute('href', e.url)
        }
      })
    }
    stateContainer.forEach(e => {
      e.addEventListener("mousedown", function (e) {
        console.log('m', e.target)
        if (e.target.getAttribute('aria-label')) {
          getStateUrl(e.target.getAttribute('aria-label').replace(/\s/g, ''))
        }
      });
      e.addEventListener('pointerdown', function (e) {
        console.log('p', e.target)
        if (e.target.getAttribute('aria-label')) {
          getStateUrl(e.target.getAttribute('aria-label').replace(/\s/g, ''))
        }
      })
    })
  }
}
if ($('.calculator').length > 0){
  var slider = document.getElementById('range');

    noUiSlider.create(slider, {
        start: 0,
        tooltips: true,
        connect: [true, false],
        step: 1,
        range: {
            min: 0,
            max: 50000
        },
        format: {
          to: function (value) {
              return parseInt(value);
          },
          from: function (value) {
              return parseInt(value);
          }
      }
        
    });
  }
});

