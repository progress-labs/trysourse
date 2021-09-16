<script>
import { mapActions, mapGetters } from "vuex";
export default {
    data() {
        return {
            isMenuOpen: false,
        }
    },
  computed: {
    ...mapGetters("cart", ["cartItems"]),
  },
  methods: {
    ...mapActions("cart", ["toggle"]),
    removeScroll(condition) {
      if (condition) {
        document
          .querySelector("body")
          .classList.add("max-h-screen", "relative", "overflow-hidden");
      } else {
        document
          .querySelector("body")
          .classList.remove("max-h-screen", "relative", "overflow-hidden");
      }
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;

      this.removeScroll(this.isMenuOpen);
    },
  },
  render() {
    return this.$slots.default({
      cartItems: this.cartItems,
      toggleCart: this.toggle,
      toggleMenu: this.toggleMenu,
      isMenuOpen: this.isMenuOpen
    });
  },
};
</script>
