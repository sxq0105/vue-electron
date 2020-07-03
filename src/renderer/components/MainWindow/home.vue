<template>
  <el-container>
    <Bubbles></Bubbles>
    <el-header>
      <b>{{$t('handleBusiness')}}</b>
    </el-header>
    <el-main>
      <el-row>
        <el-col :span="24">
          <div></div>
        </el-col>
      </el-row>
      <el-row type="flex" justify="space-around">
        <el-col :span="7">
          <el-button size="large" class="button-right" @click="goReadId('enterprise')">
            <img src="~@/assets/Images/personal.png" />
            <span>{{$t('enterprise')}}</span>
          </el-button>
        </el-col>
        <el-col :span="7">
          <el-button size="large" class="button-right" @click="goReadId('personal')">
            <img src="~@/assets/Images/enterprise.png" />
            <span>{{$t('personal')}}</span>
          </el-button>
        </el-col>
        <el-col :span="9">
          <el-button size="large" class="button-right" @click="goReadId('invoice')">
            <img src="~@/assets/Images/invoice.png" />
            <span>{{$t('invoice')}}</span>
          </el-button>
        </el-col>
        <!-- 测试播放信息 -->
        <audio autoplay>
          <source src="~@/assets/audio/enterprise.mp3" type="audio/ogg" />
        </audio>
      </el-row>
    </el-main>
  </el-container>
</template>
<script>
import { Bubbles } from "vue-canvas-effect";
export default {
  //个人和企业选择初始化数据
  data: function() {
    return {};
  },
  methods: {
    //根据选择的查询业务跳转到扫码授权或者读取身份证页面
    goReadId(type) {
      if (type == "enterprise") {
        this.$router.push({
          name: "scanEmpower"
        });
      } else {
        this.$router.push({
          name: "readId"
        });
      }
    }
  },
  components: {
    Bubbles
  }
};
</script>
<style scoped>
.el-header {
  text-align: center;
  padding-top: 100px;
}
.el-container {
  margin-top: 5%;
  border: 1px solid #bfbfbf;
  box-shadow: 0px 0px 10px 5px #aaa;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 10px;
}
b {
  color: #757575;
  font-size: 30px;
  font-family: "黑体";
}
img {
  height: 44px;
  vertical-align: middle;
}
span {
  font-size: 30px;
  vertical-align: middle;
}
.el-col {
  text-align: center;
}
div {
  height: 160px;
}
</style>