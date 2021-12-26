<template>
  <v-sheet class="overflow-hidden" style="position: relative" height="100vh">
    <v-app-bar color="deep-purple accent-4" dense dark>
      <v-toolbar-title>步道搜尋</v-toolbar-title>
    </v-app-bar>

    <v-text-field
      solo
      flat
      label="搜尋步道"
      v-model="trail"
      hide-details="auto"
      prepend-inner-icon="mdi-magnify"
      append-icon="mdi-microphone"
      class="input_color mt-8 px-4"
      @keyup.enter="toSearchResult(null)"
    ></v-text-field>

    <h3 class="px-4 mb-3 mt-3">快速搜尋</h3>
    <v-sheet class="overflow-y-auto px-4" style="height: calc(100% - 240px)">
      <v-row>
        <template v-if="$store.state.loading">
          <v-col cols="6" class="py-2" v-for="i in 12" :key="i">
            <div>
              <v-skeleton-loader
                class="pa-0 ma-0"
                width="100%"
                height="80"
                type="card"
              ></v-skeleton-loader>
            </div>
          </v-col>
        </template>

        <template v-else>
          <v-col cols="6" class="py-2" v-for="trail in trails" :key="trail.id">
            <v-btn
              text
              height="100%"
              width="100%"
              class="text-start pa-0"
              @click="toSearchResult(trail.id)"
            >
              <v-sheet color="#ffecdc" height="70" width="100%" rounded style="position: relative">
                <h4 class="pl-4 pt-4">{{ trail.name }}</h4>
                <v-img
                  style="position: absolute; bottom: 0px; right: 10px"
                  class="ml-auto"
                  v-if="trail.image"
                  :src="require(`@/assets/index/icon-${trail.image}`)"
                  width="60"
                  height="60"
                ></v-img
              ></v-sheet>
            </v-btn>
          </v-col>
        </template>
      </v-row>
    </v-sheet>
  </v-sheet>
</template>

<script>
export default {
  name: "SuccessPage",
  data() {
    return { tab: null, dialog: false, trail: null, trails: [] };
  },
  async mounted() {
    this.$store.dispatch("loadingPage", true);
    await this.getClassFication();
    this.$store.dispatch("loadingPage", false);
  },
  methods: {
    async getClassFication() {
      await this.$axios.getApi("api/classification").then((res) => {
        const { data } = res;
        this.trails = { ...data };
        console.log(this.trails);
      });
    },
    toSearchResult(id) {
      if (id) {
        this.$router.push({
          name: "SearchResult",
          params: { classification: id },
        });
      } else {
        this.$router.push({
          name: "SearchResult",
          params: { title: this.trail },
        });
      }
    },
    stopToNearby() {
      this.dialog = true;
      this.$nextTick(() => {
        this.tab = "/SearchTrail";
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.input_color::v-deep .v-input__slot {
  background-color: #e5e5ea !important;
  color: #919191 !important;
}
.footer-tabs-prev-none::v-deep {
  .v-slide-group__prev {
    display: none !important;
  }
}
</style>
