<template>
  <v-sheet class="overflow-hidden" style="position: relative" height="100vh">
    <v-app-bar color="deep-purple accent-4" dense dark>
      <v-toolbar-title>我的收藏</v-toolbar-title>
    </v-app-bar>

    <v-sheet
      class="overflow-y-auto overflow-x-hidden mt-0 mb-4"
      style="height: calc(100% - 110px)"
      width="100%"
    >
      <div v-if="$store.state.loading">
        <div class="d-flex align-start mt-2" v-for="i in 10" :key="i">
          <v-skeleton-loader width="220" height="90" type="card"></v-skeleton-loader>
          <div class="ml-3" style="width: 100%">
            <v-skeleton-loader
              class="mb-4"
              width="100%"
              height="20"
              type="card"
            ></v-skeleton-loader>
            <v-skeleton-loader
              class="mt-2 mb-3"
              width="100"
              height="15"
              type="card"
            ></v-skeleton-loader>
            <v-skeleton-loader
              class="mt-2 mb-3"
              width="100"
              height="15"
              type="card"
            ></v-skeleton-loader>
            <v-divider class="ma-0"></v-divider>
          </div>
        </div>
      </div>

      <v-card v-else color="basil" elevation="0" class="px-4">
        <v-card-text class="pa-0" v-show="trails.length">
          <v-list class="pa-0">
            <v-list-item-group color="primary">
              <v-list-item
                v-for="trail in trailReverce"
                :key="trail.id"
                class="pa-0 my-2"
                @click="toTrailInTroduction(trail.trail.id)"
              >
                <v-list-item-avatar class="my-0 mr-1" min-width="130" height="90" tile>
                  <v-img
                    class="grey lighten-2"
                    :src="getcoverImage(trail)"
                    style="border-radius: 10px"
                  >
                    <template v-slot:placeholder>
                      <v-skeleton-loader type="image"></v-skeleton-loader>
                    </template>

                    <v-btn
                      icon
                      style="position: absolute; top: 35%; left: 35%"
                      @click.stop="toggleFavorite(trail.trail.id)"
                    >
                      <v-icon color="red lighten-1 icon_border">mdi-heart</v-icon>
                    </v-btn>
                  </v-img>
                </v-list-item-avatar>

                <v-list-item-content class="pa-0 ml-2" style="height: 100%; width: 60%">
                  <v-skeleton-loader
                    v-if="!trail.trail.title"
                    class="mx-auto"
                    width="100%"
                    height="100"
                    type="article, actions"
                  ></v-skeleton-loader>

                  <v-list-item-title class="mb-2">{{ trail.trail.title }}</v-list-item-title>

                  <v-list-item-subtitle class="mt-1 mb-2">{{
                    trail.trail.location.county.name + trail.trail.location.name
                  }}</v-list-item-subtitle>

                  <v-list-item-subtitle class="mt-1 mb-2"
                    >全程約 {{ trail.trail.distance }} km</v-list-item-subtitle
                  >
                  <v-divider class="ma-0"></v-divider>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card-text>

        <v-card-text class="text-h6" v-show="!trails.length">您尚未有收藏的道路</v-card-text>
      </v-card>
    </v-sheet>
  </v-sheet>
</template>

<script>
export default {
  name: "SuccessPage",
  data() {
    return {
      tab: null,
      dialog: false,
      trails: [
        {
          trail: {
            coverImage: null,
            location: {
              county: {
                name: null,
              },
            },
          },
        },
      ],
    };
  },
  async mounted() {
    this.$store.commit("loading", true);
    await this.getTrails();
    this.$store.commit("loading", false);
  },
  methods: {
    async getTrails() {
      if (!this.$cookies.get("user_Id") || !this.$cookies.get("gohiking_token")) {
        this.$router.push({ name: "Login" });
      }

      await this.$axios
        .getApi(`/api/favorites?uuid=${this.$cookies.get("user_Id")}`)
        .then((res) => {
          if (!res) return;
          const { data } = res;
          this.trails = [...data];
          console.log(this.trails);
        });
    },
    toTrailInTroduction(id) {
      this.$router.push({ path: `/TrailInTroduction/${id}` });
    },
    async toggleFavorite(id) {
      await this.$axios
        .postApi("/api/favorite", {
          user_id: this.$cookies.get("user_Id"),
          trail_id: id,
        })
        .then((res) => {
          if (!res) return;
          this.getTrails();
        });
    },
    stopToNearby() {
      this.dialog = true;
      this.$nextTick(() => {
        this.tab = "/Collect";
      });
    },
    getcoverImage(trail) {
      return trail.trail.coverImage;
    },
  },
  computed: {
    trailReverce() {
      return this.trails.reverse();
    },
  },
};
</script>

<style lang="scss" scoped>
.footer-tabs-prev-none::v-deep {
  .v-slide-group__prev {
    display: none !important;
  }
}
</style>
