<template>
  <div v-show="false">
    <input ref="picture" type="file" name="aaa" id="" @change="show" />
  </div>
</template>

<script>
import VueCoreImageUpload from "vue-core-image-upload";

export default {
  components: {
    VueCoreImageUpload,
  },
  methods: {
    show(event) {
      this.file = event.target.files[0];
      let filereader = new FileReader();
      filereader.readAsDataURL(this.file);
      filereader.addEventListener("load", () => {
        this.useravatar = filereader.result;
        this.$store.dispatch("setCropperImage", this.useravatar);
        this.$emit("editCropper");
      });
    },
  },
};
</script>
