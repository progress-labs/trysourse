<template>
  <div
    class="
      fixed
      inset-0
      top-0
      right-0
      bg-black bg-opacity-50
      flex
      z-50
      transition-opacity
      h-screen
      shadow-xl
      pointer-events-none
      opacity-0
    "
    :class="{ 'pointer-events-auto opacity-100': visible }"
  >
    <div
      class="
        bg-neutrals-white-bone
        md:w-2/3
        xl:w-2/5
        ml-auto
        overflow-auto
        relative
        min-h-screen
        flex
      "
    >
      <div
        v-show="loading"
        class="absolute inset-0 bg-white bg-opacity-50 z-10"
      />
      <div class="m-5 md:m-10 relative flex-1 flex flex-col justify-between">
        <div>
          <span class="cursor-pointer block" @click="toggle">
            <svg
              class="ml-auto"
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.19709 11.0781L0.148269 19.1909L2.96547 22.0305L11.0178 13.9142L19.0632 22.0035L21.8839 19.1674L13.835 11.0745L22.005 2.83961L19.1877 0L11.0143 8.23843L2.82071 5.46894e-05L0 2.83618L8.19709 11.0781Z"
                fill="#4E4E74"
              />
            </svg>
          </span>
          <div
            class="
              mt-4
              md:mt-8
              flex
              justify-between
              items-center
              border-b-8 border-primary
              pb-6
              md:pb-8
            "
          >
            <h4 class="font-semibold text-primary text-3xl">Your cart</h4>
            <div class="flex items-center">
              <img
                src="//cdn.shopify.com/s/files/1/0359/5639/2074/t/29/assets/icon-cart.static_300x.png?v=4433916468253890482"
                class="w-6"
                alt="icon"
              />
              <span class="font-semibold text-primary ml-1 block">{{
                cartItems
              }}</span>
            </div>
          </div>
        </div>
        <div class="relative overflow-auto flex flex-1">
          <div class="pt-6 md:pt-12 max-h-[50vh] w-full">
            <div
              class="flex mb-5 md:mb-10"
              v-for="product in cart.items"
              :key="product.id"
            >
              <a href="/" class="w-1/6">
                <img
                  :src="product.featured_image.url"
                  class="w-12 md:w-20 h-auto mx-auto"
                  alt="product image"
                />
              </a>
              <div class="ml-5 md:ml-10 w-5/6">
                <div class="flex justify-between">
                  <div>
                    <a href="/" class="font-bold md:text-lg text-primary"
                      >{{ product.product_title }}
                      {{
                        product.selling_plan_allocation
                          ? "(Monthly Subscription)"
                          : null
                      }}</a
                    >
                    <p class="text-sm text-neutrals-gray block">
                      {{ product.quantity }}-month(s) supply
                    </p>
                  </div>
                  <div class="font-semibold md:text-lg text-neutrals-gray">
                    {{ formatMoneyValue(product.final_line_price) }}
                  </div>
                </div>
                <div class="flex justify-between mt-2">
                  <div
                    class="
                      w-1/3
                      md:w-1/4
                      border-2 border-neutrals-gray-light
                      px-3
                      py-0.5
                      flex
                      rounded-lg
                    "
                  >
                    <button
                      class="
                        text-neutrans-gray-dark
                        rounded-l-lg
                        cursor-pointer
                        outline-none
                        m-auto
                      "
                      @click="decreaseQuantity(product)"
                    >
                      −
                    </button>
                    <input
                      type="number"
                      class="
                        input-no-arrows
                        appearance-none
                        outline-none
                        focus:outline-none
                        text-center
                        w-full
                        font-semibold
                        text-md text-neutrals-gray-dark
                        bg-neutrals-white-bone
                        border-0
                      "
                      v-model="product.quantity"
                    />
                    <button
                      class="
                        text-neutrals-gray-dark
                        rounded-r-lg
                        cursor-pointer
                        m-auto
                      "
                      @click="increaseQuantity(product)"
                    >
                      +
                    </button>
                  </div>
                  <button
                    class="text-neutrals-gray underline"
                    @click="remove(product)"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="
            border-t-8 border-[#dcdade]
            md:border-primary
            bg-neutrals-white-bone
          "
        >
          <div class="flex justify-between items-center mt-5 md:mt-10">
            <h6 class="font-semibold text-xl text-neutrals-gray-dark">
              Subtotal
            </h6>
            <div class="w-2/5 text-right">
              <div class="font-semibold text-neutrals-gray text-lg">
                {{ formatMoneyValue(cart.total_price) }}
              </div>
              <div class="hidden md:block">
                <div
                  class="font-semibold text-neutrals-gray-light text-sm mt-2"
                  v-if="valueToFreeShipping != 0"
                >
                  You’re only {{ valueToFreeShipping }} away from free shipping
                </div>
                <div
                  class="font-semibold text-neutrals-gray-light text-sm mt-2"
                  v-else
                >
                  Congrats, you got free shipping!
                </div>
              </div>
            </div>
          </div>
          <div
            class="
              font-semibold
              italic
              text-center text-[#223C52]
              mt-4
              md:mt-10
              text-sm
              md:text-base
            "
          >
            You’re about to get the first vitamin infused candy that you can
            feel good about. A delicious daily ritual.
          </div>
          <div class="flex justify-center">
            <button
              class="
                font-bold
                text-white text-xl
                bg-primary
                px-12
                py-3
                rounded-l-3xl rounded-br-3xl
                inline-block
                mt-6
                md:mt-10
              "
              @click="goToCheckout"
            >
              Checkout - {{ formatMoneyValue(cart.total_price) }}
            </button>
          </div>
          <span
            class="
              font-semibold
              text-neutrals-gray
              block
              mt-6
              md:mt-10
              text-center
            "
            >Free shipping on all subscriptions</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import { formatMoney } from "@shopify/theme-currency";
export default {
  props: {
    collection: {
      type: Array,
      default: () => [],
    },
    freeShippingAmount: {
      type: String,
      default: "0",
    },
  },
  data() {
    return {};
  },
  computed: {
    ...mapState("cart", {
      cart: "cartData",
      visible: "visible",
      loading: "loading",
    }),
    ...mapGetters("cart", ["cartItems"]),
    upsellProducts() {
      return this.collection
        .filter((product) => {
          return (
            this.cart.items.filter(
              (cartProduct) => cartProduct.handle == product.handle
            ).length == 0
          );
        })
        .slice(0, 1);
    },
    valueToFreeShipping() {
      return Math.sign(
        Number(this.freeShippingAmount) - this.cart.total_price
      ) == -1
        ? 0
        : this.formatMoneyValue(
            Number(this.freeShippingAmount) - this.cart.total_price
          );
    },
  },
  mounted() {
    this.$store.dispatch("cart/initCart");
  },
  methods: {
    ...mapActions("cart", [
      "removeItem",
      "toggle",
      "updateItem",
      "addItem",
      "addNote",
    ]),
    decreaseQuantity(product) {
      this.updateItem({ product, quantity: product.quantity - 1 });
    },
    increaseQuantity(product) {
      this.updateItem({ product, quantity: product.quantity + 1 });
    },
    remove(item) {
      this.removeItem(item);
    },
    formatMoney(value) {
      return formatMoney(value, "${{amount_no_decimals}}");
    },
    formatMoneyDecimals(value) {
      return formatMoney(value, "${{amount}}");
    },
    goToCheckout() {
      window.location.assign("/checkout/");
    },
    formatMoneyValue(value) {
      return this.formatMoneyDecimals(value).split(".")[1] == "00"
        ? this.formatMoney(value)
        : this.formatMoneyDecimals(value);
    },
    addToCart(variantId) {
      this.addItem([
        {
          id: variantId,
          quantity: 1,
        },
      ]);
    },
  },
};
</script>
