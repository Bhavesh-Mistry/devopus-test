$(document).ready(function () {

  /*products slider */
  $(".ps-items-bx").slick({
    dots: false,
    infinite: true,
    speed: 200,
    speed: 2000,
    autoplay: true,
    slidesToShow: 4.3,
    slidesToScroll: 2,
    centerMode: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2.3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1.3,
          slidesToScroll: 1,
        },
      },
    ],
  });

  /*testimonial slider */
  $(".ts-items-bx").slick({
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 7.3,
    slidesToScroll: 3,
    centerMode: false,
    prevArrow: $(".prev"),
    nextArrow: $(".next"),
    arrows: true,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 5.3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4.3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });

  /* back to top */
  $("#toTop").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 1200);
  });
});

/*sticky header*/
$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  if (scroll >= 50) {
    $("header.navbar").addClass("darkHeader");
    $(".btnBacktotop").addClass("active");
  } else {
    $("header.navbar").removeClass("darkHeader");
    $(".btnBacktotop").removeClass("active");
  }
});


