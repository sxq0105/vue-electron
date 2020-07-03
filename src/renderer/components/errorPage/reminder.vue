<template>
  <el-container>
    <Bubbles></Bubbles>
    <el-main>
      <el-row>
        <el-col :span="24">
          <div class="reminder">
            <el-row>
              <el-col :span="24">
                <div>
                  <strong>
                    <i class="el-icon-s-opportunity"></i>
                    {{$t('reminder')}}
                  </strong>
                </div>
              </el-col>
              <el-col :span="24">
                <p>!</p>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </el-main>
    <el-footer>
      <el-row>
        <el-col :span="24" class="footer">
          <el-button size="medium" @click="goBack" class="button-right">{{$t('backButton')}}</el-button>
        </el-col>
      </el-row>
    </el-footer>
  </el-container>
</template>
<script>
import { Bubbles } from "vue-canvas-effect";
export default {
  //温馨提示初始化数据
  data: function() {
    return {};
  },
  methods: {
    //跳转到错误页面
    goBack: function() {
      this.$router.push({ name: "error" });
    }
  },
  components: {
    Bubbles
  }
};
</script>
<style scoped>
.el-main {
  margin-top: 22px;
  border: 1px solid #bfbfbf;
  box-shadow: 0px 0px 10px 5px #aaa;
  min-height: 508px;
  background-color: #fff;
}
strong {
  font-size: 46px;
  color: brown;
  font-family: "黑体";
}
.reminder {
  text-align: center;
  background-color: #fff;
  height: 260px;
  padding-top: 100px;
}
p {
  font-size: 20px;
  font-weight: bold;
  margin-top: 60px;
}
.el-button {
  padding: 10px 40px;
  font-size: 32px;
}
.el-footer {
  padding-top: 20px;
  height: auto !important;
}
.footer {
  text-align: center;
}
</style>