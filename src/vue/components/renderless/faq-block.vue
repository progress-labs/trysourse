<script>
export default {
  data() {
    return {
      faqItemActive: null,
    };
  },
  methods: {
    toggleFaqItem(item) {
      if (this.faqItemActive == item) {
        this.faqItemActive = null;
      } else {
        this.faqItemActive = item;
      }
    },
  },
  render() {
    return this.$slots.default({
      faqItemActive: this.faqItemActive,
      toggleFaqItem: this.toggleFaqItem,
    });
  },
};
</script>
