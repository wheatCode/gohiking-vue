<template>
  <v-card elevation="2" class="px-5 pt-7 pb-5">
    <v-card-title class="mt-5">
      <h1 class="font-weight-bold text-h5">建立個人資料</h1>
    </v-card-title>
    <v-card-text>
      <label for="" class="font-weight-bold black--text d-inline-block mt-5">姓名</label>
      <v-text-field
        v-model="user.name"
        hide-details
        class="pt-0"
        placeholder="請輸入您的名稱"
      ></v-text-field>

      <label for="" class="font-weight-bold black--text d-inline-block mt-10">性別</label>
      <v-select
        :items="[
          { text: '男', value: 1 },
          { text: '女', value: 0 },
        ]"
        label="請選擇"
        class="pt-1"
        v-model="user.gender"
      ></v-select>

      <label for="" class="font-weight-bold black--text d-inline-block mt-5">姓名</label>
      <v-row>
        <v-col cols="4"
          ><v-select
            class="pt-1"
            :items="[
              { text: '男', value: 1 },
              { text: '女', value: 2 },
            ]"
            label="台灣+8860"
            v-model="user.country_code_id"
          ></v-select
        ></v-col>
        <v-col
          ><v-text-field
            class="pt-1"
            placeholder="請輸入您的手機號碼"
            v-model="user.phone_number"
          ></v-text-field
        ></v-col>
      </v-row>

      <label for="" class="font-weight-bold black--text d-inline-block mt-5">生日</label>
      <v-menu
        v-model="menu2"
        :nudge-right="40"
        transition="scale-transition"
        offset-y
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            class="pt-1"
            v-model="user.birth"
            append-icon="mdi-calendar"
            placeholder="請輸入您的生日"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="user.birth"
          @input="menu2 = false"
          :max="
            new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
              .toISOString()
              .substr(0, 10) + 1
          "
        ></v-date-picker>
      </v-menu>

      <label for="" class="font-weight-bold black--text d-inline-block mt-5">居住地</label>
      <v-select
        :items="[
          { text: '男', value: 1 },
          { text: '女', value: 2 },
        ]"
        label="請選擇"
        class="pt-1"
        v-model="user.county_id"
      ></v-select>
    </v-card-text>
    <v-card-actions>
      <v-btn block elevation="2" color="success" x-large @click="toRegister">同意並註冊</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "SuccessPage",
  data() {
    return {
      menu2: false,
      user: {
        name: null,
        gender: null,
        phone_number: null,
        birth: null,
        county_id: null,
      },
    };
  },
  methods: {
    async toRegister() {
      const vm = this;

      await this.$axios.postApi("/api/profile", { ...this.user }).then((res) => {
        if (!res) return;
        const { data } = res;
        console.log(data);
        vm.$router.push({ name: "Index" });
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
