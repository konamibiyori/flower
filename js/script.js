/*　ーーーーーーー　ドロワーのjQueryコード　ーーーーーーーーーー*/

jQuery("#js-drawer-icon").on("click", function (e) {
  e.preventDefault();
  jQuery("#js-drawer-icon").toggleClass("is-checked");

  jQuery("#js-drawer-contents").toggleClass("is-checked");
});

/*　ーーーーーーー SP用ドロワー扉閉めるコード　ーーーーーーーーーー*/

jQuery(`#js-drawer-contents a[href^="#"]`).on("click", function (e) {
  jQuery("#js-drawer-icon").removeClass("is-checked");
  jQuery("#js-drawer-contents").removeClass("is-checked");
  /* removeClassとは「はずす」という関数になる*/
});

const pagetop = document.querySelector("#js-pagetop");
window.addEventListener("scroll", function () {
  if (100 < window.scrollY) {
    pagetop.classList.add("is-show");
  } else {
    pagetop.classList.remove("is-show");
  }
});

/*　ーーーーーーー スムーススクロールのコード　ーーーーーーーーーー*/

jQuery(`a[href^="#"]`).on("click", function (e) {
  const speed = 300;
  const id = jQuery(this).attr("href");
  const target = jQuery("#" == id ? "html" : id);
  const position = jQuery(target).offset().top;

  jQuery("html,boby").animate({
    scrollTop: position,
    // scrollTop: 0,
  });
  speed, "swing";
  /* 1000, "swing"; */
});

/*　ーーーーーーー 花の画像のスライダー　ーーーーーーーーーー*/

const aboutSwiperWrap = document.querySelector("#js-gallery-swiper-wrap");
const aboutSwiperSlides = aboutSwiperWrap.querySelectorAll(".swiper-slide");

// // 動きを滑らかにするCSS
aboutSwiperWrap.style.transitionTimingFunction = "linear";

function cloneAndAppend(element, swiperWrap) {
  let clonedElement = element.cloneNode(true);
  swiperWrap.appendChild(clonedElement);
}
for (let aboutSwiperSlide of aboutSwiperSlides) {
  cloneAndAppend(aboutSwiperSlide, aboutSwiperWrap);
}

// // スライダーオプション
const aboutSwiper = new Swiper("#js-gallery-swiper", {
  loop: true, // 無限ループ
  width: 150, // 画像の幅
  loopedSlides: 6, //ループするスライドの枚数(総スライド数は2倍に設定する)
  spaceBetween: 10, // スライド間の余白
  speed: 3000, // スピード・1000で１秒
  keyboard: true, // キーボード操作
  autoplay: {
    delay: 0, //
    disableOnInteraction: false, //
  },
  breakpoints: {
    //
    900: {
      spaceBetween: 20, // スライドの余白
      width: 200, //
    },
  },
});

/*　ーーーーーーー スクロールエフェクト ーーーーーーーーーー*/
function fadeUpEffect() {
  $(".fadeUpEffect").each(function () {
    var elemPos = $(this).offset().top + 100;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("fadeUp");
    }
  });
}
$(window).scroll(function () {
  fadeUpEffect();
});
