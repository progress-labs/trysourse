<script>
import Swiper from "swiper/bundle";

export default {
  mounted() {
    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 20,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
      slideToClickedSlide: true,
      breakpoints: {
          768: {
            spaceBetween: 50,
          },
          1024: {
              spaceBetween: 0,
          }
      }
    });
    var swiper2 = new Swiper(".mySwiper2", {
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      thumbs: {
        swiper: swiper,
      },
    });
  },
  render() {
    return this.$slots.default({});
  },
};
</script>
