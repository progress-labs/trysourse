<script>
import { mapActions } from "vuex";
export default {
  props: {
    productsInfo: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    ...mapActions("cart", ["addItem"]),
    addToCart() {
      this.loading = true;
      this.addItem(this.productsInfo).then(() => {
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
