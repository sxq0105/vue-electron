<template>
  <el-container>
    <el-main>
      <el-row>
        <el-col :span="24">
          <div>
            <img src="~@/assets/Images/detail_sample.jpg" alt />
          </div>
        </el-col>
      </el-row>
      <el-dialog :visible.sync="dialogVisible" :close-on-click-modal="false" :showClose="showClo">
        <img class="printing" src="~@/assets/Images/printing.gif" :alt="$t('printingTips')" />
        <p>{{$t('printingTips')}}</p>
      </el-dialog>
    </el-main>
    <el-footer>
      <el-row>
        <el-col :span="4" :offset="10">
          <el-button size="medium" @click="goPring" class="button-right">{{$t('pringButton')}}</el-button>
        </el-col>
      </el-row>
    </el-footer>
  </el-container>
</template>
<script>
export default {
  //打印初始化数据
  data() {
    return {
      dialogVisible: false,
      showClo: false
    };
  },
  methods: {
    //是否显示 Dialog，支持 .sync 修饰符
    closeDialog() {
      this.dialogVisible = false;
    },
    goPring() {
      this.dialogVisible = true;
      //5秒之后跳转到打印结果页面
      setTimeout(() => {
        this.closeDialog();
        this.$router.push({ name: "printResults" });
      }, 5000);
    }
  }
};
</script>
<style>
.el-dialog {
  text-align: center;
}
.el-popover {
  position: absolute;
  top: 30%;
  left: 38%;
}
</style>
<style scoped>
img {
  width: 900px;
}
.el-main {
  height: 558px;
  width: 100%;
}
.printing {
  width: 300px;
}
p {
  font-size: 30px;
  font-weight: bold;
}
.el-button {
  padding: 10px 40px;
  font-size: 28px;
  margin-top: 10px;
}
.el-footer {
  min-height: 20px !important;
}
</style>