<template>
  <div>
    <Bubbles></Bubbles>
    <div v-loading="loading" :element-loading-text="$t('loadingText')">
      <el-container>
        <el-aside>
          <el-row>
            <el-col :span="24" class="idPhoto">
              <strong>{{$t('idPhoto')}}</strong>
            </el-col>
          </el-row>
          <div></div>
          <el-row>
            <el-col :span="18" :offset="6" class="idPhoto">
              <p></p>
            </el-col>
          </el-row>
        </el-aside>
        <el-main>
          <el-row class="personarHeader">
            <el-col :span="17" :offset="1">
              <b>{{$t('personalInformation')}}</b>
            </el-col>
            <el-col :span="3" :offset="2" class="time">
              <b>{{$t('personalReadIdTime')}}</b>
            </el-col>
          </el-row>
          <el-row class="mainText">
            <el-col :span="24">
              <el-row>
                <el-col :span="5">
                  <label class="mainText-name">{{$t('phoneNumber')}}</label>
                </el-col>
                <el-col :span="14" class="right">
                  <el-input type="text"></el-input>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="5">
                  <label class="mainText-name">{{$t('name')}}</label>
                </el-col>
                <el-col :span="19" class="right">
                  <label>{{$t('nameMessage')}}</label>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="5">
                  <label class="mainText-name">{{$t('idNumber')}}</label>
                </el-col>
                <el-col :span="19" class="right">
                  <label>{{$t('idNumberMessage')}}</label>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="5">
                  <label class="mainText-name">{{$t('termofValidity')}}</label>
                </el-col>
                <el-col :span="19" class="right">
                  <label>{{$t('termofValidityStartMessage')}}——{{$t('termofValidityEndMessage')}}</label>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </el-main>
      </el-container>
      <el-row class="photo-button">
        <el-col :span="4" :offset="10">
          <el-button
            size="medium"
            @click="goInformationRecord"
            class="button-right"
          >{{$t('confirmButton')}}</el-button>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import { Bubbles } from "vue-canvas-effect";
export default {
  //个人手机号输入初始化数据
  data() {
    return {
      loading: true
    };
  },
  methods: {
    //跳转到拍照页面
    goInformationRecord() {
      this.$router.push({ name: "photograph" });
    }
  },
  mounted: function() {
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  },
  components: {
    Bubbles
  }
};
</script>
<style scoped>
.el-aside {
  padding-top: 60px;
  width: 300px;
}
.el-container {
  margin-top: 22px;
  border: 1px solid #bfbfbf;
  box-shadow: 0px 0px 10px 5px #aaa;
  min-height: 508px;
  border-radius: 10px;
  font-family: "黑体";
}
p {
  height: 200px;
  width: 150px;
  border: 1px solid #000;
}
.idPhoto {
  text-align: center;
}
strong {
  margin-top: 20px;
  font-size: 24px;
}
.el-main {
  background-color: #fff;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}
.photo-button {
  margin-top: 30px;
}
.el-button {
  padding: 10px 40px;
  font-size: 32px;
}
b {
  font-size: 26px;
}
.el-row {
  margin-top: 20px;
}
.personarHeader {
  margin-top: 60px;
}
.time {
  color: #409eff;
}
.mainText {
  margin-top: 30px;
  text-align: center;
}
.mainText-name {
  display: inline-block;
  height: 100%;
  min-width: 86px;
  text-align-last: justify;
}
label {
  height: 38px;
  line-height: 38px;
  font-size: 22px;
  text-align-last: justify;
}
.right {
  text-align: left;
  padding-left: 10px;
}
</style>