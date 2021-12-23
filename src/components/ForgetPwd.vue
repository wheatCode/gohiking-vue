<template>
  <v-card elevation="2" class="px-5 pb-5">
    <v-card-title class="mt-5">
      <h1 class="font-weight-bold text-h5">忘記密碼</h1>
    </v-card-title>
    <v-card-text>
      <label for="" class="font-weight-bold black--text d-inline-block mt-5">電子郵件</label>
      <v-text-field
        hide-details
        class="pt-0"
        v-model="email"
        placeholder="請輸入電子郵件"
      ></v-text-field>

      <!-- <vue-recaptcha sitekey="6LdN7EgdAAAAAHXZoD6jMhOjZTHRvWoQHzLd3biR" :loadRecaptchaScript="true">
        <button>Click me</button></vue-recaptcha
      > -->
    </v-card-text>

    <v-card-actions>
      <v-btn block elevation="2" color="success" x-large @click="toVerification">繼續</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import VueRecaptcha from "vue-recaptcha";

export default {
  name: "SuccessPage",
  components: { VueRecaptcha },
  data() {
    return {
      email: null,
    };
  },
  methods: {
    async toVerification() {
      await this.$axios.postApi("/api/password/forget", { email: this.email }).then((res) => {
        if (!res) return;
        const { data } = res;
        console.log(data);
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
