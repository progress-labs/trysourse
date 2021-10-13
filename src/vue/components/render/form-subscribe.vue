<template>
  <div>
    <form
      v-if="!formSubmitted"
      class="flex w-full mt-6"
      @submit.prevent="formSubmit"
    >
      <input
        v-model="form.email"
        class="
          w-2/3
          md:w-3/4
          bg-transparent
          placeholder-neutrals-gray
          text-neutrals-gray
          border-2 border-primary
          focus:outline-none
          rounded-l-lg
          px-4
          py-3
        "
        placeholder="Email Address"
        type="email"
      >
      <button
        class="
          w-1/3
          bg-primary
          text-white
          px-3
          md:px-3
          py-3
          focus:outline-none
          rounded-r-lg
          font-header font-bold
        "
      >
        Sign Up
      </button>
    </form>
    <div v-else>
      <h3 class="mt-6 font-header text-neutrals-gray">
        Thanks for subscribing!
      </h3>
    </div>
  </div>
</template>

<script>
import { subscribe } from "klaviyo-subscribe";

export default {
  props: {
    listId: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      formSubmitted: false,
      form: {
        email: "",
      },
    };
  },
  methods: {
    formSubmit() {
      subscribe(this.listId, this.form.email).then(() => {
        this.formSubmitted = true;
      });
    },
  },
};
</script>
