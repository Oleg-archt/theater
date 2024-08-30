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

  ///////////////////////////////////////////////////////////////////////////////////////////

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

    prevArrow:
      '<img class="slider-arrows slider-arrows__left" src="./img/arrow-left.svg" alt="" />',
    nextArrow:
      '<img  class="slider-arrows slider-arrows__right"  src="./img/arrow-right.svg" alt="" />',
  });

  ////////////////////////////////////////////////////////////////////////////////////
  $(".slick-carousel .slide img").on("click", function () {
    $(this).toggleClass("zoomed");
  });

  // // Close zoom if clicking outside the zoomed image
  // $(document).on("click", function () {
  //   if (zoomed) {
  //     zoomed.removeClass("zoomed");
  //     zoomed = null;
  //   }
  // });

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

  // $(document).ready(function () {
  //   $(".slider__slider img").on("click", function () {
  //     $(this).toggleClass("zoomed");
  //   });
  // });

  ////////////////////////////////////////////////////////////////////////

  // document.querySelectorAll(".slider__slider img").forEach((img) => {
  //   img.addEventListener("click", function () {
  //     const isZoomed = this.classList.contains("zoomed");

  //     document
  //       .querySelectorAll(".slider__slider img")
  //       .forEach((img) => img.classList.remove("zoomed"));
  //     document
  //       .querySelectorAll(".slider__slider")
  //       .forEach((slide) => slide.classList.remove("zoomed-slide"));

  //     if (!isZoomed) {
  //       this.classList.add("zoomed");
  //       this.closest(".slider__slider").classList.add("zoomed-slide");
  //     }
  //   });
  // });

  // document.querySelectorAll(".slider__slider img").forEach((img) => {
  //   img.addEventListener("click", function (event) {
  //     event.stopPropagation();
  //     toggleZoom(this);
  //   });
  // });

  // document.addEventListener("click", function () {
  //   document
  //     .querySelectorAll(".slider__slider img")
  //     .forEach((img) => img.classList.remove("zoomed"));
  //   document
  //     .querySelectorAll(".slider__slider")
  //     .forEach((slide) => slide.classList.remove("zoomed-slide"));
  // });

  ////////////////////////////////////////////////////////////////////

  // const $slider = $(".slider__inner");

  // $(".loop__btn").on("click", function (e) {
  //   e.stopPropagation();
  //   const $img = $(this).siblings("img");
  //   const $phrases = $(this)
  //     .closest(".slider__slider")
  //     .find(".slider__slider-date, .slider__slider-data");

  //   $(".slider__slider img").removeClass("zoomed");
  //   $(".slider__slider-date, .slider__slider-data").show();

  //   $img.addClass("zoomed");
  //   $phrases.hide();
  // });

  // $(".slider__slider img").on("click", function () {
  //   const $img = $(this);
  //   const $phrases = $img
  //     .closest(".slider__slider")
  //     .find(".slider__slider-date, .slider__slider-data");

  //   if ($img.hasClass("zoomed")) {
  //     $img.removeClass("zoomed");
  //     $phrases.show();
  //   }
  // });

  // $(document).on("click", function (event) {
  //   if (!$(event.target).closest(".slider__slider img, .loop__btn").length) {
  //     $(".slider__slider img").removeClass("zoomed");
  //     $(".slider__slider-date, .slider__slider-data").show(); // Показываем все фразы
  //   }
  // });

  ////////////////////////////////////////////////////////////////////////////////////////////////

  $(document).ready(function () {
    const $slider = $(".slider__inner");

    // Обработчик клика на кнопке зума
    $(".loop__btn").on("click", function (e) {
      e.stopPropagation();
      const $img = $(this).siblings("img");
      const $phrases = $(this)
        .closest(".slider__slider")
        .find(".slider__slider-date, .slider__slider-data");

      $(".slider__slider img").removeClass("zoomed");
      $(".slider__slider-date, .slider__slider-data").show();

      $img.addClass("zoomed");
      $phrases.hide();
    });

    // Обработчик клика на изображение
    $(".slider__slider img").on("click", function () {
      const $img = $(this);
      const $phrases = $img
        .closest(".slider__slider")
        .find(".slider__slider-date, .slider__slider-data");

      if ($img.hasClass("zoomed")) {
        $img.removeClass("zoomed");
        $phrases.show();
      }
    });

    // Обработка клика вне изображения
    $(document).on("click", function (event) {
      if (!$(event.target).closest(".slider__slider img, .loop__btn").length) {
        $(".slider__slider img").removeClass("zoomed");
        $(".slider__slider-date, .slider__slider-data").show(); // Показываем все фразы
      }
    });

    // Определение первой и последней видимой картинки
    function updateVisibleSlides() {
      const slick = $slider.slick("getSlick");
      const totalSlides = slick.slideCount;
      const visibleSlides = slick.$slides.filter(".slick-slide.slick-active");
      const firstVisibleIndex = $(visibleSlides[0]).index();
      const lastVisibleIndex = $(
        visibleSlides[visibleSlides.length - 1]
      ).index();

      // Удаление классов предыдущих видимых слайдов
      slick.$slides.removeClass("first-slide last-slide");

      // Добавление классов для первой и последней видимой картинки
      slick.$slides.eq(firstVisibleIndex).addClass("first-slide");
      slick.$slides.eq(lastVisibleIndex).addClass("last-slide");
    }

    // Обновление видимых слайдов при изменении слайда
    $slider.on("afterChange", function () {
      updateVisibleSlides();
    });

    // Изначальная установка видимых слайдов
    updateVisibleSlides();
  });

  ////////////////////////////////////////////////////////////////////////////////////////////////

  // // Функция для изменения состояния зума
  // function toggleZoom($img) {
  //   const $sliderItem = $img.closest(".slider__slider");
  //   if ($img.hasClass("zoomed")) {
  //     $img.removeClass("zoomed");
  //     $sliderItem
  //       .find(".slider__slider-date, .slider__slider-data")
  //       .css("opacity", 1); // Показываем текст
  //   } else {
  //     $(".slider__slider img").removeClass("zoomed"); // Удаляем зум со всех изображений
  //     $img.addClass("zoomed");
  //     $(".slider__slider-date, .slider__slider-data").css("opacity", 1); // Показываем текст всех элементов
  //     $sliderItem
  //       .find(".slider__slider-date, .slider__slider-data")
  //       .css("opacity", 0); // Прячем текст текущего элемента
  //   }
  // }

  // // Обработчик клика на кнопке луп
  // $(".loop__btn").on("click", function (e) {
  //   e.stopPropagation();
  //   const $img = $(this).siblings("img");
  //   toggleZoom($img);
  // });

  // // Обработчик клика на изображение
  // $(".slider__slider img").on("click", function () {
  //   toggleZoom($(this));
  // });

  // // Обработчик клика вне изображения и кнопки
  // $(document).on("click", function (event) {
  //   if (!$(event.target).closest(".slider__slider img, .loop__btn").length) {
  //     $(".slider__slider img").removeClass("zoomed");
  //     $(".slider__slider-date, .slider__slider-data").css("opacity", 1); // Показываем текст всех элементов
  //   }
  // });

  ////////////// второй рабочий билд /////////////////////////////////////////////////////////////

  // const $slider = $(".slider__inner");

  // let firstVisibleIndex = 0; // Индекс первого видимого слайда
  // let lastVisibleIndex = 3; // Индекс последнего видимого слайда (изначально установим для 4-х слайдов)

  // // Обновляем индексы видимых слайдов при изменении слайда
  // $slider.on("beforeChange", function (event, slick, currentSlide, nextSlide) {
  //   firstVisibleIndex = nextSlide;
  //   lastVisibleIndex = nextSlide + slick.options.slidesToShow - 1;
  // });

  // // Функция для зума и смещения
  // function zoomAndShift($img, index) {
  //   if (index === firstVisibleIndex) {
  //     $img.css({
  //       transform: "translate(-500px, -50%) scale(1.2)", // Смещение для первого слайда
  //     });
  //   } else if (index === lastVisibleIndex) {
  //     $img.css({
  //       transform: "translate(-500px, -50%) scale(1.2)", // Смещение для последнего слайда
  //     });
  //   } else {
  //     $img.css({
  //       transform: "translate(-50%, -50%) scale(1.2)", // Обычный зум для остальных слайдов
  //     });
  //   }
  // }

  // // Обработчик клика на кнопку зума
  // $(".loop__btn").on("click", function (e) {
  //   e.stopPropagation();
  //   const $img = $(this).siblings("img");
  //   const $phrases = $(this)
  //     .closest(".slider__slider")
  //     .find(".slider__slider-date, .slider__slider-data");
  //   const index = $(this).closest(".slider__slider").index();

  //   $(".slider__slider img").removeClass("zoomed").css("transform", "");
  //   $(".slider__slider-date, .slider__slider-data").show();

  //   $phrases.hide();

  //   // Применяем зум и смещение
  //   zoomAndShift($img, index);
  //   $img.addClass("zoomed");
  // });

  // // Обработчик клика на изображение для отмены зума
  // $(".slider__slider img").on("click", function () {
  //   const $img = $(this);
  //   const $phrases = $img
  //     .closest(".slider__slider")
  //     .find(".slider__slider-date, .slider__slider-data");

  //   if ($img.hasClass("zoomed")) {
  //     $img.removeClass("zoomed").css("transform", "");
  //     $phrases.show();
  //   }
  // });

  // // Отключение зума при клике вне изображения
  // $(document).on("click", function (event) {
  //   if (!$(event.target).closest(".slider__slider img, .loop__btn").length) {
  //     $(".slider__slider img").removeClass("zoomed").css("transform", "");
  //     $(".slider__slider-date, .slider__slider-data").show();
  //   }
  // });

  // самфй рабочий билд ////////////////////////////

  // const $slider = $(".slider__inner");

  // $(".loop__btn").on("click", function (e) {
  //   e.stopPropagation(); // Останавливаем всплытие события
  //   const $img = $(this).siblings("img"); // Находим изображение в том же контейнере
  //   $(".slider__slider img").removeClass("zoomed"); // Убираем зум с других изображений
  //   $img.addClass("zoomed"); // Добавляем зум к текущему изображению
  // });

  // // Обработчик клика на изображение
  // $(".slider__slider img").on("click", function () {
  //   const $img = $(this);
  //   if ($img.hasClass("zoomed")) {
  //     $img.removeClass("zoomed"); // Убираем зум если изображение уже увеличено
  //   }
  // });

  // // Отключение зума при клике вне изображения
  // $(document).on("click", function (event) {
  //   if (!$(event.target).closest(".slider__slider img, .loop__btn").length) {
  //     $(".slider__slider img").removeClass("zoomed");
  //   }
  // });

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // function updateVisibleSlides() {
  //   const slides = $(".slider__slider");
  //   slides.removeClass("zoomed-slide"); // Удаляем классы у всех слайдов

  //   const firstVisibleSlide = slides.first(); // Первый видимый слайд
  //   const lastVisibleSlide = slides.last(); // Последний видимый слайд

  //   if (firstVisibleSlide.length) {
  //     firstVisibleSlide.addClass("zoomed-slide");
  //   }
  //   if (lastVisibleSlide.length) {
  //     lastVisibleSlide.addClass("zoomed-slide");
  //   }
  // }

  // // Обновляем видимые слайды после изменения
  // $slider.on("afterChange", function () {
  //   updateVisibleSlides();
  // });

  // // Обработчик клика на кнопку loop__btn
  // $(".loop__btn").on("click", function () {
  //   const $img = $(this).siblings("img"); // Находим изображение в том же контейнере
  //   $(".slider__slider img").removeClass("zoomed"); // Убираем зум с других изображений
  //   $(".slider__slider-date").css("visibility", "visible"); // Показать текст перед увеличением

  //   // Переключаем класс zoomed у текущего изображения
  //   $img.toggleClass("zoomed");
  //   if ($img.hasClass("zoomed")) {
  //     $img.siblings(".slider__slider-date").css("visibility", "hidden"); // Скрыть текст при увеличении
  //   } else {
  //     $img.siblings(".slider__slider-date").css("visibility", "visible"); // Показать текст при уменьшении
  //   }
  //   updateVisibleSlides();
  // });

  // // Обработчик клика на изображение
  // $(".slider__slider img").on("click", function () {
  //   const $img = $(this);
  //   $img.toggleClass("zoomed"); // Переключаем класс zoomed у текущего изображения
  //   if ($img.hasClass("zoomed")) {
  //     $img.siblings(".slider__slider-date").css("visibility", "hidden"); // Скрыть текст при увеличении
  //   } else {
  //     $img.siblings(".slider__slider-date").css("visibility", "visible"); // Показать текст при уменьшении
  //   }
  //   updateVisibleSlides();
  // });

  // // Обновляем видимые слайды при загрузке
  // updateVisibleSlides();

  // // Отключение зума при клике вне изображения
  // $(document).on("click", function (event) {
  //   if (!$(event.target).closest(".slider__slider img").length) {
  //     $(".slider__slider img").removeClass("zoomed");
  //     $(".slider__slider-date").css("visibility", "visible"); // Показать текст при клике вне изображения
  //     updateVisibleSlides();
  //   }
  // });

  // function updateVisibleSlides() {
  //   const slides = $(".slider__slider");
  //   slides.removeClass("zoomed-slide"); // Удаляем классы у всех слайдов

  //   const firstVisibleSlide = slides.first(); // Первый видимый слайд
  //   const lastVisibleSlide = slides.last(); // Последний видимый слайд

  //   if (firstVisibleSlide.length) {
  //     firstVisibleSlide.addClass("zoomed-slide");
  //   }
  //   if (lastVisibleSlide.length) {
  //     lastVisibleSlide.addClass("zoomed-slide");
  //   }
  // }

  // // Обновляем видимые слайды после изменения
  // $slider.on("afterChange", function () {
  //   updateVisibleSlides();
  // });

  // // Обработчик клика на кнопку loop__btn
  // $(".loop__btn").on("click", function () {
  //   const $img = $(this).siblings("img"); // Находим изображение в том же контейнере
  //   $(".slider__slider img").removeClass("zoomed"); // Убираем зум с других изображений
  //   $img.toggleClass("zoomed"); // Переключаем класс zoomed у текущего изображения
  //   $(".slider__slider-date").css("visibility", "visible"); // Показать текст перед увеличением
  //   if ($img.hasClass("zoomed")) {
  //     $img.siblings(".slider__slider-date").css("visibility", "hidden"); // Скрыть текст при увеличении
  //   } else {
  //     $img.siblings(".slider__slider-date").css("visibility", "visible"); // Показать текст при уменьшении
  //   }
  //   updateVisibleSlides();
  // });

  // // Обновляем видимые слайды при загрузке
  // updateVisibleSlides();

  // // Отключение зума при клике вне изображения
  // $(document).on("click", function (event) {
  //   if (!$(event.target).closest(".slider__slider img").length) {
  //     $(".slider__slider img").removeClass("zoomed");
  //     $(".slider__slider-date").css("visibility", "visible"); // Показать текст при клике вне изображения
  //     updateVisibleSlides();
  //   }
  // });

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
