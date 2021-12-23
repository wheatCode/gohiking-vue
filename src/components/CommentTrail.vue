<template>
  <v-sheet class="overflow-hidden" style="position: relative">
    <v-toolbar color="success" class="white--text">
      <v-btn icon @click="$store.dispatch('toPrevRouter')">
        <v-icon large class="white--text icon_border">mdi-arrow-left</v-icon>
      </v-btn>

      <v-toolbar-title>評論步道</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon class="white--text" x-large @click="submitComment"> 發布 </v-btn>
    </v-toolbar>

    <v-card
      color="grey lighten-3"
      v-scroll.self="onScroll"
      elevation="0"
      class="overflow-y-auto"
      raised
      style="height: 90vh"
    >
      <!-- 日期 -->
      <v-list-item class="mt-2" style="background: white">
        <v-list-item-content>
          <v-list-item-titl class="text-h6">日期</v-list-item-titl>
          <v-card-text class="pa-0">
            <v-menu
              :nudge-right="40"
              v-model="menu2"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  class="pa-0"
                  append-icon="mdi-calendar"
                  placeholder="請輸入日期"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                  hide-details="auto"
                  v-model="comment.date"
                ></v-text-field>
              </template>

              <v-date-picker
                v-model="comment.date"
                @input="menu2 = false"
                :max="
                  new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
                    .toISOString()
                    .substr(0, 10) + 1
                "
              ></v-date-picker>
            </v-menu>
          </v-card-text>
        </v-list-item-content>
      </v-list-item>
      <!-- 步道記錄與評價 -->
      <v-list-item class="mt-2" style="background: white">
        <v-list-item-content>
          <v-list-item-title class="text-h6">步道記錄與評價</v-list-item-title>
          <v-card-text class="pa-0">
            <v-rating
              color="yellow darken-3"
              hover
              background-color="grey lighten-1"
              x-large
              v-model="comment.star"
            ></v-rating>
          </v-card-text>
        </v-list-item-content>
      </v-list-item>
      <!-- 難易度 -->
      <v-list-item class="mt-2" style="background: white">
        <v-list-item-content>
          <v-list-item-title class="text-h6"
            >難易度<span class="float-right">{{ showDifficult }}</span></v-list-item-title
          >
          <v-card-text class="pa-0">
            <v-slider
              :tick-labels="[1, 2, 3, 4, 5]"
              step="25"
              ticks="always"
              color="success"
              class="slider-success"
              thumb-fill-color="success"
              tick-size="2"
              v-model="difficulty"
            ></v-slider>
          </v-card-text>
        </v-list-item-content>
      </v-list-item>
      <!-- 景色 -->
      <v-list-item class="mt-2" style="background: white">
        <v-list-item-content>
          <v-list-item-title class="text-h6"
            >景色<span class="float-right">{{ showBeauty }}</span></v-list-item-title
          >
          <v-card-text class="pa-0">
            <v-slider
              :tick-labels="[1, 2, 3, 4, 5]"
              step="25"
              ticks="always"
              color="success"
              class="slider-success"
              thumb-fill-color="success"
              tick-size="2"
              v-model="beauty"
            ></v-slider>
          </v-card-text>
        </v-list-item-content>
      </v-list-item>
      <!-- 耗時 -->
      <v-list-item class="mt-2" style="background: white">
        <v-list-item-content>
          <v-list-item-title class="text-h6">耗時</v-list-item-title>
          <v-row class="d-flex align-center py-0">
            <v-col class="py-0">
              <v-text-field
                hide-details="auto"
                placeholder="小時"
                v-model="comment.hour"
              ></v-text-field>
            </v-col>

            <v-col class="py-0"
              ><v-text-field
                hide-details="auto"
                placeholder="分鐘"
                v-model="comment.min"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-list-item-title class="text-h6 mt-3">評論</v-list-item-title>
          <v-card-text class="pa-0">
            <v-textarea
              clearable
              clear-icon="mdi-close-circle"
              placeholder="說點什麼吧......"
              v-model="comment.content"
            ></v-textarea>
          </v-card-text>
          <v-card-action>
            照片上傳限制為15張以內
            <v-btn block color="success" outlined x-large class="mt-3">上傳照片</v-btn>
          </v-card-action>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </v-sheet>
</template>

<script>
export default {
  name: "SuccessPage",
  data() {
    return {
      menu2: false,
      comment: {
        user_id: null,
        trail_id: null,
        duration: null,
        hour: null,
        min: null,
        difficulty: null,
        beauty: null,
      },
    };
  },
  methods: {
    submitComment() {
      this.prepareData();
      this.$axios.postApi("/api/comment", this.comment).then((res) => {
        if (!res) return;
        this.$store.dispatch("toPrevRouter");
      });
    },
    prepareData() {
      this.comment.user_id = this.$cookies.get("user_Id");
      this.comment.trail_id = this.$route.params.id;
      this.comment.duration = parseInt(this.comment.hour * 60) + parseInt(this.comment.min);
      this.comment.difficulty = this.difficulty ? this.difficulty / 25 + 1 : null;
      this.comment.beauty = this.beauty ? this.beauty / 25 + 1 : null;
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
    showBeauty() {
      switch (this.beauty) {
        case 0:
          return "風景很差";
        case 25:
          return "風景不好";
        case 50:
          return "風景普通";
        case 75:
          return "風景還不錯";
        case 100:
          return "風景很美";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
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
