<template>
  <div>
    <Bubbles></Bubbles>
    <el-container>
      <el-header>
        <el-row>
          <el-col :span="24" class="enter-title">
            <div>
              <img src="~@/assets/Images/enterpriseRed.png" alt />
              <b>{{$t('enterpriseTitle')}}</b>
            </div>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <el-row class="enter-message">
          <el-col :span="24" class="enter-mes">
            <el-row>
              <el-col :span="8" :offset="2">
                <div class="enter-name">{{$t('enterpriseName')}}</div>
              </el-col>
              <el-col :span="14">
                <div>{{$t('enterpriseNameMessage')}}</div>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="24" class="enter-mes">
            <el-row>
              <el-col :span="8" :offset="2">
                <div class="enter-name">{{$t('enterpriseOrgCode')}}</div>
              </el-col>
              <el-col :span="14">
                <div>{{$t('enterpriseOrgCodeMessage')}}</div>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="24" class="enter-mes">
            <el-row>
              <el-col :span="8" :offset="2">
                <div class="enter-name">{{$t('enterpriseLegalPerson')}}</div>
              </el-col>
              <el-col :span="14">
                <div>{{$t('enterpriseLegalPersonMessage')}}</div>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="24" class="enter-mes">
            <el-row>
              <el-col :span="8" :offset="2">
                <div class="enter-name">{{$t('enterpriseCapital')}}</div>
              </el-col>
              <el-col :span="14">
                <div>{{$t('enterpriseCapitalMessage')}}</div>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="24" class="enter-mes">
            <el-row>
              <el-col :span="8" :offset="2">
                <div class="enter-name">{{$t('enteerpriseFounded')}}</div>
              </el-col>
              <el-col :span="14">
                <div>{{$t('enteerpriseFoundedMessage')}}</div>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="24" class="enter-mes">
            <el-row>
              <el-col :span="8" :offset="2">
                <div class="enter-name">{{$t('enteerpriseAddress')}}</div>
              </el-col>
              <el-col :span="14">
                <div>{{$t('enteerpriseAddressMessage')}}</div>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
    <el-row class="enter-button">
      <el-col :span="4" :offset="5">
        <el-button size="medium" class="button-left" @click="goBcak">{{$t('backButton')}}</el-button>
      </el-col>
      <el-col :span="4" :offset="5">
        <el-button
          size="medium"
          class="button-right"
          @click="goScanEmpower"
        >{{$t('confirmButton') }}</el-button>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { Bubbles } from "vue-canvas-effect";
export default {
  //企业页面初始化数据
  data: function() {
    return {};
  },
  methods: {
    //跳转身份证读取页面
    goScanEmpower: function() {
      this.$router.push({ name: "readId" });
    },
    //返回
    goBcak: function() {
      this.$router.go(-1);
    }
  },
  components: {
    Bubbles
  }
};
</script>
<style scoped>
.el-container {
  margin-top: 22px;
  border: 1px solid #bfbfbf;
  box-shadow: 0px 0px 10px 5px #aaa;
  min-height: 508px;
  background-color: #fff;
  border-radius: 10px;
}
.el-header {
  margin-top: 20px;
  padding-top: 10px;
}
.enter-title {
  text-align: center;
  margin-top: 20px;
}
.enter-title img {
  width: 50px;
  color: brown;
}
.enter-title b {
  font-size: 36px;
  height: 50px;
  line-height: 50px;
}
.enter-message {
  font-size: 22px;
  padding-top: 30px;
  font-family: "黑体";
}
.enter-mes {
  margin: 8px 0;
}
.enter-name {
  display: inline-block;
  height: 100%;
  min-width: 200px;
  text-align-last: justify;
}
.el-button {
  padding: 10px 40px;
  font-size: 32px;
}
.enter-button {
  margin-top: 20px;
}
</style>