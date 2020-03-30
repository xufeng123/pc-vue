<template>
  <el-dialog
    title="查看图片"
    :visible.sync="show"
    class="img-dialog"
  >
    <div style="width: 100%;height: 100%; position: relative;">
      <div class="close-icon" @click="closeImg">
        <i class="el-icon-close"></i>
      </div>
      <!-- <div :style="{backgroundImage: 'url(' + imageList[currentIndexImg].imageUrl + ')'}" class="img-big" @click="closeImg"> -->
      <div class="img-big" @click="closeImg">
        <img :src="imageList[currentIndexImg]&&imageList[currentIndexImg].url" />
      </div>
      <div v-if="currentIndexImg > 0" class="toggle-left" @click="pre">
        <img src="../../assets/icon-left.png" alt="">
      </div>
      <div v-if="currentIndexImg < imageList.length - 1" class="toggle-right" @click="next">
        <img src="../../assets/icon-next.png" alt="">
      </div>
    </div>
  </el-dialog>
</template>
<script>
export default {
  name: 'Preview',
  model: {
    prop: 'dialogImgVisible',
    event: 'close'
  },
  props: {
    dialogImgVisible: {
      type: Boolean,
      default: false
    },
    bigUrl: {
      type: String,
      default: null
    },
    imageList: {
      type: Array,
      default: () => []
    },
    currentIndex: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      currentIndexImg: 0
    }
  },
  computed: {
    show: {
      get() {
        return this.dialogImgVisible
      },
      set() {
        this.$emit('close', false)
      }
    }
  },
  created() {
    this.currentIndexImg = this.currentIndex
  },
  methods: {
    pre() {
      if (this.currentIndexImg > 0) {
        this.currentIndexImg -= 1
      }
    },
    next() {
      if (this.currentIndexImg < this.imageList.length - 1) {
        this.currentIndexImg += 1
      }
    },
    closeImg() {
      this.show = false
    }
  }
}
</script>
<style lang="scss">
  .img-dialog {
    .el-dialog {
      width: 100%;
      height: 100%;
      margin: 0 !important;
    }
    .el-dialog__header {
      display: none;
    }
    .el-dialog__body {
      height: 100%;
      max-height: 100% !important;
      background: #000;
      opacity: 0.9;
      padding: 50px !important;
    }
    .img-big {
      width: 100%;
      height: 100%;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 888;
      img {
        max-width: 100%;
      }
    }
    .close-icon {
      position: absolute;
      top: -40px;
      right: -25px;
      z-index: 999;
      .el-icon-close {
        font-weight: bold;
        font-size: 40px;
        color: #fff;
      }
    }
    .toggle-left {
      position: absolute;
      left: -35px;
      top: 50%;
      transform: translateY(-50%);
      z-index: 999;
      img {
        width: 25px;
      }
    }
    .toggle-right {
      position: absolute;
      right: -35px;
      top: 50%;
      transform: translateY(-50%);
      z-index: 999;
      img {
        width: 25px;
      }
    }
  }
</style>
