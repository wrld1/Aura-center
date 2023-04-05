document.addEventListener("DOMContentLoaded", function () {
  var main = new Splide("#main-carousel", {
    type: "fade",
    rewind: true,
    pagination: false,
    arrows: true,
  });

  var thumbnails = new Splide("#thumbnail-carousel", {
    fixedWidth: 100,
    fixedHeight: 60,
    gap: 10,
    rewind: true,
    pagination: false,
    arrows: false,
    focus: "center",
    isNavigation: true,
    breakpoints: {
      600: {
        fixedWidth: 60,
        fixedHeight: 44,
      },
    },
  });

  main.sync(thumbnails);
  main.mount();
  thumbnails.mount();
});

document.addEventListener("DOMContentLoaded", function () {
  new Splide("#image-carousel", {
    type: "loop",
    perPage: 3,
    pauseOnHover: false,
    arrows: true,
    pagination: true,
    speed: 1000,
    heightRatio: 0.5,
    gap: 0,
    easing: "ease",
    breakpoints: {
      640: {
        perPage: 1,
      },
    },
  }).mount();
});
