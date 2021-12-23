<template>
  <v-sheet class="overflow-hidden" style="position: relative">
    <v-card color="basil" class="px-2 mb-2">
      <v-app-bar color="deep-purple accent-4" dense dark>
        <v-toolbar-title>附近步道</v-toolbar-title>
      </v-app-bar>

      <v-tabs v-model="tab" background-color="deep-purple accent-4" color="white" grow dark>
        <v-tab v-for="item in tabItems" :key="item.tab">
          {{ item.content }}
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item v-for="item in tabItems" :key="item">
          <v-card color="basil" flat>
            <v-card-text>
              <v-list three-line>
                <template v-for="item in items">
                  <v-list-item :key="item.title">
                    <v-list-item-avatar class="my-2" min-width="130" height="90" tile>
                      <v-img lazy-src="https://picsum.photos/id/11/10/6" :src="item.avatar">
                        <v-btn
                          class="white--text"
                          icon
                          style="position: absolute; top: 35%; left: 35%"
                        >
                          <v-icon>mdi-heart-outline</v-icon>
                        </v-btn>
                        <v-btn icon color="red lighten-1">
                          <v-icon>mdi-heart</v-icon>
                        </v-btn>
                      </v-img>
                    </v-list-item-avatar>
                    <v-list-item-content class="border" style="border-bottom: 1px solid #cfd8dc">
                      <v-list-item-title v-html="item.title"></v-list-item-title>
                      <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </template> </v-list
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
      tabItems: [
        { tab: 1, content: "賞楓" },
        { tab: 2, content: "挑戰" },
        { tab: 3, content: "溫泉" },
        { tab: 4, content: "親子" },
      ],
      items: [
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          title: "Brunch this weekend?",
          subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
        },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
          title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
        },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
          title: "Oui oui",
          subtitle:
            '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
        },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
          title: "Birthday gift",
          subtitle:
            '<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
        },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
          title: "Recipe to try",
          subtitle:
            '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
