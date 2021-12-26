<template>
  <v-sheet color="grey lighten-3" class="overflow-hidden" style="position: relative" height="100vh">
    <v-tabs-items v-model="tab">
      <v-tab-item>
        <v-app-bar color="deep-purple accent-4" dense dark>
          <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
          <v-toolbar-title>GO HIKING</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon @click="tab = 1">
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" absolute left temporary style="z-index: 99999">
          <v-sheet class="px-3">
            <v-img :src="user.image" class="rounded-circle my-3" width="55" height="55"> </v-img>
            <div class="font-weight-bold text-center" style="width: 55px">
              {{ user.name || "訪客" }}
            </div>
            <span
              class="d-block grey--text text--darken-1 font-weight-regular text-subtitle-2 my-3"
              >{{ user.email || "--Guest--" }}</span
            >
          </v-sheet>

          <v-divider></v-divider>

          <v-list nav dense>
            <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
              <v-list-item @click="toPersonalFile">
                <v-list-item-icon>
                  <v-icon>mdi-account</v-icon>
                </v-list-item-icon>
                <v-list-item-content>個人檔案 </v-list-item-content>
              </v-list-item>

              <v-list-item to="/Privacy">
                <v-list-item-icon>
                  <v-icon>mdi-lock</v-icon>
                </v-list-item-icon>
                <v-list-item-content>隱私權政策 </v-list-item-content>
              </v-list-item>

              <v-list-item to="/Aboutus">
                <v-list-item-icon>
                  <v-icon>mdi-alert-circle</v-icon>
                </v-list-item-icon>
                <v-list-item-content>關於我們 </v-list-item-content>
              </v-list-item>

              <v-divider></v-divider>

              <v-list-item disabled>
                <v-list-item-icon></v-list-item-icon>
                <v-list-item-content
                  ><div class="d-flex text-caption">
                    <span class="black--text mr-auto">版本</span>1.0.1
                  </div></v-list-item-content
                >
              </v-list-item>

              <v-divider></v-divider>

              <v-list-item class="mt-3 primary--text" v-if="user.name" @click="signOut">
                <v-list-item-icon></v-list-item-icon>
                <v-list-item-content>登出</v-list-item-content>
              </v-list-item>
              <v-list-item class="mt-3 primary--text" v-else to="/login">
                <v-list-item-icon></v-list-item-icon>
                <v-list-item-content>登入</v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-navigation-drawer>

        <v-sheet
          color="grey lighten-3"
          class="overflow-y-auto"
          height="100vh"
          style="padding-bottom: 120px; vertical-align: middle"
        >
          <v-carousel interval="3500" :show-arrows="false" cycle height="300" hide-delimiters>
            <v-carousel-item v-for="banner in banners" :src="banner.image" :key="banner.id">
              <v-sheet class="white--text px-3 mt-15" style="background: rgba(96, 46, 46, 0.5)">
                <div class="text-h5 py-2">{{ banner.title }}</div>
                <div class="text-h6">{{ banner.content }}</div>
                <v-btn class="mt-4 mb-4" rounded color="success" :href="banner.link">
                  <span>查看步道</span>
                  <v-icon class="white--text">mdi-arrow-right</v-icon>
                </v-btn>
              </v-sheet>
            </v-carousel-item>
          </v-carousel>

          <v-sheet class="overflow-x-auto my-3" style="white-space: nowrap" height="110">
            <div v-if="$store.state.loading">
              <span class="d-inline-block mx-4 my-5" v-for="i in 12" :key="i">
                <v-skeleton-loader width="50" height="40" type="card"></v-skeleton-loader>
                <v-skeleton-loader
                  class="mt-2"
                  width="50"
                  height="20"
                  type="button"
                ></v-skeleton-loader>
              </span>
            </div>

            <v-btn
              text
              fab
              x-large
              class="mx-4 my-5"
              v-for="classification in classifications"
              :key="classification.id"
              @click="toQuickSearch(classification.id)"
            >
              <div class="d-flex flex-column-reverse">
                <span>{{ classification.name }}</span>
                <v-img
                  min-height="48"
                  v-if="classification.image"
                  :src="require(`@/assets/index/icon-${classification.image}`)"
                >
                  <template v-slot:placeholder>
                    <v-skeleton-loader type="button"></v-skeleton-loader></template
                ></v-img>

                <v-img
                  max-height="48"
                  max-width="48"
                  v-else
                  :src="require(`@/assets/index/camping.png`)"
                >
                  <template v-slot:placeholder>
                    <v-skeleton-loader type="button"></v-skeleton-loader> </template
                ></v-img>
              </div>
            </v-btn>
          </v-sheet>

          <h2 class="white mt-3 pl-3 pt-2 pb-2">行程推薦</h2>

          <v-sheet height="160" class="overflow-x-auto mb-2" style="white-space: nowrap">
            <div v-if="$store.state.loading">
              <span class="d-inline-block mx-3" v-for="i in 12" :key="i">
                <v-skeleton-loader width="175" height="100" type="card"></v-skeleton-loader>

                <v-skeleton-loader
                  class="mt-2"
                  width="175"
                  height="20"
                  type="card"
                ></v-skeleton-loader>

                <v-skeleton-loader
                  class="mt-2"
                  width="80"
                  height="15"
                  type="card"
                ></v-skeleton-loader>
              </span>
            </div>

            <div
              v-else
              class="d-inline-flex mx-3"
              v-for="article in articles"
              :key="article.id"
              @click="toTravel(article.id)"
            >
              <v-btn text height="100%" class="pa-0">
                <v-card style="width: 175px; box-shadow: 0 0">
                  <v-img
                    class="white--text align-end rounded grey lighten-2"
                    height="100px"
                    :src="article.image"
                  >
                    <template v-slot:placeholder>
                      <v-skeleton-loader type="image"></v-skeleton-loader></template
                  ></v-img>
                  <v-card-title class="text-subtitle-2 px-0 pt-2">{{
                    article.title | reduceText
                  }}</v-card-title>
                  <v-card-subtitle class="text-start text-caption px-0 pb-2">{{
                    article.created_at | date
                  }}</v-card-subtitle>
                </v-card>
              </v-btn>
            </div>
          </v-sheet>
        </v-sheet>
      </v-tab-item>
      <v-tab-item><search-trail /></v-tab-item>
      <v-tab-item></v-tab-item>
      <v-tab-item><collect /></v-tab-item>
    </v-tabs-items>

    <v-toolbar style="position: absolute; bottom: 0px; width: 100%; z-index: 9999">
      <v-tabs
        v-model="tab"
        background-color="deep-purple accent-4"
        centered
        dark
        icons-and-text
        class="footer-tabs-prev-none"
      >
        <v-tab class="pt-3">
          <span>首頁</span>
          <v-icon>mdi-history</v-icon>
        </v-tab>
        <v-tab class="pt-3">
          <span>步道搜尋</span>
          <v-icon>mdi-magnify</v-icon>
        </v-tab>
        <v-tab class="pt-3" @click.stop="stopToNearby">
          <span>附近步道</span>
          <v-icon>mdi-map-marker</v-icon>
        </v-tab>
        <v-tab class="pt-3">
          <span>我的收藏</span>
          <v-icon>mdi-heart</v-icon>
        </v-tab>
      </v-tabs>
    </v-toolbar>

    <v-dialog v-model="dialog" max-width="290">
      <v-card>
        <v-toolbar color="primary" dark>維護中</v-toolbar>
        <v-card-text>
          <div class="text-h6 py-3">附近步道維護中!!<br />請使用其他功能</div>
        </v-card-text>
        <v-card-actions class="justify-end">
          <v-btn text @click="dialog = false">關閉</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-sheet>
