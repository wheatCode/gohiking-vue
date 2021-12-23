<template>
  <v-card elevation="2" class="px-5 pb-5">
    <v-card-title class="mt-5">
      <h1 class="font-weight-bold text-h5">重設密碼</h1>
    </v-card-title>
    <v-card-text>
      <label for="" class="font-weight-bold black--text d-inline-block mt-5">密碼</label>
      <v-text-field
        v-model="password"
        hide-details
        class="pt-0"
        placeholder="請輸入新的密碼"
      ></v-text-field>

      <label for="" class="font-weight-bold black--text d-inline-block mt-5">確認密碼</label>
      <v-text-field
        v-model="checkPwd"
        hide-details
        class="pt-0"
        placeholder="請重新輸入密碼"
      ></v-text-field>
    </v-card-text>

    <v-card-actions>
      <v-btn block elevation="2" color="success" x-large @click="toResetPwd">繼續</v-btn>
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
    };
  },
  methods: {
    async toResetPwd() {
      const vm = this;

      await this.$axios
        .postApi("/api/password/change", {
          password: this.password,
        })
        .then((res) => {
          if (!res) return;
          const { data } = res;
          if (data) {
            vm.$router.push({ name: "Login" });
          }
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
