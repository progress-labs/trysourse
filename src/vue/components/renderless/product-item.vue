<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    ...mapActions("cart", ["addItem"]),
    addToCart(variantId) {
      this.loading = true;
      this.addItem([
        {
          id: variantId,
          quantity: 1,
        },
      ]).then(() => {
        this.loading = false;
      });
    },
  },
  render() {
    return this.$slots.default({
      addToCart: this.addToCart,
      loading: this.loading,
    });
  },
};
</script>
