<template>
  <div>
    <Bubbles></Bubbles>
    <div v-loading="loading" :element-loading-text="$t('loadingText')">
      <el-container>
        <el-header>
          <el-row class="infor-title">
            <el-col :span="3" :offset="5">
              <img src="~@/assets/Images/warning.png" />
            </el-col>
            <el-col :span="16">
              <el-row>
                <el-col :span="24">
                  <p>{{$t('warningMessage')}}</p>
                </el-col>
                <el-col :span="24">
                  <strong>{{$t('chargingInformation')}}</strong>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </el-header>
        <el-main>
          <el-row>
            <el-col :span="24">
              <div class="infor-header">
                <div>{{$t('queryRecord')}}</div>
              </div>
            </el-col>
          </el-row>
          <el-row class="infor-table">
            <el-col :span="24">
              <el-table :data="$t('tableData')" :row-class-name="tableRowClassName">
                <el-table-column prop="organ" :label="$t('queryOrgan')" width="340"></el-table-column>
                <el-table-column prop="date" :label="$t('submitTime')"></el-table-column>
              </el-table>
              <video
                src="https://www.w3school.com.cn/i/movie.ogg"
                controls="controls"
              >your browser does not support the video tag</video>
            </el-col>
          </el-row>
        </el-main>
      </el-container>
      <el-row class="infor-button">
        <el-col :span="4" :offset="5">
          <el-button
            size="medium"
            type="default"
            @click="goBcak"
            class="button-left"
          >{{$t('backButton')}}</el-button>
        </el-col>
        <el-col :span="4" :offset="5">
          <el-button
            size="medium"
            @click="goChoosePaymentMethod"
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
  //信息查询记录页面初始化
  data() {
    return {
      loading: true
    };
  },
  methods: {
    //隔行2换色方法
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex % 2 === 0) {
        return "warning-row";
      }
      return "";
    },
    goBcak() {
      this.$router.go(-1);
    },
    //跳转到选择支付页面
    goChoosePaymentMethod() {
      this.$router.push({ name: "choosePaymentMethod" });
    }
  },
  mounted: function() {
    //加载效果2秒关闭
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  },
  components: {
    Bubbles
  }
};
</script>
<style>
.el-table .warning-row {
  background-color: #dcdcdc;
  font-family: "黑体";
}
th {
  color: #000;
  font-size: 18px;
}
.el-table .cell {
  text-align: center;
  color: #000;
  font-family: "黑体";
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
.infor-title {
  margin-top: 50px;
}
.infor-table {
  margin-top: 100px;
}
p {
  font-family: "黑体";
}
.infor-header {
  width: 100%;
  height: 36px;
  line-height: 36px;
  text-align: center;
  position: relative;
  top: 80px;
  margin-bottom: 10px;
}
.infor-header div {
  font-size: 22px;
  color: #8c8c8c;
}
.infor-header div:before,
.infor-header div:after {
  position: absolute;
  background: #ccc;
  content: "";
  height: 1px;
  top: 50%;
  width: 43%;
}
.infor-header div:before {
  left: 0px;
}
.infor-header div:after {
  right: 0px;
}
.infor-button {
  margin-top: 30px;
}
.el-button {
  padding: 10px 40px;
  font-size: 30px;
}
strong {
  font-size: 30px;
  color: brown;
  font-family: "黑体";
}
.el-table {
  width: 100%;
}
</style>