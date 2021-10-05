<script>
export default {
  data() {
    return {
      activeTab: "description",
    };
  },
  methods: {
    changeTab(value) {
      this.activeTab = value;
    },
  },
  render() {
    return this.$slots.default({
      activeTab: this.activeTab,
      changeTab: this.changeTab,
    });
  },
};
</script>
