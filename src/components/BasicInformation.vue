<template>
  <v-card elevation="0" class="px-5 pb-5">
    <v-card-title class="pb-0">
      <h1 class="font-weight-bold text-h5 pb-4">建立個人資料</h1>
    </v-card-title>

    <v-card-text class="pb-0">
      <label for="" class="font-weight-bold black--text d-inline-block mt-0">姓名</label>
      <v-text-field
        ref="name"
        v-model="user.name"
        class="pt-0"
        placeholder="請輸入您的名稱"
        :rules="[() => !!user.name || '姓名是必填的']"
      ></v-text-field>

      <label for="" class="font-weight-bold black--text d-inline-block mt-0">性別</label>
      <v-select
        ref="gender"
        :items="[
          { text: '男', value: 1 },
          { text: '女', value: 2 },
        ]"
        label="請選擇"
        class="pt-1"
        v-model="user.gender"
        :rules="[() => typeof user.gender == 'number' || '性別是必填的']"
      ></v-select>

      <label for="" class="font-weight-bold black--text d-inline-block mt-0">國碼</label>
      <v-row>
        <v-col cols="4">
          <v-select
            ref="country_code_id"
            class="pt-0"
            :items="showCountycodes"
            label="台灣+8860"
            v-model="user.country_code_id"
            :rules="[() => !!user.country_code_id || '國碼是必填的']"
            item-text="text"
            item-value="value"
          >
          </v-select>
        </v-col>

        <v-col>
          <v-text-field
            ref="phone_number"
            class="disabled-style-none pt-0"
            placeholder="請輸入您的電話"
            v-model="user.phone_number"
            :rules="[
              () => !!user.phone_number || '電話是必填的',
              () => cellphoneRule.test(user.phone_number) || '填寫正確的電話格式',
            ]"
          ></v-text-field>
        </v-col>
      </v-row>

      <label for="" class="font-weight-bold black--text d-inline-block mt-0">生日</label>
      <v-menu :nudge-right="40" transition="scale-transition" offset-y min-width="auto">
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            ref="birth"
            class="disabled-style-none pa-0"
            v-model="user.birth"
            append-icon="mdi-calendar"
            placeholder="請輸入您的生日"
            readonly
            v-bind="attrs"
            v-on="on"
            :rules="[() => !!user.birth || '生日是必填的']"
          ></v-text-field>
        </template>

        <v-date-picker
          v-model="user.birth"
          :max="
            new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
              .toISOString()
              .substr(0, 10) + 1
          "
        ></v-date-picker>
      </v-menu>

      <label for="" class="font-weight-bold black--text d-inline-block mt-0">居住地</label>
      <v-select
        ref="county_id"
        :items="showCountries"
        label="請選擇"
        class="pt-1"
        v-model="showSelectCountries"
        item-text="text"
        item-value="value"
        :rules="[() => !!showSelectCountries || '居住地是必填的']"
      ></v-select>
    </v-card-text>
    <v-card-actions>
      <v-btn
        block
        elevation="2"
        color="success"
        x-large
        @click="submit"
        :loading="loading"
        :disabled="loading"
        >同意並註冊</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "SuccessPage",
  data() {
    return {
      countycodes: [],
      countries: [],
      formHasErrors: false,
      loading: false,
      cellphoneRule: /^(09)[0-9]{8}$/,
      user: {
        name: null,
        gender: null,
        phone_number: null,
        birth: null,
        county_id: null,
      },
    };
  },
  async mounted() {
    this.$store.commit("loading", true);
    await this.getCountryCode();
    await this.getCountry();
    this.$store.commit("loading", false);
  },
  methods: {
    async submit() {
      this.formHasErrors = false;
      Object.keys(this.form).forEach((f) => {
        if (!this.form[f]) this.formHasErrors = true;
        if (!this.$refs[f].validate(true)) this.formHasErrors = true;
      });
      if (!this.formHasErrors) {
        this.toRegister();
      }
    },
    async toRegister() {
      this.loading = true;
      await this.$axios.postApi("/api/profile", { ...this.user }).then((res) => {
        if (!res) return;
        const { data } = res;
        console.log(data);
        this.$router.push({ name: "Index" });
      });
      this.loading = false;
    },
    async getCountryCode() {
      await this.$axios.getApi("/api/countrycode").then((res) => {
        if (!res) return;
        const { data } = res;
        this.countycodes = [...data];
      });
    },
    async getCountry() {
      await this.$axios.getApi("/api/country").then((res) => {
        if (!res) return;
        const { data } = res;
        this.countries = [...data];
      });
    },
  },
  computed: {
    showGender() {
      switch (this.user.gender) {
        case 0:
          return "女";
        case 1:
          return "男";
      }
    },
    showCountycodes() {
      let countycodes = [];
      this.countycodes.forEach((item) => {
        countycodes.push({ text: item.phone_code, value: item.id });
      });
      return countycodes;
    },
    showCountries() {
      let countries = [];
      this.countries.forEach((item) => {
        countries.push({ text: item.name, value: item.id });
      });
      return countries;
    },
    showSelectCountryCode: {
      get() {
        return parseInt(this.user.country_code_id);
      },
      set(value) {
        return (this.user.country_code_id = value);
      },
    },
    showSelectCountries: {
      get() {
        return parseInt(this.user.county_id);
      },
      set(value) {
        return (this.user.county_id = value);
      },
    },
    showCellphone() {
      return (
        this.showCountycodes[this.showSelectCountryCode - 1].text + " " + this.user.phone_number
      );
    },
    form() {
      return {
        name: this.user.name,
        gender: this.user.gender,
        phone_number: this.user.phone_number,
        birth: this.user.birth,
        county_id: this.user.county_id,
        country_code_id: this.user.country_code_id,
      };
    },
  },
};
</script>

<style lang="scss" scoped></style>
