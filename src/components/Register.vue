<template>
  <v-card elevation="0" class="px-1 pb-5">
    <v-toolbar flat>
      <v-btn icon @click="$router.push({ name: 'Index' })">
        <v-icon size="25" class="success--text icon_border">mdi-arrow-left</v-icon>
      </v-btn>
    </v-toolbar>

    <v-card-title class="mt-5">
      <h1 class="font-weight-bold text-h5">註冊帳號</h1>
    </v-card-title>

    <v-alert color="red darken-2" class="mx-3" dark v-if="$store.state.error">
      {{ $store.state.error }}
    </v-alert>

    <v-card-text>
      <label for="" class="font-weight-bold black--text d-inline-block mt-2">電子郵件</label>
      <v-text-field
        ref="email"
        v-model="email"
        class="pt-0"
        placeholder="請輸入您的電子郵件"
        :rules="[
          () => !!email || '電子郵件是必填的',
          () => emailRule.test(email) || '填寫正確的電子郵件格式',
        ]"
      ></v-text-field>

      <label for="" class="font-weight-bold black--text d-inline-block mt-2">密碼</label>
      <v-text-field
        ref="pwd"
        type="password"
        v-model="pwd"
        class="pt-0"
        placeholder="請輸入您的密碼"
        :rules="[() => !!pwd || '密碼是必填的']"
      ></v-text-field>

      <label for="" class="font-weight-bold black--text d-inline-block mt-2">確認密碼</label>
      <v-text-field
        ref="checkpwd"
        type="password"
        v-model="checkpwd"
        class="pt-0"
        placeholder="請重新輸入您的密碼"
        :rules="[() => !!checkpwd || '重新輸入密碼是必填的', pwd == checkpwd || '兩個密碼必須相同']"
      ></v-text-field>
    </v-card-text>

    <v-card-subtitle class="black--text pt-0">
      使用這個應用程式前，請先詳閱「Go Hiking」的《<router-link to="/Privacy"
        >隱私權政策</router-link
      >》及《<router-link to="/Privacy">服務條款</router-link>》
    </v-card-subtitle>

    <v-card-actions class="mt-5">
      <v-btn
        block
        elevation="2"
        color="success"
        x-large
        @click="submit"
        :loading="loading"
        :disabled="loading"
        >同意並註冊</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "SuccessPage",
  data() {
    return {
      email: null,
      pwd: null,
      checkpwd: null,
      loading: false,
      formHasErrors: false,
      emailRule:
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
    };
  },
  methods: {
    async submit() {
      this.formHasErrors = false;
      this.loading = true;
      Object.keys(this.form).forEach((f) => {
        if (!this.form[f]) this.formHasErrors = true;
        if (!this.$refs[f].validate(true)) this.formHasErrors = true;
      });
      if (!this.formHasErrors) {
        await this.toRegister();
      }
      this.loading = false;
    },
    async toRegister() {
      await this.$axios
        .postApi("/api/register", {
          email: this.email,
          password: this.pwd,
        })
        .then((res) => {
          if (!res) return;
          const { data } = res;
          console.log(data);
          if (data) {
            this.$cookies.set("gohiking_token", data.token);
            this.$router.push({ name: "BasicInformation" });
          }
        });
    },
  },
  computed: {
    form() {
      return {
        email: this.email,
        pwd: this.pwd,
        checkpwd: this.checkpwd,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
</style>
