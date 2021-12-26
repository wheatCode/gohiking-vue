<template>
  <v-card elevation="0" class="px-5 pb-5">
    <v-card-title class="pa-0 mt-5">
      <h1 class="font-weight-bold text-h5">重設密碼</h1>
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

    <v-card-text class="pa-0 mt-2">
      <label for="" class="font-weight-bold black--text d-inline-block">密碼</label>
      <v-text-field
        ref="password"
        type="password"
        v-model="password"
        autofocus
        class="pt-0"
        placeholder="請輸入新的密碼"
        :rules="[() => !!password || '新的密碼是必填的']"
        required
      ></v-text-field>

      <label for="" class="font-weight-bold black--text d-inline-block">確認密碼</label>
      <v-text-field
        ref="checkPwd"
        type="checkPwd"
        v-model="checkPwd"
        class="pt-0"
        placeholder="請重新輸入密碼"
        :rules="[() => !!checkPwd || '重新輸入密碼是必填的']"
      ></v-text-field>
    </v-card-text>

    <v-card-actions class="pa-0">
      <v-btn
        block
        elevation="0"
        color="success"
        x-large
        @click="submit"
        :loading="loading"
        :disabled="loading"
        >繼續</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "SuccessPage",
  data() {
    return {
      password: null,
      checkPwd: null,
      loading: false,
    };
  },
  methods: {
    submit() {
      this.formHasErrors = false;
      Object.keys(this.form).forEach((f) => {
        if (!this.form[f]) this.formHasErrors = true;
        if (!this.$refs[f].validate(true)) this.formHasErrors = true;
      });
      if (!this.formHasErrors) {
        this.toResetPwd();
      }
    },
    async toResetPwd() {
      this.loading = true;
      await this.$axios
        .postApi("/api/password/change", {
          password: this.password,
        })
        .then((res) => {
          if (!res) return;
          const { data } = res;
          const { status } = data;
          this.$store.dispatch("setSuccess", status);
          this.$cookies.remove("gohiking_token");
          setTimeout(() => {
            this.$router.push({ name: "Login" });
          }, 1000);
        });
      this.loading = false;
    },
  },
  computed: {
    form() {
      return {
        password: this.password,
        checkPwd: this.checkPwd,
      };
    },
  },
};
</script>

<style lang="scss" scoped></style>
