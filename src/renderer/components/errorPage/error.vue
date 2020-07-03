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
                <p>{{$t('result')}}</p>
              </el-col>
            </el-row>
          </div>
        </el-col>
        <el-col :span="24">
          <div class="message">
            <el-row>
              <el-col :span="24">
                <div class="tips">
                  <span></span>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
      <Bubbles></Bubbles>
    </el-main>
    <el-footer>
      <el-row class="error-button">
        <el-col :span="4" :offset="10">
          <el-button
            size="medium"
            class="button-right"
            @click="goPaymentTimeout"
          >{{$t('backButton')}}</el-button>
        </el-col>
      </el-row>
    </el-footer>
  </el-container>
</template>
<script>
import { Bubbles } from "vue-canvas-effect";
export default {
  //错误页面初始化数据
  data() {
    return {
      imgUrl: "error.png"
    };
  },
  methods: {
    //跳转到企业和个人业务
    goPaymentTimeout: function() {
      this.$router.push({ name: "home" });
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
  border-radius: 5px;
}
p {
  font-size: 46px;
  font-weight: bold;
  font-family: "黑体";
  margin-top: 20px;
}
.message {
  height: 100px;
  background-color: brown;
  margin-top: 10px;
  border-radius: 5px;
}
.img img {
  height: 100px;
}
.tips {
  line-height: 100px;
  text-align: center;
  color: #fff;
}
.el-button {
  padding: 10px 40px;
  font-size: 32px;
}
.error-button {
  margin-top: 12px;
}
</style>