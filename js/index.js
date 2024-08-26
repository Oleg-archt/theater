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
      '<button class="prev-btn"><img class="slider-arrows slider-arrows__left" src="./img/arrow-left.svg" alt="" />ПРЕД</button>',

    nextArrow:
      '<button class="next-btn"><img  class="slider-arrows slider-arrows__right"  src="./img/arrow-right.svg" alt="" />СЛЕД</button>',
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

  // // Get the modal and image elements
  // var modal = document.getElementById("imageModal");
  // var modalImg = document.getElementById("modalImage");
  // var closeBtn = document.getElementsByClassName("close")[0];

  // // Add click event to images
  // document.querySelectorAll(".slider-image").forEach(function (img) {
  //   img.addEventListener("click", function () {
  //     modal.style.display = "block";
  //     modalImg.src = this.src;
  //     modalImg.classList.add("zoom-in"); // Apply zoom-in effect
  //   });
  // });

  // // Close the modal and reset zoom
  // closeBtn.onclick = function () {
  //   modal.style.display = "none";
  //   modalImg.classList.remove("zoom-in"); // Remove zoom-in effect
  //   modalImg.classList.add("zoom-out"); // Apply zoom-out effect
  //   setTimeout(() => {
  //     modalImg.classList.remove("zoom-out"); // Remove zoom-out effect after transition
  //   }, 300);
  // };

  // // Close the modal when clicking outside of the image
  // window.onclick = function (event) {
  //   if (event.target === modal) {
  //     modal.style.display = "none";
  //     modalImg.classList.remove("zoom-in"); // Remove zoom-in effect
  //     modalImg.classList.add("zoom-out"); // Apply zoom-out effect
  //     setTimeout(() => {
  //       modalImg.classList.remove("zoom-out"); // Remove zoom-out effect after transition
  //     }, 300);
  //   }
  // };

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
        breakpoint: 768,
        settings: { slidesToShow: 0.9, centerMode: false },
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
