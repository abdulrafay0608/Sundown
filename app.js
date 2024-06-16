const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

// var imghover = document.querySelector("#hover-img");
// const listItems = document.querySelectorAll(".list-items");

// listItems.forEach((e, i) => {
//   e.addEventListener("mouseenter", () => {
//     const image = e.getAttribute("data-image");
//     imghover.style.backgroundImage = `url(${image})`;
//     imghover.style.display = "block";
//   });
// });

// listItems.forEach((e, i) => {
//   e.addEventListener("mouseleave", () => {
//     imghover.style.display = "none";
//   });
// });

function imageHoverAnimation() {
  var imghover = document.querySelector("#hover-img");
  const listItems = document.querySelectorAll(".list-items");

  function handleWindowResize() {
    if (window.innerWidth <= 1010) {
      imghover.style.display = "none";
    }
  }

  listItems.forEach((e, i) => {
    e.addEventListener("mouseenter", () => {
      const image = e.getAttribute("data-image");
      imghover.style.backgroundImage = `url(${image})`;
      if (window.innerWidth > 1010) {
        imghover.style.display = "block";
      }
    });
  });

  listItems.forEach((e, i) => {
    e.addEventListener("mouseleave", () => {
      imghover.style.display = "none";
    });
  });

  window.addEventListener("resize", handleWindowResize);

  handleWindowResize();
}

function swiperAnimtion() {
  var swiper = new Swiper(".mySwiper", {
    watchSlidesProgress: true,
    slidesPerView: 4,
    breakpoints: {
      320: {
        slidesPerView: 1.2,
      },
      768: {
        slidesPerView: 2.5,
      },
      1024: {
        slidesPerView: 3.5,
      },
    },
  });
}

function NavbarAnimtion() {
  const humburger = document.querySelector(".nav-humburger");
  const transparentBgB = document.querySelector(".transparent-bg-b");
  const logoImg = document.querySelector(".logo img");
  const respMenu = document.querySelector(".resp-menu");

  let isTrue = 0;

  humburger.addEventListener("click", () => {
    if (isTrue == 0) {
      transparentBgB.style.top = 0;
      respMenu.style.top = 0;
      logoImg.style.opacity = 0;
      isTrue = 1;
    } else {
      transparentBgB.style.top = "-100%";
      respMenu.style.top = "-300%";
      logoImg.style.opacity = 100;
      isTrue = 0;
    }
  });
}

function LoaderAnimation() {
  const loader = document.querySelector(".loader");

  setTimeout(() => {
    loader.style.top = "-100%";
  }, 3500);
}

imageHoverAnimation();
swiperAnimtion();
NavbarAnimtion();
LoaderAnimation();
