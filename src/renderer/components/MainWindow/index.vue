<template>
  <div>
    <el-container>
      <el-header>
        <el-row>
          <el-col :span="24">
            <el-button size="large" style="margin:0 auto" class="button-right" @click="capture">拍照</el-button>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <el-row>
          <el-col :span="24">
            <div>
              <video class="video" id="video" width="640" height="480" controls></video>
              <canvas class="video" id="canvas" style="margin-top:15px;" width="640" height="480"></canvas>
            </div>
            <div>
              <video id="video1" width="640px" height="480" controls></video>
              <canvas class="video" id="canvas1" style="margin-top:15px;" width="640" height="480"></canvas>
            </div>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>
<style scoped>
.video {
  display: none;
}
/* 全屏按钮 */
/* video::-webkit-media-controls-fullscreen-button {
  display: none;
} */
/* 播放按钮 */
/* video::-webkit-media-controls-play-button {
  display: none;
} */
/* 进度条 */
/* video::-webkit-media-controls-timeline {
  display: none;
} */
/* 观看的当前时间 */
/* video::-webkit-media-controls-current-time-display {
  display: none;
} */
/* 剩余时间 */
/* video::-webkit-media-controls-time-remaining-display {
  display: none;
} */
/* 音量按钮 */
/* video::-webkit-media-controls-mute-button {
  display: none;
} */
/* video::-webkit-media-controls-toggle-closed-captions-button {
  display: none;
} */
/* 音量的控制条 */
/* video::-webkit-media-controls-volume-slider {
  display: none;
} */
/* 所有控件 */
video::-webkit-media-controls-enclosure {
  display: none;
}
</style>
<script>
export default {
  data: function() {
    return {
      nirdid: "",
      visdid: "",
      videoElement: "",
      videoElement1: ""
    };
  },
  mounted: function() {
    this.videoElement = document.querySelector("video");
    this.videoElement1 = document.getElementById("video1");
    console.log(this.videoElement);
    navigator.getUserMedia =
      navigator.getUserMedia ||
      navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia ||
      navigator.msGetUserMedia;
    navigator.mediaDevices
      .enumerateDevices()
      .then(this.gotDevices)
      .catch(this.handleError);
  },
  methods: {
    gotDevices: function(deviceInfos) {
      // 遍历所有的设备，包括视频和音频设备。 找出 RGB相机设备
      var constraints = new Array(2);
      var id = 0;
      for (var i = 0; i !== deviceInfos.length; ++i) {
        var deviceInfo = deviceInfos[i];

        if (deviceInfo.label.indexOf("CE3100_NIR") != -1) {
          console.log(deviceInfo);
          this.nirdid = deviceInfo.deviceId;
        }
        if (deviceInfo.label.indexOf("CE3100_VIS") != -1) {
          console.log(deviceInfo);
          this.visdid = deviceInfo.deviceId;
          console.log(this.visdid);
        }
      }

      if (window.stream) {
        window.stream.getTracks().forEach(function(track) {
          track.stop();
        });
      }

      //红外摄像头
      navigator.mediaDevices
        .getUserMedia({ audio: true, video: { deviceId: this.nirdid } })
        .then(this.gotStream)
        .catch(this.handleError);
      //   //可见光摄像头
      navigator.mediaDevices
        .getUserMedia({ audio: true, video: { deviceId: this.visdid } })
        .then(this.gotStream1)
        .catch(this.handleError);
    },
    capture: function() {
      //创建forme
      var canvas = document.getElementById("canvas");
      var context = canvas.getContext("2d");
      var canvas1 = document.getElementById("canvas1");
      var context1 = canvas1.getContext("2d");
      context.drawImage(this.videoElement, 0, 0, 640, 480);
      context1.drawImage(this.videoElement1, 0, 0, 640, 480);

      var image = canvas.toDataURL("image/jpeg");
      image = image.replace("data:image/jpeg;base64,", "");
      canvas.toBlob(function(blob) {
        //创建forme
        console.log(blob);
      });
    },
    gotStream: function(stream) {
      this.videoElement = document.getElementById("video");
      window.stream = stream; // make stream available to console
      this.videoElement.srcObject = stream;
      this.videoElement.play();
      // 使用 tracking.js 在图像上框选出人脸
      //var canvas = document.getElementById('canvas');
      //drawBox(canvas,videoElement);
    },
    gotStream1: function(stream) {
      this.videoElement1 = document.getElementById("video1");
      window.stream = stream; // make stream available to console
      this.videoElement1.srcObject = stream;
      this.videoElement1.play();
      // 相机2
      //var canvas1 = document.getElementById('canvas1');
      //drawBox(canvas1,videoElement1);
    },
    handleError: function(error) {
      console.log("Error: ", error);
    }
  }
};
</script> 