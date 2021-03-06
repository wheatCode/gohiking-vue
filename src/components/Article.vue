<template>
  <v-sheet class="overflow-hidden" style="position: relative">
    <div v-if="$store.state.loading">
      <v-skeleton-loader width="100%" type="image"></v-skeleton-loader>
    </div>

    <v-toolbar
      v-else
      flat
      height="250"
      class="toolbar"
      :style="`background-image:url(${article.image});background-size: cover`"
    >
      <v-btn icon @click="$store.dispatch('toPrevRouter')">
        <v-icon large class="white--text icon_border">mdi-arrow-left</v-icon>
      </v-btn>

      <v-spacer></v-spacer>
      <!-- 
      <v-btn icon @click="articlesHeart = !articlesHeart">
        <v-icon v-if="articlesHeart" class="white--text icon_border">mdi-heart</v-icon>
        <v-icon v-else color="red lighten-1 icon_border">mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon class="white--text icon_border"> mdi-share-variant</v-icon>
      </v-btn> -->
    </v-toolbar>

    <div v-if="$store.state.loading">
      <v-skeleton-loader width="100%" type="image"></v-skeleton-loader>
    </div>

    <v-sheet class="px-2 pt-1" height="130" v-else>
      <h2 class="py-2">{{ article.title }}</h2>
      <p>
        {{ article.content }}
      </p>
    </v-sheet>

    <v-divider></v-divider>

    <v-sheet
      class="overflow-y-auto overflow-x-hidden px-2 pt-1"
      style="height: calc(100vh - 385px)"
      width="100%"
    >
      <h3 class="pt-3">步道推薦</h3>

      <v-sheet>
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

        <v-card color="basil" elevation="0" flat v-else>
          <v-card-text class="pa-0" v-show="trails.length">
            <v-list class="pa-0">
              <v-list-item-group color="primary">
                <template v-for="trail in trails">
                  <v-list-item
                    :key="trail.id"
                    class="pa-0 my-2"
                    @click="toTrailInTroduction(trail.id)"
                  >
                    <v-list-item-avatar class="my-0 mr-1" min-width="130" height="90" tile>
                      <v-img
                        class="grey lighten-2"
                        :src="trail.coverImage"
                        style="border-radius: 10px"
                      >
                        <template v-slot:placeholder>
                          <v-skeleton-loader type="image"></v-skeleton-loader>
                        </template>

                        <v-btn
                          icon
                          style="position: absolute; top: 35%; left: 35%"
                          @click.stop="toggleFavorite(trail.id)"
                        >
                          <v-icon v-if="!trail.favorite" class="white--text icon_border"
                            >mdi-heart</v-icon
                          >
                          <v-icon v-else color="red lighten-1 icon_border">mdi-heart</v-icon>
                        </v-btn>
                      </v-img>
                    </v-list-item-avatar>

                    <v-list-item-content class="pa-0 ml-2" style="height: 100%; width: 60%">
                      <v-skeleton-loader
                        v-if="!trail.title"
                        class="mx-auto"
                        width="100%"
                        height="100"
                        type="article, actions"
                      ></v-skeleton-loader>

                      <v-list-item-title class="mb-2">{{ trail.title }}</v-list-item-title>

                      <v-list-item-subtitle class="mt-1 mb-2">{{
                        trail.location.county.name + trail.location.name
                      }}</v-list-item-subtitle>

                      <v-list-item-subtitle class="mt-1 mb-2"
                        >全程約 {{ trail.distance }} km</v-list-item-subtitle
                      >
                      <v-divider class="ma-0"></v-divider>
                    </v-list-item-content>
                  </v-list-item>
                </template>
              </v-list-item-group>
            </v-list>
          </v-card-text>

          <v-card-text class="pa-0" v-if="!trails.length"> 此分類無資料 </v-card-text>
        </v-card>
      </v-sheet>
    </v-sheet>
  </v-sheet>
</template>

<script>
export default {
  name: "SuccessPage",
  data() {
    return {
      articlesHeart: false,
      article: {},
      trails: [],
    };
  },
  async mounted() {
    this.$store.commit("loading", true);
    await this.getArticle();
    this.$store.commit("loading", false);
  },
  methods: {
    async getArticle() {
      await this.$axios
        .getApi(`/api/article/${this.$route.params.id}?uuid=${this.$cookies.get("user_Id")}`)
        .then((res) => {
          if (!res) return;
          const { data } = res;
          this.article = { ...data };
          this.trails = [...this.article.trails];
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
          this.getArticle();
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.toolbar::v-deep .v-toolbar__content {
  align-items: start;
}
.icon_border {
  text-shadow: 0 0 1px #000;
}
</style>
