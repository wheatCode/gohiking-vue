<template>
  <v-app class="pa-0 ma-0">
    <v-container>
      <v-row justify="center">
        <v-col class="pa-0" md="6">
          <v-main>
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
