<template>
  <section class="text-center">
    <v-card elevation="2" rounded="0">
      <v-img
        src="https://images.freeimages.com/images/large-previews/1e6/colorful-sky-1640504.jpg"
        alt=""
        height="300"
        width="100%"
        ><div class="text-h4 white--text font-italic font-weight-black pt-15">GO HIKING</div></v-img
      >
      <v-card-actions>
        <v-btn to="/Register" block color="white" large @click="signIn">
          <v-img :src="require('@/assets/login/google.png')" max-width="25" height="25"></v-img>
          透過 Google 登入
        </v-btn>
      </v-card-actions>
      <v-card-actions>
        <v-btn block to="/EmailLogin" elevation="2" color="success" large>透過 Email 登入</v-btn>
      </v-card-actions>
      <v-card-text class="px-5 pb-5">
        <p class="black--text m-0">
          還不是會員嗎？<router-link to="/Register" class="black--text">註冊新帳號</router-link>
        </p>
      </v-card-text>
      <v-card-actions class="mx-25">
        <v-btn block elevation="2" color="success" large to="/">直接使用</v-btn>
      </v-card-actions>
    </v-card>
  </section>
</template>

<script>
export default {
  name: "SuccessPage",
  methods: {
    async signIn() {
      try {
        const googleUser = await this.$gAuth.signIn();
        if (!googleUser) {
          return null;
        }
        console.log("googleUser", googleUser);
        console.log("getId", googleUser.getId());
        console.log("getBasicProfile", googleUser.getBasicProfile());
        console.log("getAuthResponse", googleUser.getAuthResponse());
        console.log("getAuthResponse", this.$gAuth.GoogleAuth.currentUser.get().getAuthResponse());
        this.isSignIn = this.$gAuth.isAuthorized;
      } catch (error) {
        //on fail do something
        console.error(error);
        return null;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.mx-25 {
  margin-left: 25%;
  margin-right: 25%;
}
</style>
