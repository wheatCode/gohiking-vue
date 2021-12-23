<template>
  <v-sheet class="overflow-hidden" style="position: relative">
    <v-toolbar
      flat
      height="250"
      class="toolbar"
      :style="`background-image:url(${article.image});background-size: cover`"
    >
      <v-btn icon @click="$store.dispatch('toPrevRouter')">
        <v-icon large class="white--text icon_border">mdi-arrow-left</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn icon @click="articlesHeart = !articlesHeart">
        <v-icon v-if="articlesHeart" class="white--text icon_border">mdi-heart</v-icon>
        <v-icon v-else color="red lighten-1 icon_border">mdi-heart</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon class="white--text icon_border"> mdi-share-variant</v-icon>
      </v-btn>
    </v-toolbar>

    <v-sheet class="px-4 pt-3">
      <h2 class="py-3">{{ article.title }}</h2>
      <p>
        {{ article.content }}
      </p>
      <v-divider></v-divider>
    </v-sheet>

    <v-sheet class="px-4 pt-3">
      <h3 class="py-3">步道推薦</h3>
      <v-card color="basil" flat class="px-3">
        <v-card-text class="pa-0">
          <v-list class="pa-0">
            <v-list-item-group color="primary">
              <template v-for="trail in trails">
                <v-list-item :key="trail.id" class="pa-0 my-2">
                  <v-list-item-avatar class="my-0" min-width="130" height="90" tile>
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
                        @click="articlesHeart = !articlesHeart"
                      >
                        <v-icon v-if="articlesHeart" class="white--text icon_border"
                          >mdi-heart</v-icon
                        >
                        <v-icon v-else color="red lighten-1 icon_border">mdi-heart</v-icon>
                      </v-btn>
                    </v-img>
                  </v-list-item-avatar>

                  <v-list-item-content
                    class="pa-0"
                    style="position: absolute; top: 0; left: 150px; height: 100%; width: 73%"
                    @click="toTrailInTroduction(trail.id)"
                  >
                    <v-skeleton-loader
                      v-if="!trail.title"
                      class="mx-auto"
                      width="100%"
                      height="100"
                      type="article, actions"
                    ></v-skeleton-loader>

                    <v-list-item-title>{{ trail.title }}</v-list-item-title>

                    <v-list-item-subtitle class="mt-1">{{
                      trail.location.county.name + trail.location.name
                    }}</v-list-item-subtitle>

                    <v-list-item-subtitle class="mt-1"
                      >全程約 {{ trail.distance }} km</v-list-item-subtitle
                    >
                    <v-divider class="ma-0"></v-divider>
                  </v-list-item-content>
                </v-list-item>
              </template>
            </v-list-item-group>
          </v-list>
        </v-card-text>
      </v-card>
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
    const { data } = await this.$axios.getApi(`/api/article/${this.$route.params.id}`);
    this.article = { ...data };
    this.trails = [...this.article.trails];
    console.log(data);
  },
  methods: {
    toTrailInTroduction(id) {
      this.$router.push({ path: `/TrailInTroduction/${id}` });
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
