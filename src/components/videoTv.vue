<template>
    <div>
        <el-divider content-position="left">video.js测试</el-divider>
        <video ref="videoPlayer" id="videoPlayer" class="video-js">
            <!-- <source src="../assets/video/03.mp4"  type="video/mp4"> -->
            <source src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"  type="video/mp4">
            <!-- 在不支持flash的浏览器上, 不会播放rtmp/flv的视频 -->
            <source src="rtmp://58.200.131.2:1935/livetv/zjhd" type="rtmp/flv">
        </video>
    </div>
    
</template>
<script>
import videojs from 'video.js'
import 'videojs-flash' // 为了播放rtmp格式
import 'video.js/dist/video-js.css'

export default {
    name: "VideoPlayer",
    props: {
        options: {
            type: Object,
            default() {
                return {
                    preload: 'auto',// 预加载
                    // bigPlayButton: {},// 大按钮
                    controls: true,// 是否开启控制栏
                    width: 850,// 播放器宽度
                    height: 600,// 播放器高度
                    playbackRates: [1, 1.5, 2],
                    muted: true, //是否静音
                    loop : false, //是否循环播放
                    autoplay:true, //是否自动播放
                    techOrder: ["html5", "flash"],//设置flash播放
                    language: "zh-CN",
                };
            }
        }
    },
    data() {
        return {
            player: null
        }
    },
    mounted() {
        console.log(videojs)
        console.log(this.$videojs.options, 555);
        this.player = videojs(this.$refs.videoPlayer, this.options, function onPlayerReady() {
            console.log('onPlayerReady', this);
        })
    },
    beforeDestroy() {
        if (this.player) {
            this.player.dispose()
        }
    }
}
</script>