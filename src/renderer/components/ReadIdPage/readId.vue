<template>
  <el-container>
    <el-header>
      <el-row class="time">
        <el-col :span="24" class="timeTitle">
          <b>{{$t('readIdTime')}}</b>
        </el-col>
      </el-row>
    </el-header>
    <el-main>
      <el-row class="time">
        <el-col :span="24">
          <img src="@/assets/Images/idcard.png" />
        </el-col>
      </el-row>
      <Bubbles></Bubbles>
    </el-main>
    <el-footer>
      <el-row class="time">
        <el-col :span="24">
          <el-button
            size="medium"
            @click="goPhoneNumber"
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
  //读取身份证初始化数据
  data: function() {
    return {
      type: ""
    };
  },
  methods: {
    //跳转到个人信息手机号输入
    goPhoneNumber() {
      this.$router.push({ name: "phoneNumber" });
    }
  },
  components: {
    Bubbles
  }
};
</script>
<style scoped>
.timeTitle {
  line-height: 60px;
}
b {
  font-size: 26px;
}
.time {
  color: #409eff;
  text-align: center;
}
img {
  height: 440px;
}
.el-button {
  padding: 10px 40px;
  font-size: 32px;
}
</style>