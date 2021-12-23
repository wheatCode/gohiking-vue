<template>
  <v-card elevation="2" class="px-1 pb-5">
    <v-toolbar flat>
      <v-btn icon @click="$router.push({ name: 'Index' })">
        <v-icon size="25" class="success--text icon_border">mdi-arrow-left</v-icon>
      </v-btn>
    </v-toolbar>
    <v-card-title class="mt-5">
      <h1 class="font-weight-bold text-h5">註冊帳號</h1>
    </v-card-title>
    <v-card-text>
      <label for="" class="font-weight-bold black--text d-inline-block mt-5">電子郵件</label>
      <v-text-field
        v-model="email"
        hide-details
        class="pt-0"
        placeholder="請輸入您的電子郵件"
      ></v-text-field>

      <label for="" class="font-weight-bold black--text d-inline-block mt-10">密碼</label>
      <v-text-field
        v-model="pwd"
        hide-details
        class="pt-0"
        placeholder="請輸入您的密碼"
      ></v-text-field>
      <div class="pt-2 grey--text text--dark-1">密碼必須包含8個字元以上</div>

      <label for="" class="font-weight-bold black--text d-inline-block mt-10">確認密碼</label>
      <v-text-field
        v-model="checkpwd"
        hide-details
        class="pt-0"
        placeholder="請重新輸入您的密碼"
      ></v-text-field>
    </v-card-text>
    <v-card-subtitle class="black--text pt-0">
      使用這個應用程式前，請先詳閱「Go Hiking」的《<router-link to="#">隱私權政策</router-link
      >》及《<router-link to="#">服務條款</router-link>》
    </v-card-subtitle>
    <v-card-actions class="mt-5">
      <v-btn block elevation="2" color="success" x-large @click="toRegister">同意並註冊</v-btn>
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
    };
  },
  methods: {
    async toRegister() {
      const vm = this;

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
            vm.$cookies.set("gohiking_token", data.token);
            vm.$router.push({ name: "BasicInformation" });
          }
        });
    },
  },
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
</style>
