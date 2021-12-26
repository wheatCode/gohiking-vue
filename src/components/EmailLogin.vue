<template>
  <v-sheet>
    <v-toolbar flat>
      <v-btn icon @click="$store.dispatch('toPrevRouter')">
        <v-icon color="success" large>mdi-arrow-left</v-icon>
      </v-btn>
    </v-toolbar>

    <v-card elevation="0" class="pb-5" ref="form">
      <v-card-title>
        <h1 class="font-weight-bold text-h5">登入</h1>
      </v-card-title>

      <v-alert color="red darken-2" class="mx-3" dark v-if="$store.state.error">
        {{ $store.state.error }}
      </v-alert>

      <v-card-text>
        <label for="" class="font-weight-bold black--text d-inline-block">電子郵件</label>
        <v-text-field
          ref="email"
          autofocus
          class="pt-0"
          v-model="user.email"
          placeholder="請輸入電子郵件"
          :rules="[
            () => !!user.email || '電子郵件是必填的',
            () => emailRule.test(user.email) || '填寫正確的電子郵件格式',
          ]"
          required
        ></v-text-field>

        <label for="" class="font-weight-bold black--text d-inline-block">密碼</label>
        <v-text-field
          ref="password"
          type="password"
          autofocus
          class="pt-0"
          v-model="user.password"
          placeholder="請輸入密碼"
          :rules="[() => !!user.password || '密碼是必填的']"
          required
        ></v-text-field>

        <router-link to="/ForgetPwd" class="d-block text-right black--text">忘記密碼</router-link>
      </v-card-text>
      {{ errorMessages }}
      <v-card-actions>
        <v-btn
          block
          elevation="2"
          color="success"
          x-large
          @click="submit"
          :loading="loading"
          :disabled="loading"
          >登入</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-sheet>
</template>

<script>
export default {
  name: "SuccessPage",
  data() {
    return {
      loading: false,
      formHasErrors: false,
      errorMessages: "",
      emailRule:
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
      user: {
        email: null,
        password: null,
      },
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
        this.login();
      }
    },
    async login() {
      this.loading = true;
      await this.$axios.postApi("/api/login", { ...this.user }).then((res) => {
        if (!res) return;
        const { data } = res;
        const { token, userId } = data;
        this.$cookies.set("gohiking_token", token);
        this.$cookies.set("user_Id", userId);
        this.$router.push({ name: "Index" });
      });
      this.loading = false;
    },
  },
  computed: {
    form() {
      return {
        email: this.user.email,
        password: this.user.password,
      };
    },
  },
};
</script>

<style lang="scss" scoped></style>
