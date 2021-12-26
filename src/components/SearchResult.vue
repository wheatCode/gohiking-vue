<template>
  <v-sheet class="overflow-hidden" style="position: relative" height="100vh">
    <v-toolbar flat>
      <v-btn icon @click="$store.dispatch('toPrevRouter')">
        <v-icon size="30" class="icon_border">mdi-arrow-left</v-icon>
      </v-btn>
    </v-toolbar>

    <v-sheet class="d-flex align-center mt-0 mb-4 px-4">
      <v-text-field
        solo
        flat
        v-model="trailfilter.filters.title"
        label="搜尋步道"
        hide-details="auto"
        prepend-inner-icon="mdi-magnify"
        append-icon="mdi-microphone"
        class="input_color"
        @keyup="searchTrail"
        @keypress="searchTrail"
      ></v-text-field>

      <v-btn icon @click.stop="drawer = !drawer">
        <v-icon>mdi-filter</v-icon>
      </v-btn>

      <v-navigation-drawer v-model="drawer" absolute temporary right width="90%">
        <v-list-item class="pa-0">
          <v-list-item-content class="success--text green lighten-5">
            <v-list-item-title class="text-h6 px-3 pt-5 pb-2">篩選搜尋</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-card elevation="0" class="overflow-y-auto" style="height: calc(100% - 130px)" raised>
          <!-- 主題 -->
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>主題</v-list-item-title>
              <v-btn-toggle
                v-model="classification"
                tile
                color="deep-purple accent-3"
                class="mt-3"
                group
              >
                <v-row>
                  <v-col
                    cols="6"
                    v-for="classification in classifications"
                    v-show="classification.id <= 4 || showAllClassification"
                    :key="classification.id"
                  >
                    <v-btn block large depressed active-class="bg-outlined-success">{{
                      classification.name
                    }}</v-btn>
                  </v-col>
                </v-row>
              </v-btn-toggle>

              <div
                class="text-center grey--text text--darken-1 mt-3"
                style="cursor: pointer"
                @click="showAllClassification = !showAllClassification"
              >
                顯示更多
                <v-icon v-if="showAllClassification" class="grey--text text--darken-1 pb-1"
                  >mdi-chevron-up</v-icon
                ><v-icon v-else class="grey--text text--darken-1 pb-1">mdi-chevron-down</v-icon>
              </div>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>
          <!-- 難易度 -->
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title
                >難易度<span class="float-right">{{ showDifficult }}</span></v-list-item-title
              >
              <v-card-text>
                <v-slider
                  :tick-labels="[1, 2, 3, 4, 5]"
                  v-model="difficulty"
                  step="25"
                  ticks="always"
                  color="success"
                  class="slider-success"
                  thumb-fill-color="success"
                  tick-size="2"
                ></v-slider>
              </v-card-text>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>
          <!-- 評價 -->
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title
                >評價<span class="float-right">{{ showStar }}顆星</span></v-list-item-title
              >
              <v-card-text>
                <v-slider
                  :tick-labels="[1, 2, 3, 4, 5]"
                  v-model="evaluation"
                  step="25"
                  ticks="always"
                  color="success"
                  class="slider-success"
                  thumb-fill-color="success"
                  tick-size="2"
                ></v-slider>
              </v-card-text>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>
          <!-- 海拔 -->
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title
                >海拔<span class="float-right">{{ showTibet }}</span></v-list-item-title
              >
              <v-card-text>
                <v-range-slider
                  :tick-labels="[, 1000, 2000, 3000]"
                  v-model="tibet"
                  min="0"
                  max="4"
                  ticks="always"
                  color="success"
                  class="slider-success"
                  thumb-fill-color="success"
                  tick-size="2"
                ></v-range-slider>
              </v-card-text>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>
          <!-- 縣市 -->
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>縣市</v-list-item-title>
              <v-btn-toggle v-model="county" tile color="deep-purple accent-3" class="mt-3" group>
                <v-row>
                  <v-col
                    cols="6"
                    v-for="country in countries"
                    :key="country.id"
                    v-show="country.id <= 4 || showAllCountries"
                  >
                    <v-btn block large depressed active-class="bg-outlined-success">{{
                      country.name
                    }}</v-btn>
                  </v-col>
                </v-row>
              </v-btn-toggle>

              <div
                class="text-center grey--text text--darken-1 mt-3"
                style="cursor: pointer"
                @click="showAllCountries = !showAllCountries"
              >
                顯示更多
                <v-icon v-if="showAllCountries" class="grey--text text--darken-1 pb-1"
                  >mdi-chevron-up</v-icon
                ><v-icon v-else class="grey--text text--darken-1 pb-1">mdi-chevron-down</v-icon>
              </div>
            </v-list-item-content>
          </v-list-item>
        </v-card>

        <div style="border-top: 1px solid #e0e0e0">
          <v-row class="px-4 py-3">
            <v-col cols="6"
              ><v-btn block color="success" outlined @click="searchTrailReset">重設</v-btn></v-col
            >
            <v-col cols="6"><v-btn block color="success" @click="searchTrail">使用</v-btn></v-col>
          </v-row>
        </div>
      </v-navigation-drawer>
    </v-sheet>

    <h3 class="px-4 pt-0 pb-1">搜尋結果</h3>

    <v-sheet
      class="px-4 overflow-y-auto overflow-x-hidden"
      style="height: calc(100% - 150px)"
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

        <v-card-text class="pa-0" v-if="!trails.length"> 查無資料請重新篩選條件 </v-card-text>
      </v-card>
    </v-sheet>
  </v-sheet>
