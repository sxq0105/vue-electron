<template>
  <div>
    <Bubbles></Bubbles>
    <el-container>
      <el-header>
        <el-row>
          <el-col class="notice-title" :span="24">
            <img src="~@/assets/Images/Notice.png" />
            <strong>{{$t('noticeTitle')}}</strong>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <el-row>
          <el-col :span="24">
            <div class="notice-mainText">{{$t('noticeTheme')}}</div>
          </el-col>
        </el-row>
        <el-row class="notice-textTop">
          <el-col :span="13" :offset="11">
            <p class="noticeCore">{{$t('noticeCore')}}</p>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
    <el-row class="notice-textTop">
      <el-col :span="4" :offset="5">
        <el-button size="medium" class="button-left" @click="goHome('ti')">तिब्बती प्रश्न</el-button>
      </el-col>
      <el-col :span="4" :offset="5">
        <el-button size="medium" class="button-right" @click="goHome('zh')">中文查询</el-button>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { Bubbles } from "vue-canvas-effect";
export default {
  //公示页面初始化数据
  data: function() {
    return {};
  },
  methods: {
    //跳转页面企业和个人查询页面
    goHome(val) {
      if (val == "ti") {
        this.$i18n.locale = "ti";
      } else {
        this.$i18n.locale = "zh";
      }
      this.$router.push({ name: "home" });
    }
  },
  components: {
    //动态效果组件
    Bubbles
  }
};
</script>
<style scoped>
.el-container {
  margin-top: 30px;
  border: 1px solid #bfbfbf;
  box-shadow: 0px 0px 10px 5px #aaa;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 10px;
}
.el-header {
  padding-top: 4%;
}
.el-button {
  font-size: 32px;
}
.noticeCore {
  font-size: 29px;
  font-weight: bold;
  font-family: "宋体";
}
.notice-mainText {
  padding-top: 60px;
  text-indent: 2.2em;
  font-family: "宋体";
  text-align: justify;
  font-size: 24px;
  line-height: 40px;
}
.notice-title {
  text-align: center;
}
.notice-title img {
  vertical-align: middle;
  width: 64px;
}
strong {
  font-size: 34px;
  vertical-align: middle;
  font-family: "宋体";
}
.notice-textTop {
  margin-top: 30px;
  text-align: right;
}
</style> 