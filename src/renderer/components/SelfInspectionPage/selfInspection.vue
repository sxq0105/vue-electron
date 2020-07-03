<template>
  <div class="main">
    <Bubbles></Bubbles>
    <el-container>
      <el-header>
        <el-row class="self-title">
          <el-col :span="24">
            <div>{{$t('checkTitle')}}</div>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <el-row class="self-main">
          <el-col :span="24">
            <el-row v-for="(item,index) in $t('message')" :key="index" class="main-title">
              <el-col :span="2" class="self-state" :offset="2">
                <img :src="require('@/assets/Images/'+item.url)" alt />
              </el-col>
              <el-col :span="15" class="self-message">
                <div>{{item.state}}</div>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
    <el-row class="self-button">
      <el-col :span="4" :offset="5">
        <el-button size="medium" @click="goBack" class="button-left">{{$t('backButton')}}</el-button>
      </el-col>
      <el-col :span="4" :offset="5">
        <el-button size="medium" @click="goEnterprise" class="button-right">{{$t('confirmButton')}}</el-button>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { Bubbles } from "vue-canvas-effect";
export default {
  //检查更新初始化数据
  data() {
    return {};
  },
  methods: {
    goBack: function() {
      this.$router.go(-1);
    },
    //跳转到温馨提示页面
    goEnterprise: function() {
      this.$router.push({ name: "reminder" });
    }
  },
  components: {
    Bubbles
  }
};
</script>
<style scoped>
.main {
  margin-top: 20px;
}
.el-main {
  border: 1px solid #bfbfbf;
  box-shadow: 0px 0px 16px 2px #aaa;
  background-color: rgba(255, 255, 255, 0.6);
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
}
.el-header {
  margin-left: 5%;
  width: 90.2%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: brown;
  line-height: 80px;
  height: 80px !important;
  text-align: center;
  font-size: 30px;
  box-shadow: 0px 0px 10px 3px #aaa;
  color: #fff;
}
.self-state img {
  height: 40px;
}
.self-message div {
  height: 40px;
  padding-top: 10px;
}
.self-title {
  font-size: 40px;
  font-family: "黑体";
}
.main-title {
  margin: 10px 0px;
}
.self-main {
  font-family: "黑体";
  font-size: 20px;
}
.el-button {
  padding: 10px 40px;
  font-size: 32px;
}
.self-button {
  margin-top: 20px;
}
</style>