</template>

<script>
export default {
  name: "SuccessPage",
  data() {
    return {
      showAllClassification: false,
      showAllCountries: false,
      classifications: [],
      countries: [],
      tibet: [0, 0],
      drawer: false,
      classification: null,
      difficulty: null,
      evaluation: null,
      county: null,
      trailfilter: {
        filters: {
          title: null,
          difficulty: null,
          evaluation: null,
          altitude1: null,
          altitude2: null,
          county: null,
          classification: null,
        },
      },
      trails: [1],
    };
  },
  async mounted() {
    this.$store.commit("loading", true);
    await this.getClassification();
    await this.getCountry();
    this.trailfilter.filters.title = this.$route.params.title || null;
    this.classification = this.$route.params.classification
      ? this.$route.params.classification - 1
      : null;
    await this.searchTrail();
    this.$store.commit("loading", false);
  },
  methods: {
    toTrailInTroduction(id) {
      this.$router.push({ path: `/TrailInTroduction/${id}` });
    },
    async searchTrail() {
      this.drawer = false;
      this.setFilterData();
      await this.getTrails();
    },
    setFilterData() {
      this.trailfilter.filters.classification = this.classification + 1;
      this.trailfilter.filters.county = this.county ? this.county + 1 : null;
      this.trailfilter.filters.difficulty = this.difficulty ? this.difficulty / 25 + 1 : null;
      this.trailfilter.filters.evaluation = this.evaluation ? this.evaluation / 25 + 1 : null;
      this.trailfilter.filters.altitude1 = this.tibet[0] * 1000;
      this.trailfilter.filters.altitude2 = this.tibet[1] * 1000;
    },
    async getClassification() {
      await this.$axios.getApi("/api/classification").then((res) => {
        const { data } = res;
        this.classifications = [...data];
      });
    },
    async getCountry() {
      await this.$axios.getApi("/api/country").then((res) => {
        const { data } = res;
        this.countries = [...data];
      });
    },
    async getTrails() {
      await this.$axios
        .postApi("/api/trail", {
          filters: { ...this.trailfilter.filters },
          uuid: this.$cookies.get("user_Id"),
        })
        .then((res) => {
          if (!res) return;
          const { data } = res;
          this.trails = [...data];
          console.log(data);
        });
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
    searchTrailReset() {
      this.classification = null;
      this.difficulty = null;
      this.evaluation = null;
      this.county = null;
      this.tibet = [0, 0];
    },
  },
  computed: {
    showDifficult() {
      switch (this.difficulty) {
        case 0:
          return "非常簡單";
        case 25:
          return "簡單";
        case 50:
          return "覺得還好";
        case 75:
          return "困難";
        case 100:
          return "非常困難";
      }
    },
    showStar() {
      switch (this.evaluation) {
        case 0:
          return 1;
        case 25:
          return 2;
        case 50:
          return 3;
        case 75:
          return 4;
        case 100:
          return 5;
      }
    },
    showTibet() {
      let tibetText;
      if (this.tibet[0] == this.tibet[1]) return this.tibet[0] * 1000 + "以上";
      switch (this.tibet[0]) {
        case 0:
          tibetText = 0;
          break;
        case 1:
          tibetText = 1000;
          break;
        case 2:
          tibetText = 2000;
          break;
        case 3:
          tibetText = 3000;
          break;
      }
      tibetText = tibetText + "至";
      switch (this.tibet[1]) {
        case 1:
          tibetText = tibetText + 1000;
          break;
        case 2:
          tibetText = tibetText + 2000;
          break;
        case 3:
          tibetText = tibetText + 3000;
          break;
        case 4:
          tibetText = tibetText + 4000;
          break;
      }
      return tibetText + "M";
    },
  },
};
</script>

<style lang="scss" scoped>
.input_color::v-deep .v-input__slot {
  background-color: #e5e5ea !important;
  color: #919191 !important;
}
//v-btn-group
.bg-outlined-success::v-deep {
  border: solid 1px green;
  background-color: white !important;
  .v-btn__content {
    color: green;
  }
}
.theme--light.v-btn--active:hover::before,
.theme--light.v-btn--active::before {
  opacity: 0;
}
//v-slider
.slider-success::v-deep {
  .v-slider__tick {
    background-color: rgb(99, 196, 120);
  }
  .primary.lighten-3 {
    background-color: green !important;
    border-color: green !important;
    height: 5px;
  }
  .v-slider--horizontal .v-slider__track-container {
    height: 5px;
  }
  .v-slider__thumb {
    width: 20px;
    height: 20px;
    background-color: #fff !important;
    border: green solid 4px;
    &:before {
      width: 0px;
    }
  }
  .v-slider__tick .v-slider__tick-label {
    top: 18px;
    left: 3px;
  }
}
</style>
