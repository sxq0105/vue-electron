<template>
  <el-container>
    <Bubbles></Bubbles>
    <el-main>
      <el-row>
        <el-col :span="7" :offset="2">
          <el-row>
            <el-col :span="24">
              <div style="height:70px;"></div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <div class="idCard"></div>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="11">
          <div class="image"></div>
        </el-col>
      </el-row>
    </el-main>
    <el-footer>
      <el-row>
        <el-col :span="12" :offset="6">
          <strong @click="goInformationRecord">{{$t('photoComparison')}}...</strong>
        </el-col>
      </el-row>
    </el-footer>
  </el-container>
</template>
<script>
import { Bubbles } from "vue-canvas-effect";
export default {
  //照片对比初始化数据
  data: function() {
    return {};
  },
  methods: {
    //跳转查询记录
    goInformationRecord() {
      this.$router.push({ name: "informationRecord" });
    }
  },
  components: {
    Bubbles
  }
};
</script>
<style scoped>
.el-main {
  width: 100%;
}
.idCard {
  width: 200px;
  height: 260px;
  border: 1px solid #000;
  margin-top: 40px;
}
.image {
  margin-top: 40px;
  background-image: url("~@/assets/Images/camera.png");
  background-size: 100% auto;
  height: 392px;
  width: 500px;
}
.el-col {
  text-align: center;
  font-size: 30px;
}
strong {
  color: brown;
  font-family: "黑体";
}
.el-footer {
  margin-top: 30px;
  font-family: "宋体";
}
</style>