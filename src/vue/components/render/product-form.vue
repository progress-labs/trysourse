<template>
  <div>
    <div class="flex flex-col md:flex-row gap-7 md:gap-10 mt-10 md:mt-20">
      <div class="flex">
        <input
          v-model="doesItHaveSubscription"
          class="
            rounded-full
            p-3
            bg-[#BDBDBD]
            checked:bg-[#BDBDBD]
            border-0
            focus:border-0
            checked:focus:border-0 checked:focus:ring-0
            focus:ring-0
            checked:focus:bg-[#BDBDBD] checked:hover:bg-[#BDBDBD]
          "
          name="subscription"
          type="radio"
          :value="true"
        />
        <div class="ml-2">
          <span class="active:font-bold text-neutrals-gray block">
            {{ formatMoneyValue(discountedPrice) }}
            - 1 Month Supply
          </span>
          <span class="text-sm text-neutrals-gray-light block mr-1">
            Monthly supply of 2 bags, 60 pieces
          </span>
        </div>
      </div>
      <div class="flex">
        <input
          v-model="doesItHaveSubscription"
          class="
            rounded-full
            p-3
            bg-[#BDBDBD]
            checked:bg-[#BDBDBD]
            border-0
            focus:border-0
            checked:focus:border-0 checked:focus:ring-0
            focus:ring-0
            checked:focus:bg-[#BDBDBD] checked:hover:bg-[#BDBDBD]
          "
          name="subscription"
          type="radio"
          :value="false"
        />
        <div class="ml-2">
          <span class="active:font-bold text-neutrals-gray block">
            {{ formatMoney(product.price) }} - One time purchase
          </span>
          <span class="text-sm text-neutrals-gray-light block mr-1">
            2 bags, 60 pieces
          </span>
        </div>
      </div>
    </div>
    <div class="flex items-center mt-10">
      <button
        class="
          font-header font-black
          text-white text-xl
          bg-bright-pink
          px-12
          py-3
          rounded-l-3xl rounded-br-3xl
          mr-10
          inline-block
          disabled:opacity-50 disabled:cursor-not-allowed
        "
        :style="{ backgroundColor: `#${color} !important` }"
        :disabled="!isSelectedVariantOutOfStock"
        @click="addToCart"
      >
        {{
          !isSelectedVariantOutOfStock
            ? "Out of stock"
            : doesItHaveSubscription
            ? "Subscribe"
            : "Purchase"
        }}
      </button>
      <div class="w-1/3 md:w-1/6">
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
              py-0.5
              text-neutrans-gray-dark
              rounded-l-lg
              cursor-pointer
              outline-none
              m-auto
            "
            @click="decreaseQuantity"
          >
            −
          </button>
          <input
            v-model="quantity"
            type="number"
            class="
              py-0.5
              bg-transparent
              input-no-arrows
              border-0
              outline-none
              focus:outline-none
              text-center
              w-full
              font-semibold
              text-md text-neutrals-gray-dark
            "
          />
          <button
            class="
              py-0.5
              text-neutrals-gray-dark
              rounded-r-lg
              cursor-pointer
              m-auto
            "
            @click="increaseQuantity"
          >
            +
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { formatMoney } from "@shopify/theme-currency";

export default {
  props: {
    product: {
      type: Object,
      default: () => {},
    },
    color: {
      type: String,
      default: "#C15D8D",
    },
  },
  data() {
    return {
      selectedVariantId: this.product.variants[0].id,
      quantity: 1,
      doesItHaveSubscription: false,
    };
  },
  computed: {
    ...mapState("cart", {
      cart: "cartData",
      visible: "visible",
      loading: "loading",
    }),
    isSelectedVariantOutOfStock: function () {
      const isVariantAvailable = this.product.variants.filter(
        (variant) => variant.id == this.selectedVariantId
      )[0].available;
      return isVariantAvailable ? true : false;
    },
    discountedPrice: function () {
      let discount =
        (100 -
          this.product.selling_plan_groups[0]?.selling_plans[0]
            .price_adjustments[0].value) /
        100;
      return this.product.price * discount;
    },
  },
  mounted() {
    const url = new URL(window.location);

    if (url.searchParams.get("variant")) {
      this.selectedVariantId = url.searchParams.get("variant");

      document.querySelector(".product-price").textContent = this.formatMoney(
        this.product.variants.filter(
          (variant) => variant.id == this.selectedVariantId
        )[0].price
      );
    }
  },
  methods: {
    ...mapActions("cart", ["addItem"]),
    addToCart() {
      this.addItem([
        ...(this.doesItHaveSubscription
          ? [
              {
                id: this.product.variants[0].id,
                quantity: 1,
                selling_plan:
                  this.product.selling_plan_groups[0].selling_plans[0].id,
              },
            ]
          : [
              {
                id: this.selectedVariantId,
                quantity: this.quantity,
              },
            ]),
      ]);
    },
    decreaseQuantity() {
      this.quantity == 1 ? this.quantity : this.quantity--;
    },
    increaseQuantity() {
      this.quantity++;
    },
    formatMoney(value) {
      return formatMoney(value, "${{amount_no_decimals}}");
    },
    formatMoneyDecimals(value) {
      return formatMoney(value, "${{amount}}");
    },
    formatMoneyValue(value) {
      return this.formatMoneyDecimals(value).split(".")[1] == "00"
        ? this.formatMoney(value)
        : this.formatMoneyDecimals(value);
    },
  },
};
</script>
