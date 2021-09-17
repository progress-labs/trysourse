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
      pointer-events-none opacity-0
    "
    :class="{ 'pointer-events-auto opacity-100': visible }"
  >
    <div class="bg-neutrals-white-bone md:w-2/3 xl:w-2/5 ml-auto overflow-auto relative">
      <div class="p-5 md:p-10">
        <span
          class="cursor-pointer"
          @click="toggle"
        >
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
            mt-6
            md:mt-8
            flex
            justify-between
            items-center
            border-b-8 border-primary
            pb-6
            md:pb-8
          "
        >
          <h4 class="font-semibold text-primary text-3xl">
            Your cart
          </h4>
          <div class="flex items-center">
            <img
              src="//cdn.shopify.com/s/files/1/0359/5639/2074/t/29/assets/icon-cart.static_300x.png?v=4433916468253890482"
              class="w-6"
              alt="icon"
            >
            <span class="font-semibold text-primary ml-1 block">8</span>
          </div>
        </div>
        <div class="mt-12">
          <div class="flex items-center mb-10">
            <a
              href="/"
              class="w-1/6"
            >
              <img
                src="//cdn.shopify.com/s/files/1/0359/5639/2074/t/29/assets/product-image.static_300x.png?v=6565519922396648927"
                class="w-14 h-auto mx-auto"
                alt="product image"
              >
            </a>
            <div class="ml-5 md:ml-10 w-5/6">
              <div class="flex justify-between">
                <div>
                  <a
                    href="/"
                    class="font-bold md:text-lg text-primary"
                  >Glow Bites</a>
                  <p class="text-sm text-neutrals-gray block">
                    1-month supply
                  </p>
                </div>
                <div class="font-semibold md:text-lg text-neutrals-gray">
                  $29.90
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
                  >
                    −
                  </button>
                  <input
                    type="number"
                    class="
                      input-no-arrows
                      outline-none
                      focus:outline-none
                      text-center
                      w-full
                      font-semibold
                      text-md text-neutrals-gray-dark
                    "
                    value="1"
                  >
                  <button
                    class="
                      text-neutrals-gray-dark
                      rounded-r-lg
                      cursor-pointer
                      m-auto
                    "
                  >
                    +
                  </button>
                </div>
                <a
                  href="/"
                  class="text-neutrals-gray underline"
                >Remove</a>
              </div>
            </div>
          </div>
          <div class="flex items-center mb-10">
            <a
              href="/"
              class="w-1/6"
            >
              <img
                src="//cdn.shopify.com/s/files/1/0359/5639/2074/t/29/assets/product-image.static_300x.png?v=6565519922396648927"
                class="w-12 md:w-14 h-auto mx-auto"
                alt="product image"
              >
            </a>
            <div class="ml-5 md:ml-10 w-5/6">
              <div class="flex justify-between">
                <div>
                  <a
                    href="/"
                    class="font-bold md:text-lg text-primary"
                  >Glow Bites</a>
                  <p class="text-sm text-neutrals-gray block">
                    1-month supply
                  </p>
                </div>
                <div class="font-semibold md:text-lg text-neutrals-gray">
                  $29.90
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
                  >
                    −
                  </button>
                  <input
                    type="number"
                    class="
                      input-no-arrows
                      outline-none
                      focus:outline-none
                      text-center
                      w-full
                      font-semibold
                      text-md text-neutrals-gray-dark
                    "
                    value="1"
                  >
                  <button
                    class="
                      text-neutrals-gray-dark
                      rounded-r-lg
                      cursor-pointer
                      m-auto
                    "
                  >
                    +
                  </button>
                </div>
                <a
                  href="/"
                  class="text-neutrals-gray underline"
                >Remove</a>
              </div>
            </div>
          </div>
          <div class="flex md:hidden justify-between mt-10">
            <h6 class="font-semibold text-lg  text-neutrals-gray-dark">
              Subtotal
            </h6>
            <div class="w-1/2 text-right">
              <div class="font-semibold text-neutrals-gray text-lg">
                $59.80
              </div>
              <div class="font-semibold text-neutrals-gray-light text-sm mt-2">
                You’re only $40.20 away from free shipping
              </div>
            </div>
          </div>
        </div>
        <div class="md:border-t-4 border-[#dcdade] pt-24 md:pt-12">
          <h5 class="font-bold text-neutrals-gray-dark md:text-xl mb-3 md:mb-8">
            Add and save 10%
          </h5>
          <div class="flex items-center mb-6 md:mb-10">
            <a
              href="/"
              class="w-1/6"
            >
              <img
                src="//cdn.shopify.com/s/files/1/0359/5639/2074/t/29/assets/product-image.static_300x.png?v=6565519922396648927"
                class="w-14 h-auto mx-auto"
                alt="product image"
              >
            </a>
            <div class="ml-5 md:ml-10 w-5/6">
              <div class="flex justify-between">
                <div>
                  <a
                    href="/"
                    class="font-bold md:text-lg text-primary"
                  >Glow Bites</a>
                  <p class="text-sm text-neutrals-gray block">
                    1-month supply
                  </p>
                </div>
                <div class="flex">
                  <div
                    class="
                      font-semibold
                      text-neutrals-gray/50 md:text-lg
                      line-through
                    "
                  >
                    $29.90
                  </div>
                  <div class="font-semibold md:text-lg text-neutrals-gray ml-2">
                    $26.90
                  </div>
                </div>
              </div>
              <div class="flex justify-between mt-2">
                <div class="w-1/3 md:w-1/4">
                  <div
                    class="
                      w-full
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
                    >
                      −
                    </button>
                    <input
                      type="number"
                      class="
                        input-no-arrows
                        outline-none
                        focus:outline-none
                        text-center
                        w-full
                        font-semibold
                        text-md text-neutrals-gray-dark
                      "
                      value="1"
                    >
                    <button
                      class="
                        text-neutrals-gray-dark
                        rounded-r-lg
                        cursor-pointer
                        m-auto
                      "
                    >
                      +
                    </button>
                  </div>
                </div>
                <a
                  href="/"
                  class="
                    font-bold
                    text-white
                    bg-primary
                    px-6
                    py-2
                    rounded-l-3xl rounded-br-3xl
                    inline-block
                  "
                >Add</a>
              </div>
            </div>
          </div>
        </div>
        <div class="border-t-8 border-[#dcdade] md:border-primary">
          <div class="hidden md:flex justify-between items-center mt-10">
            <h6 class="font-semibold text-xl text-neutrals-gray-dark">
              Subtotal
            </h6>
            <div class="w-2/5 text-right">
              <div class="font-semibold text-neutrals-gray text-lg">
                $59.80
              </div>
              <div class="font-semibold text-neutrals-gray-light text-sm mt-2">
                You’re only $40.20 away from free shipping
              </div>
            </div>
          </div>
          <div
            class="
              font-semibold
              italic
              text-center text-[#223C52]
              mt-8
              md:mt-10
            "
          >
            You’re about to get the first vitamin infused candy that you can
            feel good about. A delicious daily ritual.
          </div>
          <div class="flex justify-center">
            <a
              href="/"
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
            >Checkout - $59.80</a>
          </div>
          <span
            class="
              font-semibold
              text-neutrals-gray
              block
              mt-6
              md:mt-10
              text-center mb-4 md:mb-0
            "
          >Free shipping on all subscriptions</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState("cart", {
      cart: "cartData",
      visible: "visible",
      loading: "loading",
    }),
  },
  mounted() {
    this.$store.dispatch("cart/initCart");
  },
  methods: {
    ...mapActions("cart", ["removeItem", "toggle", "updateItem"]),
    decreaseQuantity(product) {
      return product.quantity - 1;
    },
    increaseQuantity(product) {
      return product.quantity + 1;
    },
    remove(item) {
      this.removeItem(item);
    },
    // formatMoney(value) {
    //   return formatMoney(value, "${{amount_no_decimals}}");
    // },
    goToCheckout() {
      window.location.assign("/checkout/");
    },
  },
};
</script>
