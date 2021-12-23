<template>
  <v-sheet class="overflow-hidden" style="position: relative">
    <v-card color="basil" class="px-2 mb-2">
      <v-app-bar color="deep-purple accent-4" dense dark>
        <v-btn icon>
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <v-toolbar-title>附近景點</v-toolbar-title>
      </v-app-bar>

      <v-tabs v-model="tab" background-color="deep-purple accent-4" color="white" grow dark>
        <v-tab v-for="item in tabItems" :key="item.tab">
          {{ item.content }}
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item v-for="item in tabItems" :key="item">
          <v-card color="basil" flat>
            <v-card-text class="pt-0">
              <v-list class="pt-0">
                <v-list-item-group>
                  <template v-for="(item, index) in items">
                    <v-list-item :key="item.title">
                      <template>
                        <v-list-item-content>
                          <v-list-item-title v-text="item.title"></v-list-item-title>
                        </v-list-item-content>

                        <v-list-item-action>
                          <v-icon color="grey lighten-1"> mdi-chevron-right</v-icon>
                        </v-list-item-action>
                      </template>
                    </v-list-item>

                    <v-divider v-if="index < items.length - 1" :key="index"></v-divider>
                  </template>
                </v-list-item-group> </v-list
            ></v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>

    <v-toolbar>
      <v-tabs v-model="tab2" background-color="deep-purple accent-4" centered dark icons-and-text>
        <v-tab>
          <span>首頁</span>
          <v-icon>mdi-history</v-icon>
        </v-tab>
        <v-tab>
          <span>步道搜尋</span>
          <v-icon>mdi-heart</v-icon>
        </v-tab>
        <v-tab>
          <span>附近步道</span>
          <v-icon>mdi-map-marker</v-icon>
        </v-tab>
        <v-tab>
          <span>我的收藏</span>
          <v-icon>mdi-map-marker</v-icon>
        </v-tab>
      </v-tabs>
    </v-toolbar>
  </v-sheet>
</template>

<script>
export default {
  name: "SuccessPage",
  data() {
    return {
      tab: null,
      selected: [2],
      tabItems: [
        { tab: 1, content: "民宿" },
        { tab: 2, content: "溫泉" },
        { tab: 3, content: "美食" },
        { tab: 4, content: "露營區" },
      ],
      items: [
        { title: "Ali Connors" },
        { title: "me, Scrott, Jennifer" },
        { title: "Sandra Adams" },
        { title: "Trevor Hansen" },
        { title: "Britta Holt" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
