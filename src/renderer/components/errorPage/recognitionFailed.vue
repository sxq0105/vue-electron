<template>
  <el-container>
    <el-main>
      <el-row>
        <el-col :span="24">
          <div class="img">
            <el-row>
              <el-col :span="24">
                <img :src="require('@/assets/Images/error.png')" alt />
              </el-col>
              <el-col :span="24">
                <p>{{$t('faceRecognition')}}</p>
              </el-col>
            </el-row>
          </div>
        </el-col>
        <el-col :span="24">
          <div class="message">
            <el-row>
              <el-col :span="24">
                <div class="tips">
                  <span>{{$t('faceRecognitionMessage')}}</span>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
      <Bubbles></Bubbles>
    </el-main>
    <el-footer>
      <el-row>
        <el-col :span="4" :offset="6">
          <el-button size="medium" @click="goBack" class="button-left">{{$t('backButton')}}</el-button>
        </el-col>
        <el-col :span="4" :offset="4">
          <el-button
            size="medium"
            class="button-right"
            @click="goPhotoComparison"
          >{{$t('retryButton')}}</el-button>
        </el-col>
      </el-row>
    </el-footer>
  </el-container>
</template>
<script>
import { Bubbles } from "vue-canvas-effect";
export default {
  //人脸识别初始化数据
  data: function() {
    return {};
  },
  methods: {
    goBack: function() {
      this.$router.go(-1);
    },
    //跳转温馨提示页面
    goPhotoComparison: function() {
      this.$router.push({ name: "photoComparison" });
    }
  },
  components: {
    Bubbles
  }
};
</script>
<style scoped>
.img {
  text-align: center;
  background-color: #fff;
  height: 280px;
  padding-top: 100px;
  border-radius: 5px;
}
p {
  font-size: 46px;
  font-weight: bold;
  font-family: "黑体";
  margin-top: 20px;
}
.message {
  height: 100px;
  background-color: brown;
  margin-top: 5px;
}
.img img {
  height: 100px;
}
span {
  font-family: "宋体";
  font-size: 24px;
}
.tips {
  line-height: 100px;
  text-align: center;
  color: #fff;
}
.el-footer {
  margin-top: 10px;
}
.el-button {
  padding: 10px 40px;
  font-size: 32px;
}
</style>