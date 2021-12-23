<template>
  <v-card elevation="2" class="px-5 pb-5">
    <v-card-title class="mt-5">
      <h1 class="font-weight-bold text-h5">輸入驗證碼</h1>
    </v-card-title>
    <v-card-text>
      <p>已把驗證碼發至您的信箱johndoe@example.com，請確認您的信箱及輸入4位數驗證碼。</p>

      <v-otp-input
        v-model="verifications"
        length="4"
        plain
        color="success"
        type="number"
        class="px-15"
      ></v-otp-input>
    </v-card-text>
    <v-card-actions>
      <v-btn block elevation="2" color="success" x-large @click="toVerification">繼續</v-btn><br />
    </v-card-actions>
    <v-card-actions>
      <v-btn block outlined elevation="2" color="success" x-large>重新發送驗證碼</v-btn><br />
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "SuccessPage",
  data() {
    return {
      verifications: null,
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
    toVerification() {
      if (!this.verifications) return;

      [...this.verifications].forEach((verification, index) => {
        this.verification[`verificationCode${index}`] = verification;
      });

      this.$axios
        .postApi("/api/password/confirm", { ...this.verification, email: this.$route.query.email })
        .then((res) => {
          if (!res) return;
          const { data } = res;
          console.log(data);
          this.$cookies.set("gohiking_token", data.token);
          this.$router.push({ name: "ResetPwd" });
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
