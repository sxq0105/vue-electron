<template>
  <el-container>
    <el-main>
      <el-row>
        <el-col :span="24">
          <div class="img">
            <el-row>
              <el-col :span="24">
                <img :src="require('@/assets/Images/'+imgUrl)" alt />
              </el-col>
              <el-col :span="24">
                <p>{{$t('printingResult')}}</p>
              </el-col>
            </el-row>
          </div>
        </el-col>
        <el-col :span="24">
          <div class="message">
            <el-row>
              <el-col :span="24">
                <div class="tips">
                  <span>{{$t('printingCompletionPrompt')}}</span>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
      <Bubbles></Bubbles>
    </el-main>
    <el-footer>
      <el-row>
        <el-col :span="4" :offset="10">
          <el-button size="medium" @click="goIndex" class="button-left">{{$t('backButton')}}</el-button>
        </el-col>
      </el-row>
    </el-footer>
  </el-container>
</template>
<script>
import { Bubbles } from "vue-canvas-effect";
export default {
  //打印结果初始化数据
  data() {
    return {
      imgUrl: "OK.png"
    };
  },
  methods: {
    //跳转到主页面
    goIndex: function() {
      this.$router.push({ name: "index" });
    }
  },
  components: {
    Bubbles
  }
};
</script>
<style scoped>
.img {
  text-align: center;
  background-color: #fff;
  height: 280px;
  padding-top: 100px;
}
p {
  font-size: 30px;
  font-weight: bold;
  font-family: "黑体";
}
.message {
  height: 100px;
  background-color: brown;
  margin-top: 10px;
  border-radius: 5px;
}
.img img {
  height: 74px;
}
.tips {
  line-height: 100px;
  text-align: center;
  color: #fff;
  border-radius: 5px;
  font-family: "宋体";
}
.el-button {
  padding: 10px 40px;
  font-size: 32px;
}
.el-footer {
  margin-top: 10px;
}
</style>