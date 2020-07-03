<template>
  <el-container>
    <el-header>
      <el-row>
        <el-col :span="17">
          <el-row>
            <el-col :span="10">
              <img src="~@/assets/Images/logo1.png" />
            </el-col>
            <el-col :span="14">
              <div class="logoName">{{$t('mainTitle')}}</div>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="7">
          <div id="show_time"></div>
        </el-col>
      </el-row>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
    <el-footer>
      <div class="nav-box">
        <el-row type="flex" class="row-bg" justify="space-between">
          <el-col :span="6" class="versionText">
            <small>NO:SC001</small>
          </el-col>
          <el-col :span="6" :offset="6" class="right versionText">
            <small>V:1.0.0</small>
          </el-col>
        </el-row>
      </div>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  //公共页面初始化数据
  data: function() {
    return {
      //设置默认语言为中文
      lang: "zh"
    };
  }
};
//这里代码多了几行，但是不会延迟显示，速度比较好，格式可以自定义，是理想的时间显示
setInterval(function() {
  fun();
}, 1000);
function fun() {
  var date = new Date(); //创建对象
  var y = date.getFullYear(); //获取年份
  var m = date.getMonth() + 1; //获取月份  返回0-11
  var d = date.getDate(); // 获取日
  var w = date.getDay(); //获取星期几  返回0-6   (0=星期天)
  var ww = "周" + "日一二三四五六".charAt(new Date().getDay()); //星期几
  var h = date.getHours(); //时
  var minute = date.getMinutes(); //分
  var s = date.getSeconds(); //秒
  var sss = date.getMilliseconds(); //毫秒
  if (m < 10) {
    m = "0" + m;
  }
  if (d < 10) {
    d = "0" + d;
  }
  if (h < 10) {
    h = "0" + h;
  }
  if (minute < 10) {
    minute = "0" + minute;
  }
  if (s < 10) {
    s = "0" + s;
  }
  if (sss < 10) {
    sss = "00" + sss;
  } else if (sss < 100) {
    sss = "0" + sss;
  }

  document.getElementById("show_time").innerHTML =
    y + "年" + m + "月" + d + "日 " + h + ":" + minute + "  " + ww;
  //document.write(y+"-"+m+"-"+d+"   "+h+":"+minute+":"+s);
}
</script> 
<style>
@import "~@/assets/css/main.css";
.el-header {
  padding-right: 0px !important;
}
.logoName {
  font-family: "黑体";
  font-size: 2.4rem;
  border-left: 1px solid #000;
  left: 100px;
  height: 68px;
  line-height: 68px;
  padding-left: 16px;
}
#show_time {
  border-radius: 15px; /*这句就是重点，让边框变为圆角*/
  background-color: #e3e3e5;
  font-size: 16px;
  font-family: "黑体";
  height: 32px;
  line-height: 32px;
  float: right;
  padding-left: 10px;
  padding-right: 30px;
  top: 20px;
  box-shadow: 0px 0px 0px 1px #bdbdbd;
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
  margin-top: 18px;
}
.el-main {
  max-height: 647px;
  min-height: 430px;
  width: 90%;
  margin: 0 auto;
  font-size: 16px;
  padding: 20px 20px 10px 20px !important;
}
.footer {
  padding: 0;
}
.nav-box {
  width: 100%;
  position: absolute;
  bottom: 10px;
  margin: 0;
  left: 0;
  right: 0;
}
.right {
  text-align: right;
}
.versionText {
  padding: 10px;
}
.el-footer {
  height: auto;
}
.el-button {
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.9); /*阴影出现在元素下方*/
}
</style> 