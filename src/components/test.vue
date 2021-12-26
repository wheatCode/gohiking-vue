<template>
  <div>
    <input ref="picture" type="file" name="aaa" id="" @change="show" />
  </div>
</template>

<script>
import VueCoreImageUpload from "vue-core-image-upload";
export default {
  components: {
    VueCoreImageUpload,
  },
  data() {
    return {
      data: {
        src: "http://img1.vued.vanthink.cn/vued0a233185b6027244f9d43e653227439a.png",
      },
    };
  },
  methods: {
    show(event) {
      this.file = event.target.files[0];
      let filereader = new FileReader();
      filereader.readAsDataURL(this.file);
      filereader.addEventListener("load", () => {
        this.useravatar = filereader.result;
        this.$store.dispatch("setCropperImage", this.useravatar);
      });
    },
  },
};
</script>
