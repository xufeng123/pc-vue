<template>
  <div class="img-page app-container">
    <div v-for="(img, idx) in imgList" :key="idx" class="img-size">
      <img v-lazy="img.url" @click="getBigImg(idx)">
    </div>
    <div v-if="dialogImgVisible">
      <v-image v-model="dialogImgVisible" :image-list="imgList" :current-index="imgIdx"></v-image>
    </div>
  </div>
</template>

<script>
import vImage from '@/vendor/image/v-image'

export default {
  name: 'ImgPage',
  components: { vImage },
  data() {
    return {
      imgIdx: 0,
      imgList: [
        {
          url: 'http://img.pconline.com.cn/images/upload/upc/tx/wallpaper/1212/10/c1/16491670_1355126816487.jpg'
        },
        {
          url: 'http://img.pconline.com.cn/images/upload/upc/tx/wallpaper/1212/10/c1/16491670_1355126816487.jpg1'
        },
        {
          url: 'http://attachments.gfan.com/forum/attachments2/201301/29/125722eh9nj87bq20eq2e8.jpg'
        },
        {
          url: 'http://attachments.gfan.com/forum/attachments2/201301/29/125722eh9nj87bq20eq2e8.jpg1'
        }
      ],
      dialogImgVisible: false
    }
  },
  methods: {
    getBigImg(idx) {
      this.imgIdx = idx
      this.dialogImgVisible = true
    }
  }
}
</script>

<style lang="scss">
  .img-page {
    width: 100%;
    .img-size {
      img {
        width: 200px;
      }
    }
  }
</style>
