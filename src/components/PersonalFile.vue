<template>
  <div>
    <v-toolbar color="success" class="white--text">
      <v-btn icon @click="$store.dispatch('toPrevRouter')" class="white--text">
        <v-icon size="30" class="icon_border">mdi-arrow-left</v-icon>
      </v-btn>

      <v-toolbar-title>個人檔案</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon class="white--text" x-large v-if="!notEdit && !cropper" @click="updateUser">
        完成
      </v-btn>

      <v-btn icon class="white--text" v-else-if="notEdit && !cropper" @click="notEdit = !notEdit">
        <v-icon size="30" class="icon_border">mdi-pencil</v-icon>
      </v-btn>

      <v-btn icon class="white--text" x-large v-else @click="setCropImage"> 下一步 </v-btn>
    </v-toolbar>

    <image-upload @editCropper="editCropper" ref="imageUpload"></image-upload>

    <v-sheet v-show="cropper">
      <cropper :cropper="cropper"></cropper>
    </v-sheet>

    <v-sheet
      v-if="!cropper"
      class="overflow-hidden"
      style="position: relative"
      height="100vh"
      color="grey lighten-4"
    >
      <v-sheet class="text-center mt-5 mb-3" color="transparent" height="170px">
        <v-sheet
          class="rounded-circle my-3 mx-auto overflow-hidden"
          :style="{
            position: 'relative',
            backgroundImage: `url(${cropperImage})`,
            backgroundSize: '95% 95%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }"
          width="100"
          height="100"
        >
          <v-btn
            block
            v-if="!notEdit"
            class="black white--text"
            style="position: absolute; bottom: 0px; width: 100%; cursor: pointer"
            @click="chagneImage"
          >
            更換
          </v-btn>
        </v-sheet>

        <span class="d-block" v-if="notEdit">{{ user.name }}</span>
        <span class="d-block">{{ user.email }}</span>
      </v-sheet>

      <v-card
        elevation="0"
        rounded="0"
        class="text-center"
        min-height="200"
        :loading="$store.state.loading"
      >
        <v-card-text class="px-5 pb-2">
          <div v-if="!$store.state.loading">
            <!-- 姓名 -->
            <v-row class="py-2">
              <v-col cols="3" class="d-flex align-center py-0">
                <label>姓名</label>
              </v-col>

              <v-col class="py-0">
                <v-text-field
                  ref="name"
                  class="disabled-style-none pt-0"
                  placeholder="請輸入您的姓名"
                  v-model="user.name"
                  :disabled="notEdit"
                  hide-details="auto"
                  :rules="[() => !!user.name || '姓名是必填的']"
                ></v-text-field>
              </v-col>
            </v-row>
            <!-- 性別 -->
            <v-row class="py-2">
              <v-col cols="3" class="d-flex align-center py-0">
                <label>性別</label>
              </v-col>

              <v-col class="py-0">
                <v-select
                  ref="gender"
                  :items="[
                    { text: '男', value: 1 },
                    { text: '女', value: 0 },
                  ]"
                  placeholder="請選擇"
                  class="pa-0"
                  v-model="user.gender"
                  v-if="!notEdit"
                  hide-details="auto"
                  :rules="[() => !!user.gender || '性別是必填的']"
                ></v-select>

                <v-text-field
                  class="disabled-style-none pt-0"
                  v-model="showGender"
                  hide-details="auto"
                  v-else
                  disabled
                ></v-text-field>
              </v-col>
            </v-row>
            <!-- 國碼 -->
            <v-row class="py-2">
              <v-col cols="3" class="d-flex align-center py-0">
                <label>國碼</label>
              </v-col>

              <v-col v-if="notEdit" class="py-0"
                ><v-text-field
                  class="disabled-style-none pt-0"
                  disabled
                  :value="showCellphone"
                  hide-details="auto"
                ></v-text-field
              ></v-col>

              <v-col cols="4" class="py-0 pr-0" v-if="!notEdit"
                ><v-select
                  :items="showCountycodes"
                  class="pt-0"
                  v-model="showSelectCountryCode"
                  item-text="text"
                  item-value="value"
                  hide-details="auto"
                ></v-select>
              </v-col>

              <v-col class="py-0 pl-0 pr-3" v-if="!notEdit"
                ><v-text-field
                  ref="phone_number"
                  class="disabled-style-none pt-0"
                  placeholder="請輸入您的電話"
                  v-model="user.phone_number"
                  hide-details="auto"
                  :rules="[() => !!user.phone_number || '電話是必填的']"
                ></v-text-field
              ></v-col>
            </v-row>
            <!-- 生日 -->
            <v-row class="py-2">
              <v-col cols="3" class="d-flex align-center py-0">
                <label>生日</label>
              </v-col>

              <v-col class="py-0" v-if="!notEdit">
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
                      hide-details="auto"
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
              </v-col>

              <v-col class="text-start py-0" v-else
                ><v-text-field
                  class="disabled-style-none pt-0"
                  :value="user.birth"
                  disabled
                  hide-details="auto"
                ></v-text-field>
              </v-col>
            </v-row>
            <!-- 居住地 -->
            <v-row class="py-2">
              <v-col cols="3" class="d-flex align-center py-0">
                <label>居住地</label>
              </v-col>

              <v-col class="text-start py-0"
                ><v-text-field
                  class="disabled-style-none pt-0"
                  :value="user.county_id ? countries[user.county_id - 1].name : null"
                  :disabled="notEdit"
                  hide-details="auto"
                  v-if="notEdit"
                ></v-text-field>

                <v-select
                  ref="county_id"
                  :items="showCountries"
                  class="pt-0"
                  v-model="showSelectCountries"
                  item-text="text"
                  item-value="value"
                  hide-details="auto"
                  :rules="[() => !!showSelectCountries || '居住地是必填的']"
                  v-else
                ></v-select
              ></v-col>
            </v-row>
          </div>
        </v-card-text>
      </v-card>
    </v-sheet>
  </div>
