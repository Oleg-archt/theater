// $(function () {
//   $(".header__slider").slick({
//     Infinity: true,
//     prevArrow:
//       '<img class="slider-arrows slider-arrows__left" src="./img/arrow-left.svg" alt="" />',
//     nextArrow:
//       '<img  class="slider-arrows slider-arrows__right"  src="./img/arrow-right.svg" alt="" />',
//   });
// });

$(document).ready(function () {
  $(document).ready(function () {
    // Get the sidebar
    var sidebar = $("#sidebarPopup");

    // Get the button that opens the sidebar
    var openBtn = $("#openPopup");

    // Get the <span> element that closes the sidebar
    var closeBtn = $(".close");

    // When the user clicks the button, open the sidebar
    openBtn.on("click", function () {
      sidebar.css("left", "0"); // Slide in from the left
    });

    // When the user clicks on <span> (x), close the sidebar
    closeBtn.on("click", function () {
      sidebar.css("left", "-350px"); // Slide out to the left
    });

    // Optional: Close the sidebar if clicking outside of it
    $(window).on("click", function (event) {
      if (
        !$(event.target).closest("#sidebarPopup").length &&
        !$(event.target).is("#openPopup")
      ) {
        sidebar.css("left", "-350px");
      }
    });
  });

  $(".header__slider").slick({
    infinite: true,
    prevArrow:
      '<img class="slider-arrows slider-arrows__left" src="./img/arrow-left.svg" alt="" />',
    nextArrow:
      '<img  class="slider-arrows slider-arrows__right"  src="./img/arrow-right.svg" alt="" />',
  });

  $(".slider__inner").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          paddingRight: "50%",
          variableWidth: true,
        },
      },
      {
        breakpoint: 630,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          paddingRight: "30%",
          variableWidth: true,
        },
      },
    ],

    // autoplay: true,
    // autoplaySpeed: 1000,
    prevArrow:
      '<img class="slider-arrows slider-arrows__left" src="./img/arrow-left.svg" alt="" />',
    nextArrow:
      '<img  class="slider-arrows slider-arrows__right"  src="./img/arrow-right.svg" alt="" />',
  });

  let zoomed = null;

  // Handle click event on images
  $(".slider__inner").on("click", "img", function (event) {
    event.stopPropagation(); // Prevent the click event from propagating to the document

    if (zoomed) {
      // If an image is already zoomed, remove the zoom
      zoomed.removeClass("zoomed");
    }

    if (zoomed[0] !== this) {
      // Zoom the clicked image
      zoomed = $(this).addClass("zoomed");
    } else {
      // If the clicked image is already zoomed, remove the zoom
      zoomed = null;
      $(this).removeClass("zoomed");
    }

    $(document).on("click", function () {
      if (zoomed) {
        zoomed.removeClass("zoomed");
        zoomed = null;
      }
    });
  });

  // Close zoom if clicking outside the zoomed image
  $(document).on("click", function () {
    if (zoomed) {
      zoomed.removeClass("zoomed");
      zoomed = null;
    }
  });

  $(".sponsor__slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {},
      },
    ],

    // autoplay: true,
    autoplaySpeed: 2000,
    // prevArrow:
    //   '<img class="slider-arrows slider-arrows__left" src="./img/arrow-left.svg" alt="" />',
    // nextArrow:
    //   '<img  class="slider-arrows slider-arrows__right"  src="./img/arrow-right.svg" alt="" />',
  });

  const screenWidth = $(window).width();

  let itemsToShow;

  if (screenWidth <= 576) {
    itemsToShow = 4;
  } else if (screenWidth <= 768) {
    itemsToShow = 6;
  } else if (screenWidth <= 992) {
    itemsToShow = 6;
  } else {
    itemsToShow = 8;
  }

  $(".sponsor__slider-inner ul").each(function () {
    $(this).find("li").slice(itemsToShow).hide();
  });

  // function adjustSliderWidth() {
  //   var windowWidth = $(window).width();
  //   var sliderWidth;

  //   if (windowWidth >= 1200) {
  //     sliderWidth = windowWidth * 0.9;
  //   } else if (windowWidth >= 992) {
  //     sliderWidth = windowWidth * 0.8;
  //   } else if (windowWidth >= 768) {
  //     sliderWidth = windowWidth * 0.7;
  //   } else {
  //     sliderWidth = windowWidth * 0.8;
  //   }

  //   $(".sponsor__slider").css("width", sliderWidth + "px");
  // }

  // adjustSliderWidth();

  // $(window).resize(function () {
  //   adjustSliderWidth();
  // });

  $(".slider").on("click", function () {
    $(this).toggleClass("active");
  });

  $(".img-1").on("click", function (e) {
    const tgt = e.target;
    tgt.classList.toggle("zoom");
  });

  $(".nav__list").on("click", function () {
    $(this).toggleClass("active");
  });
});
