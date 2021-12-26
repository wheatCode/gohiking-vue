<template>
  <v-app class="pa-0 ma-0">
    <v-container class="pa-0 ma-0">
      <v-row class="pa-0 ma-0" justify="center">
        <v-col class="pa-0 ma-0" md="6">
          <v-main class="pa-0 ma-0">
            <router-view />
          </v-main>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
}
* {
  margin: 0;
  padding: 0;
}
</style>
