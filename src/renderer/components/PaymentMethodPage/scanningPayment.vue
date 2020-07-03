<template>
  <div>
    <Bubbles></Bubbles>
    <el-container>
      <el-header>
        <el-row class="scan-title">
          <el-col :span="7" :offset="9">
            <b>{{$t('scanningPayment')}}</b>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <el-row>
          <el-col :span="8" :offset="9">
            <div class="scan"></div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="7" :offset="9">
            <div class="methods">
              <img src="~@/assets/Images/un_pay.png" alt />
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12" :offset="6">
            <p>*{{$t('scanMessage')}}*</p>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24" class="scan-time">
            <b>{{$t('scanTime')}}</b>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
    <el-row class="scan-button">
      <el-col :span="4" :offset="3">
        <el-button
          size="medium"
          type="primary"
          class="button-right"
          @click="goBack"
        >{{$t('changePaymentMethod')}}</el-button>
      </el-col>
      <el-col :span="4" :offset="8">
        <el-button
          size="medium"
          class="button-left"
          @click="gosSelfInspection"
        >{{$t('confirmButton')}}</el-button>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { Bubbles } from "vue-canvas-effect";
export default {
  //扫码支付初始化数据
  data: function() {
    return {};
  },
  methods: {
    goBack: function() {
      this.$router.go(-1);
    },
    //跳转到检查更新页面
    gosSelfInspection: function() {
      this.$router.push({ name: "selfInspection" });
    }
  },
  components: {
    Bubbles
  }
};
</script>
<style scoped>
.scan-title {
  margin-top: 40px;
  padding: 10px;
}
.el-container {
  margin-top: 22px;
  border: 1px solid #bfbfbf;
  box-shadow: 0px 0px 10px 5px #aaa;
  background-color: #fff;
  font-family: "宋体";
  border-radius: 10px;
}
.scan {
  width: 200px;
  height: 210px;
  border: 1px solid #000;
  margin-top: 20px;
}
b {
  font-size: 40px;
  font-family: "黑体";
}
p {
  text-align: center;
  color: brown;
  font-size: 20px;
  margin: 0;
  font-weight: bold;
  font-family: "宋体";
}
.scan-time {
  text-align: center;
  margin-top: 20px;
}
.scan-time b {
  color: brown;
  font-size: 36px;
}
.methods img {
  width: 200px;
}
.el-button {
  padding: 10px 40px;
  font-size: 32px;
}
.scan-button {
  margin-top: 20px;
}
</style>