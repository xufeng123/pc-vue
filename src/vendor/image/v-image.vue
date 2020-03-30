<template>
  <el-dialog
    title="查看图片"
    :visible.sync="show"
    class="img-dialog"
  >
    <div style="width: 100%;height: 100%; position: relative;" :class="{'left': leftShow, 'right': rightShow}" @mousemove="moveMouse" @mousedown="downMouse">
      <div class="close-icon" @click="closeImg">
        <i class="el-icon-close"></i>
      </div>
      <!-- <div :style="{backgroundImage: 'url(' + imageList[currentIndexImg].imageUrl + ')'}" class="img-big" @click="closeImg"> -->
      <div class="img-big">
        <img v-lazy="imageList[currentIndexImg]&&imageList[currentIndexImg].url">
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
      currentIndexImg: 0,
      leftShow: false,
      rightShow: false
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
  watch: {
    currentIndex(index) {
      this.currentIndexImg = index
    }
  },
  created() {
    this.currentIndexImg = this.currentIndex
  },
  methods: {
    moveMouse(event) {
      // 左 > 100 < 400       右 > 650 < 900
      if (event.clientX > 100 && event.clientX < 400 && this.currentIndexImg > 0) {
        this.leftShow = true
        this.rightShow = false
      } else if (event.clientX < document.body.clientWidth - 100 && event.clientX > 650 && this.currentIndexImg < this.imageList.length - 1) {
        this.leftShow = false
        this.rightShow = true
      } else {
        this.leftShow = false
        this.rightShow = false
      }
    },
    downMouse() {
      if (this.leftShow) {
        this.pre()
      } else if (this.rightShow) {
        this.next()
      } else {
        this.closeImg()
      }
    },
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
        max-height: 100%;
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
    .right {
      cursor: url('http://www.dpfile.com/s/c/app/pic/i/gallery/btn-next.e757fdeea09d4483ade1007806377d68.cur'), default;
    }
    .left {
      cursor: url('http://www.dpfile.com/s/c/app/pic/i/gallery/btn-prev.48d8d69074396e31ce5543047486441e.cur'), default;
    }
  }
</style>
