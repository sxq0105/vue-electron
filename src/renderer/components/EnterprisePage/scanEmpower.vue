<template>
  <div>
    <Bubbles></Bubbles>
    <el-container>
      <el-aside>
        <el-row>
          <el-col :span="24" class="idPhoto">
            <strong>{{$t('readIdCard')}}</strong>
          </el-col>
        </el-row>
        <div></div>
        <el-row>
          <el-col :span="12" :offset="5" class="idPhoto">
            <p></p>
          </el-col>
        </el-row>
      </el-aside>
      <el-main>
        <el-row>
          <el-col :span="24">
            <div class="mainText">{{$t('readIdCardMesssage')}}</div>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
    <el-row class="scan-textTop">
      <el-col :span="4" :offset="10">
        <el-button size="medium" class="button-right" @click="goError">{{$t('backButton')}}</el-button>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { Bubbles } from "vue-canvas-effect";
export default {
  //扫码授权页面初始化数据
  data: function() {
    return {};
  },
  methods: {
    //跳转到错误页面
    goError: function() {
      this.$router.push({ name: "enterprise" });
    }
  },
  components: {
    Bubbles
  }
};
</script>
<style scoped>
.el-aside {
  padding-top: 96px;
  width: 400px !important;
}
.el-container {
  margin-top: 22px;
  border: 1px solid #bfbfbf;
  box-shadow: 0px 0px 10px 5px #aaa;
  min-height: 508px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 10px;
}
p {
  height: 218px;
  width: 218px;
  border: 1px solid #000;
}
strong {
  margin-top: 20px;
  font-family: "黑体";
  font-size: 30px;
}
.idPhoto {
  text-align: center;
}
.mainText {
  font-size: 20px;
  height: 200px;
  line-height: 40px;
  margin-top: 120px;
  width: 60%;
  font-family: "黑体";
  text-align: justify;
}
.scan-textTop {
  margin-top: 20px;
}
.el-button {
  padding: 10px 40px;
  font-size: 32px;
}
</style>