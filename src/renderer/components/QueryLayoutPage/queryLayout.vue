<template>
  <el-container>
    <Bubbles></Bubbles>
    <el-header>
      <el-row>
        <el-col :span="24">
          <strong>{{$t('queryLayout')}}</strong>
        </el-col>
      </el-row>
    </el-header>
    <el-main>
      <el-row>
        <el-col :span="12">
          <div class="queryLayout"></div>
          <p @click="goPrinting">
            <img src="~@/assets/Images/brief.png" alt />
          </p>
        </el-col>
        <el-col :span="12">
          <div class="queryLayout"></div>
          <p @click="goPrinting">
            <img src="~@/assets/Images/detail.png" alt />
          </p>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>
<script>
import { Bubbles } from "vue-canvas-effect";
export default {
  //查询版式初始化数据
  data: function() {
    return {};
  },
  methods: {
    //跳转到打印页面
    goPrinting() {
      this.$router.push({ name: "printing" });
    }
  },
  components: {
    Bubbles
  }
};
</script>
<style scoped>
.el-container {
  width: 100%;
  border-radius: 10px;
}
.el-header {
  margin-top: 30px;
}
.el-col {
  text-align: center;
}
strong {
  font-size: 30px;
  font-family: "黑体";
}
.queryLayout {
  height: 360px;
  width: 300px;
  background-color: #fff;
  box-shadow: 0px 0px 10px 2px #aaa;
  margin: 0 auto;
}
img {
  width: 200px;
}
p {
  margin: 0 auto;
  margin-top: 30px;
}
</style>