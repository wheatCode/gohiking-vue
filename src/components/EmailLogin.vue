<template>
  <v-card elevation="2" class="px-5 pb-5">
    <v-card-title class="mt-5">
      <h1 class="font-weight-bold text-h5">登入</h1>
    </v-card-title>
    <v-card-text>
      <label for="" class="font-weight-bold black--text d-inline-block mt-5">電子郵件</label>
      <v-text-field
        hide-details
        class="pt-0"
        v-model="user.email"
        placeholder="請輸入電子郵件"
      ></v-text-field>

      <label for="" class="font-weight-bold black--text d-inline-block mt-5">密碼</label>
      <v-text-field
        hide-details
        class="pt-0"
        v-model="user.password"
        placeholder="請輸入密碼"
      ></v-text-field>

      <router-link to="/ForgetPwd" class="d-block text-right black--text pt-3"
        >忘記密碼</router-link
      >
    </v-card-text>

    <v-card-actions>
      <v-btn block elevation="2" color="success" x-large @click="login">登入</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "SuccessPage",
  data() {
    return {
      user: {
        email: null,
        password: null,
      },
    };
  },
  methods: {
    login() {
      this.$axios.postApi("/api/login", { ...this.user }).then((res) => {
        if (!res) return;
        const { data } = res;
        const { token, userId } = data;
        this.$cookies.set("gohiking_token", token);
        this.$cookies.set("user_Id", userId);
        this.$router.push({ name: "Index" });
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