</template>

<script>
import SearchTrail from "@/components/SearchTrail";
import Collect from "@/components/Collect";

export default {
  name: "SuccessPage",
  components: {
    SearchTrail,
    Collect,
  },
  data() {
    return {
      tab: 0,
      dialog: false,
      banners: [],
      articles: [],
      classifications: [],
      user: {},
      drawer: false,
      colors: ["indigo", "warning", "pink darken-2", "red lighten-1", "deep-purple accent-4"],
      slides: ["First", "Second", "Third", "Fourth", "Fifth"],
    };
  },
  async mounted() {
    this.$store.commit("Loading", true);
    await this.getIndex();
    await this.getUser();
    this.$store.commit("Loading", false);
  },
  methods: {
    async getIndex() {
      await this.$axios.getApi("/api/home").then((res) => {
        if (!res) return;
        const { data } = res;
        const { banners, articles, classifications } = data;
        this.banners = [...banners];
        this.articles = [...articles];
        this.classifications = [...classifications];
      });
    },
    async getUser() {
      if (this.$cookies.get("user_Id")) {
        await this.$axios.getApi(`/api/user/${this.$cookies.get("user_Id")}`).then((res) => {
          if (!res) return;
          const { users } = res.data;
          this.user = { ...users };
        });
      } else {
        this.user = {};
      }
    },
    toTravel(id) {
      this.$router.push({ path: `/Article/${id}` });
    },
    toPersonalFile() {
      this.$router.push({
        path: "/PersonalFile",
        query: { user_id: this.user.id },
      });
    },
    toQuickSearch(id) {
      this.$router.push({ path: `/QuickSearch/${id}` });
    },
    signOut() {
      this.$cookies.remove("gohiking_token");
      this.$cookies.remove("user_Id");
      this.drawer = false;
      this.getUser();
    },
    stopToNearby() {
      this.dialog = true;
      this.$nextTick(() => {
        this.tab = 0;
      });
    },
  },
  filters: {
    reduceText(value) {
      if (!value) return "";
      else if (value.length > 10) {
        value = value.slice(0, 10) + "...";
      }
      return value;
    },
    date(value) {
      if (!value) return "";
      return value.slice(0, 10);
    },
  },
};
</script>

<style lang="scss" scoped>
::-webkit-scrollbar {
  display: none;
}
.theme--light.v-icon {
  color: #000;
}

.footer-tabs-prev-none::v-deep {
  .v-slide-group__prev {
    display: none !important;
  }
}
</style>
