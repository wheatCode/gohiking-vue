<template>
  <div class="mt-15" v-if="cropper">
    <vue-cropper
      ref="cropper"
      :src="imgSrc"
      dragMode="none"
      :viewMode="1"
      :scalable="false"
      :rotatable="false"
      :zoomable="false"
      :zoomOnTouch="false"
      :zoomOnWheel="false"
      :cropBoxResizable="false"
      :aspectRatio="1 / 1"
      :responsive="true"
      :autoCropArea="0.6"
      :center="false"
      :toggleDragModeOnDblclick="false"
      style="width: 100%; height: 350px"
      class="d-flex align-center"
    />
  </div>
</template>

<script>
import VueCropper from "vue-cropperjs";
import "cropperjs/dist/cropper.css";

export default {
  name: "Cropper",
  components: {
    VueCropper,
  },
  data() {
    return {
      imgSrc: null,
      data: null,
    };
  },
  props: {
    cropper: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    cropImage() {
      this.$store.dispatch("setCropperImage", this.$refs.cropper.getCroppedCanvas().toDataURL());
    },
  },
  watch: {
    async cropper(nv) {
      if (!nv) {
        this.cropImage();
      } else {
        this.imgSrc = this.$store.state.cropperImage;
      }
    },
  },
};
</script>

<style lang="scss">
.cropper-crop-box,
.cropper-view-box {
  border-radius: 50%;
}

.cropper-view-box {
  box-shadow: 0 0 0 1px #39f;
  outline: 0;
}

.cropper-face {
  background-color: inherit !important;
}

.cropper-dashed,
.cropper-point.point-se,
.cropper-point.point-sw,
.cropper-point.point-nw,
.cropper-point.point-ne,
.cropper-line {
  display: none !important;
}

.cropper-container {
  margin: auto auto;
}
</style>
