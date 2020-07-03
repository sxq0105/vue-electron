<template>
  <el-container>
    <Bubbles></Bubbles>
    <el-main>
      <el-row>
        <el-col :span="24">
          <div class="img">
            <el-row>
              <el-col :span="24">
                <div>
                  <img :src="require('@/assets/Images/warning.png')" alt />
                  <strong>{{$t('overtime')}}</strong>
                </div>
              </el-col>
              <el-col :span="24">
                <p>{{$t('payPromptMessage')}}</p>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </el-main>
    <el-footer>
      <el-row>
        <el-col :span="4" :offset="10">
          <el-button
            size="medium"
            class="button-right"
            @click="goRecognitionFailed"
          >{{$t('backButton')}}</el-button>
        </el-col>
      </el-row>
    </el-footer>
  </el-container>
</template>
<script>
import { Bubbles } from "vue-canvas-effect";
export default {
  //支付超时页面初始化页面
  data: function() {
    return {};
  },
  methods: {
    //跳转到查询版式
    goRecognitionFailed: function() {
      this.$router.push({ name: "queryLayout" });
    }
  },
  components: {
    Bubbles
  }
};
</script>
<style scoped>
.el-main {
  margin-top: 22px;
  border: 1px solid #bfbfbf;
  box-shadow: 0px 0px 10px 5px #aaa;
  min-height: 508px;
  background-color: #fff;
  border-radius: 5px;
}
strong {
  font-size: 60px;
  color: brown;
  vertical-align: middle;
  font-family: "黑体";
}
.img {
  text-align: center;
  background-color: #fff;
  height: 260px;
  padding-top: 100px;
}
p {
  font-size: 20px;
  font-weight: bold;
  margin-top: 60px;
  font-family: "宋体";
}
.message {
  height: 100px;
  background-color: brown;
  margin-top: 10px;
}
.img img {
  height: 50px;
  vertical-align: middle;
}
.tips {
  line-height: 100px;
  text-align: center;
  color: #fff;
}
.el-button {
  padding: 10px 40px;
  font-size: 32px;
}
.el-footer {
  padding-top: 20px;
  height: auto !important;
}
</style>