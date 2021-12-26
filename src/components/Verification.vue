<template>
  <v-card elevation="0" class="px-5 pb-5">
    <v-card-title class="d-block text-center mt-5">
      <h1 class="font-weight-bold text-h5">輸入驗證碼</h1>
    </v-card-title>

    <v-card-text class="pa-0">
      已把驗證碼發至您的信箱{{ $route.query.email }}，請確認您的信箱及輸入4位數驗證碼。
    </v-card-text>

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

    <v-otp-input
      v-model="verifications"
      length="4"
      plain
      color="success"
      type="number"
      class="px-15"
    ></v-otp-input>

    <v-card-actions>
      <v-btn
        block
        elevation="0"
        color="success"
        x-large
        @click="submit"
        :loading="loading"
        :disabled="loading"
        >繼續</v-btn
      ><br />
    </v-card-actions>

    <v-card-actions>
      <v-btn
        block
        outlined
        elevation="0"
        color="success"
        x-large
        @click="toVerification"
        :loading="loading"
        :disabled="loading"
        >重新發送驗證碼</v-btn
      ><br />
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "SuccessPage",
  data() {
    return {
      verifications: null,
      loading: false,
      verification: {
        email: null,
        verificationCode0: null,
        verificationCode1: null,
        verificationCode2: null,
        verificationCode3: null,
      },
    };
  },
  methods: {
    submit() {
      if (!this.verifications) return;

      [...this.verifications].forEach((verification, index) => {
        this.verification[`verificationCode${index}`] = verification;
      });

      this.confirm();
    },
    async confirm() {
      this.loading = true;
      await this.$axios
        .postApi("/api/password/confirm", {
          email: this.$route.query.email,
          verificationCode0: this.verifications[0] || null,
          verificationCode1: this.verifications[1] || null,
          verificationCode2: this.verifications[2] || null,
          verificationCode3: this.verifications[3] || null,
        })
        .then((res) => {
          if (!res) return;
          const { data } = res;
          const { message, token } = data;
          this.$store.dispatch("setSuccess", message);
          this.$cookies.set("gohiking_token", token);
          setTimeout(() => {
            this.$router.push({ name: "ResetPwd" });
          }, 1000);
        });
      this.loading = false;
    },
    async toVerification() {
      this.loading = true;
      await this.$axios
        .postApi("/api/password/forget", { email: this.$route.query.email })
        .then((res) => {
          if (!res) return;
          const { data } = res;
          this.$store.dispatch("setSuccess", data.message);
        });
      this.loading = false;
    },
  },
};
</script>

<style lang="scss" scoped></style>