</template>

<script>
import Cropper from "@/components/Cropper";
import ImageUpload from "@/components/ImageUpload";

export default {
  name: "PersonalFile",
  components: {
    Cropper,
    ImageUpload,
  },
  data() {
    return {
      cropperImage: null,
      cropper: false,
      notEdit: true,
      user_id: false,
      country_code: 5,
      countycodes: [],
      countries: [],
      user: {},
    };
  },
  async mounted() {
    this.$store.commit("loading", true);
    this.user_id = this.$route.query.user_id || null;
    await this.getUser();
    await this.getCountryCode();
    await this.getCountry();
    this.$store.commit("loading", false);
  },
  methods: {
    async updateUser() {
      this.$store.commit("loading", true);
      this.notEdit = !this.notEdit;
      await this.$axios
        .putApi(`/api/user/${this.user_id}`, {
          ...this.user,
          image: this.$store.state.cropperImage,
        })
        .then((res) => {
          if (!res) return;
        });
      await this.getUser();
      this.$store.commit("loading", false);
    },
    async getUser() {
      await this.$axios.getApi(`/api/user/${this.user_id}`).then((res) => {
        if (!res) return;
        const { data } = res;
        const { users } = data;
        this.user = { ...users };
        this.$store.dispatch("setCropperImage", this.user.image);
        this.cropperImage = this.$store.state.cropperImage;
      });
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
    setCropImage() {
      this.cropper = false;
    },
    chagneImage() {
      this.$refs.imageUpload.$refs.picture.click();
    },
    editCropper() {
      this.cropper = true;
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
  },
  computed: {
    form() {
      return {
        name: this.user.name,
        gender: this.user.gender,
        phone_number: this.user.phone_number,
        birth: this.user.birth,
        showCountries: this.showCountries,
      };
    },
  },
  watch: {
    cropper(nv) {
      if (!nv) {
        this.$nextTick(() => {
          this.cropperImage = this.$store.state.cropperImage;
        });
      }
    },
  },
};
</script>
