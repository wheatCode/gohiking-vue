<template>
  <v-sheet>
    <v-toolbar color="success" class="white--text">
      <v-btn icon @click="$store.dispatch('toPrevRouter')">
        <v-icon large class="white--text icon_border">mdi-arrow-left</v-icon>
      </v-btn>
      <v-toolbar-title>關於我們</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-card rounded="0" flat>
      <img
        src="https://images.freeimages.com/images/large-previews/1e6/colorful-sky-1640504.jpg"
        alt=""
        height="180"
        width="100%"
      />
      <v-card-title class="px-5 pb-5 mt-0">
        <h1 class="font-weight-bold text-h6">關於Go Hiking</h1>
      </v-card-title>
      <v-card-text class="black--text px-5 pb-5">
        「Go Hiking App」<br />
        是一群喜歡從事戶外休閒活動的工程師與設計師共同開發，希望把熱愛山林親近自然的美好經驗，推廣給更多國人能夠一起參與體驗。同時我們也非常重視登山的「安全」，登山攻頂只是一個過程，「平安下山回家」才是最重要的，因此
        Go Hiking App
        能夠讓用戶輕鬆找到適合自己體能狀況的健行步道，更快速瞭解掌握山路狀況，並找到志同道合的朋友一起探索不孤單。
      </v-card-text>
    </v-card>
  </v-sheet>
</template>

<script>
export default {
  name: "SuccessPage",
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
