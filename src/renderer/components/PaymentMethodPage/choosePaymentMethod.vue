<template>
  <div>
    <Bubbles></Bubbles>
    <el-container>
      <el-header>
        <el-row class="time">
          <el-col :span="24">
            <b>{{$t('payTime')}}</b>
          </el-col>
          <el-col :span="24" class="paymentMethod time">
            <b>{{$t('choosePaymentMethod')}}</b>
          </el-col>
        </el-row>
        <el-row class="choose-paymentMethod">
          <el-col :span="24">
            <p>{{$t('paymentAmount')}}&yen;{{$t('paymentAmountMessage')}}</p>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <el-row>
          <el-col :span="24">
            <div class="choose-header">
              <div>{{$t('paymentMethod')}}</div>
            </div>
          </el-col>
        </el-row>
        <el-row class="img-paymentMethod">
          <el-col :span="4">
            <div class="leftBlank"></div>
          </el-col>
          <el-col :span="6" v-for="(item,index) in imgMethods" :key="index">
            <div class="div-paymentMethod" :class="index==1?'div-paymentMethod-img':''">
              <img
                :src="require('@/assets/Images/'+item.url)"
                :class="{ 'choose-methods':index==current}"
                @click="addClass(index)"
                :alt="item.altName"
              />
            </div>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
    <el-row class="choose-button">
      <el-col :span="24">
        <el-button
          size="medium"
          class="button-right"
          @click="goScanningPayment"
        >{{$t('confirmButton')}}</el-button>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { Bubbles } from "vue-canvas-effect";
export default {
  //选择支付方式初始化数据
  data: function() {
    return {
      dialogVisible: false,
      current: -1,
      imgMethods: [
        { url: "cashPayment.png", altName: "现金支付" },
        { url: "cloudFlash.png", altName: "银联支付" },
        { url: "weChatAlipay.png", altName: "微信支付宝支付" }
      ]
    };
  },
  methods: {
    //跳转到扫码支付页面
    goScanningPayment: function() {
      if (this.current == 0) {
        this.$router.push({ name: "investMoney" });
      } else if (this.current == 1 || this.current == 2) {
        this.$router.push({ name: "scanningPayment" });
      } else {
        this.open();
      }
    },
    addClass: function(index) {
      this.current = index;
    },
    open: function() {
      this.$alert("请选择支付方式", "提示", {
        confirmButtonText: "确定",
        type: "warning",
        showClose: false
      });
    }
  },
  components: {
    Bubbles
  }
};
</script>
<style>
.el-button--mini,
.el-button--small {
  font-size: 22px !important;
}
.el-message-box__title {
  font-weight: bold !important;
  font-size: 28px !important;
}
.el-message-box__content {
  font-size: 24px !important;
}
</style>
<style scoped>
.el-container {
  margin-top: 22px;
  border: 1px solid #bfbfbf;
  box-shadow: 0px 0px 10px 5px #aaa;
  background-color: #fff;
  border-radius: 10px;
}
.leftBlank {
  height: 5px;
}
b {
  font-family: "黑体";
}
.time {
  text-align: center;
  font-size: 34px;
  color: brown;
  padding-top: 30px;
}
.paymentMethod b {
  font-family: "宋体";
}
.choose-paymentMethod {
  font-size: 20px;
  text-align: center;
}
.choose-methods {
  border: 1px solid #409eff;
  padding: 10px;
}
.choose-header {
  width: 100%;
  height: 36px;
  line-height: 36px;
  text-align: center;
  position: relative;
  top: 130px;
}
.choose-header div {
  font-size: 22px;
  color: #8c8c8c;
  font-family: "宋体";
}
.choose-header div:before,
.choose-header div:after {
  position: absolute;
  background: #ccc;
  content: "";
  height: 1px;
  top: 50%;
  width: 43%;
}
.choose-header div:before {
  left: 0px;
}
.choose-header div:after {
  right: 0px;
}
img {
  width: 120px;
  padding: 10px;
}
.img-paymentMethod {
  text-align: center;
  padding-top: 120px;
  margin-top: 20px;
}
.div-paymentMethod {
  padding: 20px 20px;
  text-align: center;
  margin: 3px;
}
.div-paymentMethod-img {
  border-right: 1px solid #e0e0e0;
  border-left: 1px solid #e0e0e0;
}
.el-button {
  padding: 10px 40px;
  font-size: 32px;
}
.choose-button {
  margin-top: 20px;
  text-align: center;
}
p {
  font-weight: bold;
  font-size: 20px;
  font-family: "宋体";
}
</style>