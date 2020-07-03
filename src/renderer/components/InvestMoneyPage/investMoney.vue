<template>
  <el-container>
    <el-main>
      <el-row>
        <el-col :span="16">
          <div class="mainTitle">
            <el-row class="mainMoney">
              <el-col :span="24" class="tableTitle">
                <strong>{{$t('investMoney')}}</strong>
                <b>{{$t('time')}}...</b>
              </el-col>
              <el-col :span="24">
                <div class="money">
                  <el-row>
                    <el-col :span="11">
                      <span>{{$t('receivable')}}</span>
                    </el-col>
                    <el-col :span="7" :offset="4" class="moneyRight">
                      <b>{{$t('receivableMessage')}}</b>
                    </el-col>
                  </el-row>
                </div>
              </el-col>
              <el-col :span="24">
                <div class="money">
                  <el-row>
                    <el-col :span="11">
                      <span>{{$t('received')}}</span>
                    </el-col>
                    <el-col :span="7" :offset="4" class="moneyRight">
                      <b>{{$t('receivedMessage')}}</b>
                    </el-col>
                  </el-row>
                </div>
              </el-col>
              <el-col :span="24">
                <div class="money">
                  <el-row>
                    <el-col :span="11">
                      <span>{{$t('recollection')}}</span>
                    </el-col>
                    <el-col :span="7" :offset="4" class="moneyRight">
                      <b>{{$t('recollectionMessage')}}</b>
                    </el-col>
                  </el-row>
                </div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <div class="stress">*{{$t('oneWarning')}}</div>
              </el-col>
              <el-col :span="24" class="stress">
                <div>*{{$t('twoWarning')}}</div>
              </el-col>
            </el-row>
          </div>
        </el-col>
        <el-col :span="8">
          <div>
            <img src="~@/assets/Images/cash.gif" />
          </div>
        </el-col>
      </el-row>
    </el-main>
    <Bubbles></Bubbles>
    <el-footer>
      <el-row>
        <el-col :span="4" :offset="5">
          <el-button size="medium" @click="goBack" class="button-left">{{$t('backButton')}}</el-button>
        </el-col>
        <el-col :span="4" :offset="5">
          <el-button
            size="medium"
            @click="goPaymentTimeout"
            class="button-right"
          >{{$t('confirmButton')}}</el-button>
        </el-col>
      </el-row>
    </el-footer>
  </el-container>
</template>
<script>
import { Bubbles } from "vue-canvas-effect";
export default {
  //投入货币页面初始化
  data: function() {
    return {};
  },
  methods: {
    //跳转到支付超时
    goPaymentTimeout() {
      this.$router.push({ name: "paymentTimeout" });
    },
    goBack() {
      this.$router.go(-1);
    }
  },
  components: {
    Bubbles
  }
};
</script>
<style scoped>
img {
  height: 386px;
}
.el-main {
  width: 100%;
}
strong {
  font-size: 30px;
  font-family: "黑体";
}
b {
  font-size: 30px;
  color: brown;
  margin-left: 10px;
}
span {
  font-size: 20px;
  font-weight: bold;
  margin-left: 30px;
  font-family: "宋体";
}
div.money {
  border-bottom: 1px solid #bbb;
  border-right: 1px solid #bbb;
  margin-top: 40px;
  height: 40px;
  width: 96%;
}
.moneyRight {
  text-align: right;
}
.tableTitle {
  margin-top: 60px;
  padding-left: 20px;
}
.mainTitle {
  background-color: #fff;
  height: 470px;
  margin-right: 5px;
  padding-left: 20px;
  border-radius: 5px;
}
.stress {
  color: brown;
  font-weight: bold;
  padding-top: 10px;
  font-family: "宋体";
}
.mainMoney {
  margin-bottom: 10px;
}
.el-button {
  padding: 10px 40px;
  font-size: 32px;
}
.el-footer {
  margin-top: 10px;
}
</style>