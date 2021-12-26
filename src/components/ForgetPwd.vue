<template>
  <v-sheet>
    <v-toolbar flat>
      <v-btn icon @click="$store.dispatch('toPrevRouter')">
        <v-icon color="success" large>mdi-arrow-left</v-icon>
      </v-btn>
    </v-toolbar>

    <v-card elevation="0" class="pb-5" ref="form">
      <v-card-title>
        <h1 class="font-weight-bold text-h5">忘記密碼</h1>
      </v-card-title>

      <v-alert
        color="red darken-2"
        class="mx-3"
        dark
        v-if="$store.state.error"
        v-html="$store.state.error"
      >
      </v-alert>

      <v-alert
        color="success"
        class="mx-3"
        dark
        v-if="$store.state.success"
        v-html="$store.state.success"
      >
      </v-alert>

      <v-card-text class="py-0">
        <label for="" class="font-weight-bold black--text d-inline-block">電子郵件</label>
        <v-text-field
          ref="email"
          autofocus
          class="py-0"
          v-model="email"
          placeholder="請輸入電子郵件"
          :rules="[
            () => !!email || '電子郵件是必填的',
            () => emailRule.test(email) || '填寫正確的電子郵件格式',
          ]"
          required
        ></v-text-field>

        <!-- <vue-recaptcha sitekey="6LdN7EgdAAAAAHXZoD6jMhOjZTHRvWoQHzLd3biR" :loadRecaptchaScript="true">
        <button>Click me</button></vue-recaptcha
      > -->
      </v-card-text>

      <v-card-actions>
        <v-btn
          block
          elevation="2"
          color="success"
          x-large
          @click="submit"
          :loading="loading"
          :disabled="loading || issubmit"
          >繼續</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-sheet>
</template>

<script>
import VueRecaptcha from "vue-recaptcha";

export default {
  name: "SuccessPage",
  components: { VueRecaptcha },
  data() {
    return {
      formHasErrors: false,
      loading: false,
      errorMessages: "",
      issubmit: false,
      emailRule:
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
      email: null,
    };
  },
  methods: {
    async submit() {
      this.formHasErrors = false;
      Object.keys(this.form).forEach((f) => {
        if (!this.form[f]) this.formHasErrors = true;
        console.log(this.$refs[f].validate(true));
        if (!this.$refs[f].validate(true)) this.formHasErrors = true;
      });
      if (!this.formHasErrors) {
        this.loading = true;
        await this.toVerification();
        this.loading = false;
      }
    },
    async toVerification() {
      await this.$axios.postApi("/api/password/forget", { email: this.email }).then((res) => {
        if (!res) return;
        const { data } = res;
        this.$store.dispatch("setSuccess", data.message + "，請去信箱取得驗證碼進行下一步動作");
        this.issubmit = true;
      });
    },
  },
  computed: {
    form() {
      return {
        email: this.email,
      };
    },
  },
};
</script>

<style lang="scss" scoped></style>
