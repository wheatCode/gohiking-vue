<template>
  <div>
    <div v-if="$store.state.loading">
      <v-skeleton-loader width="100%" type="image"></v-skeleton-loader>
      <v-skeleton-loader width="100%" type="image"></v-skeleton-loader>
      <v-skeleton-loader width="100%" type="image"></v-skeleton-loader>
      <v-skeleton-loader width="100%" type="image"></v-skeleton-loader>
      <v-skeleton-loader width="100%" type="image"></v-skeleton-loader>
      <v-skeleton-loader width="100%" type="image"></v-skeleton-loader>
      <v-skeleton-loader width="100%" type="image"></v-skeleton-loader>
    </div>

    <v-sheet
      v-else
      color="grey lighten-3"
      class="overflow-hidden"
      style="position: relative; height: 100vh"
    >
      <v-carousel
        cycle
        height="150"
        hide-delimiter-background
        :show-arrows="false"
        style="position: relative"
      >
        <v-toolbar
          flat
          color="transparent"
          style="position: absolute; top: 0px; z-index: 999; width: 100%"
        >
          <v-btn icon @click="$store.dispatch('toPrevRouter')">
            <v-icon large class="white--text icon_border">mdi-arrow-left</v-icon>
          </v-btn>

          <v-spacer></v-spacer>

          <v-btn icon @click="toggleFavorite(true)" v-if="!showHeart">
            <v-icon class="white--text icon_border">mdi-heart</v-icon>
          </v-btn>
          <v-btn icon @click="toggleFavorite(false)" v-else>
            <v-icon color="red lighten-1 icon_border">mdi-heart</v-icon>
          </v-btn>

          <ShareNetwork
            network="facebook"
            :url="shareUrl"
            :title="trail.title"
            :description="trail.intro"
            :quote="shareQuote"
            :hashtags="shareChips"
            style="text-decoration: none"
          >
            <v-icon class="white--text icon_border"> mdi-share-variant</v-icon>
          </ShareNetwork>
        </v-toolbar>

        <v-carousel-item :src="trail.coverImage"></v-carousel-item>
      </v-carousel>

      <v-sheet class="d-flex justify-space-between align-center px-3 py-2">
        <h1 class="text-h5">{{ trail.title }}</h1>

        <v-chip
          label
          class="my-2"
          style="
            border: 1px solid #00d04c !important;
            color: #00d04c;
            background-color: rgba(0, 208, 76, 0.1);
          "
        >
          <v-icon color="#00d04c" left>mdi-map-marker </v-icon>
          {{ trail.latitude | round }}<span class="ml-1">km</span>
        </v-chip>
      </v-sheet>

      <div class="overflow-y-auto pb-15" style="height: 70%">
        <v-sheet class="mt-3 py-2 px-3">
          <v-chip outlined class="ma-1" v-for="chip in chips" :key="chip.chip.id">
            {{ chip.chip.name }}
          </v-chip>
        </v-sheet>

        <v-sheet class="mt-3 px-3">
          <v-list>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title
                  >海拔<span class="float-right">{{ trail.altitude }} m</span></v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list-item>
              <v-list-item-content>
                <v-list-item-title
                  >全長<span class="float-right">{{ trail.distance }} km</span></v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list-item>
              <v-list-item-content>
                <v-list-item-title
                  >分類<span class="float-right">{{ trail.class }}</span></v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list-item>
              <v-list-item-content>
                <v-list-item-title
                  >行程時間<span class="float-right">2 h 50 m</span></v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list-item>
              <v-list-item-content>
                <v-list-item-title
                  >地區<span class="float-right"
                    >{{ trail.location.county.name }}{{ trail.location.name }}</span
                  ></v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list-item>
              <v-list-item-content>
                <v-list-item-title
                  >路面狀況<span class="float-right">{{
                    trail.roadstatus
                  }}</span></v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>
          </v-list>
        </v-sheet>

        <!-- <v-sheet class="mt-3 px-3 py-3">
        <h3>登山口</h3>
        <v-chip color="green" label> Tags </v-chip>
      </v-sheet> -->

        <!-- <v-sheet class="mt-3 px-3 py-3">
        <h3>步道雷達圖</h3>
      </v-sheet> -->

        <v-sheet class="mt-3 px-3 py-3">
          <h3>步道介紹</h3>
          <p class="mb-0">
            {{ trail.intro }}
          </p>
        </v-sheet>

        <!-- <v-sheet class="mt-3 px-3 py-3">
        <h3>步道照片</h3>
      </v-sheet> -->

        <!-- <v-sheet class="mt-3 px-3 py-3">
        <h3>步道消息</h3>
      </v-sheet> -->

        <!-- <v-sheet class="mt-3 px-3 py-3">
        <h3>鄰近景點</h3>
      </v-sheet> -->

        <!-- <v-sheet class="mt-3 px-3 py-3">
        <h3>步道記錄與評價</h3>

        <template>
          <div class="d-flex align-center">
            <v-rating
              v-model="trail.evaluation"
              color="yellow darken-3"
              background-color="grey darken-1"
              empty-icon="$ratingFull"
              half-increments
              hover
              readonly
            ></v-rating>

            <h3 class="ml-3">{{ trail.evaluation }}</h3>
          </div>
        </template>
      </v-sheet> -->

        <v-sheet class="mt-3 px-3 py-3" v-if="comments.length >= 1">
          <h3>步道記錄與評價</h3>

          <v-card
            class="mx-auto mt-2"
            elevation="0"
            v-for="comment in commentReverce"
            :key="comment.id"
          >
            <v-card-title class="text-subtitle-1 pa-0 ml-1">{{ comment.user.name }}</v-card-title>

            <v-card-text class="pa-0">
              <div class="d-flex justify-space-between">
                <template>
                  <div class="d-flex align-center justify-start">
                    <v-rating
                      v-model="comment.star"
                      color="yellow darken-3"
                      background-color="grey darken-1"
                      empty-icon="$ratingFull"
                      half-increments
                      dense
                      hover
                      readonly
                    ></v-rating>
                  </div>
                </template>

                <v-chip
                  label
                  class=""
                  style="
                    border: 1px solid #00d04c !important;
                    color: #00d04c;
                    background-color: rgba(0, 208, 76, 0.1);
                  "
                >
                  {{ comment.beauty | showBeauty }}
                </v-chip>
              </div>

              <p class="ml-1 mb-2">{{ comment.content }}</p>

              <img
                :src="`https://picsum.photos/id/${comment.id}/200/300`"
                alt=""
                width="100"
                height="100"
                class="ml-1"
              />
            </v-card-text>
            <v-card-subtitle class="pa-0 ml-1"
              >{{ comment.date }} · 來回時間: {{ comment.duration | durationType }}</v-card-subtitle
            >
            <v-divider class="my-2"></v-divider>
          </v-card>
        </v-sheet>

        <!-- <v-sheet class="mt-3 px-3">
        <h3>相關文章</h3>
      </v-sheet>

      <v-sheet class="mt-3 px-3">
        <h3>相似步道</h3>
      </v-sheet> -->
      </div>

      <v-footer padless style="position: absolute; bottom: 0px; width: 100%">
        <v-row>
          <v-col cols="4" class="px-0"
            ><v-btn
              block
              color="success"
              tile
              class="px-3 d-flex flex-grow-0"
              outlined
              x-large
              @click="toCommentTrail"
              ><v-icon>mdi-message-bulleted</v-icon><span>評論步道</span></v-btn
            ></v-col
          >
          <v-col cols="8" class="px-0"
            ><v-btn block color="success" tile class="pa-0" x-large @click="dialog = true"
              >打開GPS路線</v-btn
            ></v-col
          >
        </v-row>
      </v-footer>

      <v-dialog v-model="dialog" max-width="290">
        <v-card>
          <v-toolbar color="primary" dark>維護中</v-toolbar>
          <v-card-text>
            <div class="text-h6 py-3">GPS維護中!!<br />請使用其他功能</div>
          </v-card-text>
          <v-card-actions class="justify-end">
            <v-btn text @click="dialog = false">關閉</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-sheet>
  </div>
