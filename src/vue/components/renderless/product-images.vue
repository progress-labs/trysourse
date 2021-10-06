<script>
import Swiper from "swiper/bundle";

export default {
  mounted() {
    const swiper = new Swiper(".product-thumbnails", {
      spaceBetween: 0,
      slidesPerView: 4,

      freeMode: true,
      watchSlidesProgress: true,
    });
    new Swiper(".product-featured-image", {
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