</template>

<script>
export default {
  name: "SuccessPage",
  data() {
    return {
      showHeart: false,
      dialog: false,
      trail: {},
      users: [],
      chips: [],
      comments: [],
    };
  },
  async mounted() {
    this.$store.commit("loading", true);
    await this.getTrail();
    this.checkFavorite();
    this.$store.commit("loading", false);
  },
  methods: {
    async getTrail() {
      await this.$axios.getApi(`/api/trail/${this.$route.params.id}`).then((res) => {
        if (!res) return;
        const { data } = res;
        const { chip_trail, comments, users } = data;
        this.trail = { ...data };
        this.chips = [...chip_trail];
        this.comments = [...comments];
        this.users = [...users];
        console.log(data);
      });
    },
    checkFavorite() {
      this.users.forEach((item) => {
        item.id == this.$cookies.get("user_Id") ? (this.showHeart = true) : "";
      });
    },
    toggleFavorite(status) {
      this.showHeart = status;

      this.$axios
        .postApi("/api/favorite", {
          user_id: this.$cookies.get("user_Id"),
          trail_id: this.$route.params.id,
        })
        .then((res) => {
          if (!res) return;
        });
    },
    toCommentTrail(id) {
      this.$router.push({ path: `/CommentTrail/${this.$route.params.id}` });
    },
  },
  filters: {
    durationType(value) {
      if (!value) return "";
      const hour = parseInt(value / 60);
      const min = value - hour * 60;
      return `${hour}h ${min}m`;
    },
    showBeauty(value) {
      switch (value) {
        case 1:
          return "風景很差";
        case 2:
          return "風景不好";
        case 3:
          return "風景普通";
        case 4:
          return "風景還不錯";
        case 5:
          return "風景很美";
        default:
          return "無評價";
      }
    },
    round(value) {
      return Math.round(value * 100) / 100;
    },
  },
  computed: {
    commentReverce() {
      return this.comments.reverse();
    },
    shareChips() {
      let show = "";
      this.chips.forEach((item) => {
        show += item.chip.name + ",";
      });
      return show;
    },
    shareQuote() {
      return `想與大家分享得步道-${this.trail.title}`;
    },
    shareUrl() {
      return window.location.href;
    },
  },
};
</script>

<style lang="scss" scoped></style>
