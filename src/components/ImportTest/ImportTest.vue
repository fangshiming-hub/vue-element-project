<template>
  <div>
    <strong>文件导入测试</strong>
    <div>导入的文件为:{{ fileName }}</div>

    <br>
    <br>
    <br>
    <br>
    <div class="img-loader">
      <input @change="imgChange" ref="loadImg" v-show="false" type="file" accept=".png, .jpg, .jpeg">
      <div @click="loadImg" v-show="!imgFile" class="img-div">点击加载图片</div>
      <div class="img-wrap" v-show="imgFile">
        <div class="img-operate">
          <el-button @click="readImg">查看大图</el-button>
          <el-button @click="delImg">删除</el-button>
        </div>
        <div class="img-wrap-div" :style="imgStyle"></div>
        <!-- <img ref="realimg" width="100%" height="100%" :src="imgSrc" alt=""> -->
        <!-- <el-image 
          style="width: 100%; height: 100%"
          :src="imgSrc" 
          :preview-src-list="srcList">
        </el-image> -->
      </div>
    </div>
  </div>
  
</template>
<script>
// 默认情况下 要是核心模块?
// setTimeout(async() => {
//   const a = await import("./test01.js");
//   const {add} = a
//   console.log(a, add());
// }, 5000);
// let file = null;
// async function importFile(url){
//     const result = await import(url);
//     return result;
// }
// console.log("初始化");
// const path01 = "test01.js";
// const path02 = "test01.js";
// if(window.sessionStorage.getItem("testimport")) {
//     file = importFile(`./${path01}`);
//     console.log("加载test01");
// }else{
//     file = importFile(`./${path02}`);
//     console.log("加载test2");
// }
// console.log(file, "file")
let file = null
export default {
  data() {
    return {
       fileName: '空',
       imgFile: null,
       imgSrc: null
    };
  },
  created(){
    console.log(this.loadFile);
    file = this.loadFile('./test01.js')
    console.log(file);
  },
  computed: {
    imgStyle(){
      return `background-image:url(${this.imgSrc}) `
    }
  },
  methods: {
    async loadFile(path){
      return await import(path)
    },
    loadImg() {
      this.$refs.loadImg.click();
    },
    imgChange(ev) {
      console.log(111);
      this.imgFile = ev.target.files[0]
      const imgsrc = window.URL.createObjectURL(this.imgFile);
      this.imgSrc = imgsrc;
      console.log(ev);

      setTimeout(() => {
        console.dir(this.$refs.realimg);
      }, 1000)
    },
    delImg() {
      this.$refs.loadImg.value = null;
      this.imgsrc = null,
      this.imgFile = null;
    },
    readImg() {
      const fileReader = new FileReader();
      fileReader.onload = (res) => {
        const image = new Image()
        image.onload = () => {
          console.log(image.width, image.height);
        }
        image.src = res.target.result;
        console.log(res);
      }
      fileReader.readAsDataURL(this.imgFile)
    }
  },
  mounted() {
    console.log()
    this.$message({
      type: "success",
      message: "heelo",
    });
  },
};
</script>

<style scoped>
.img-loader{
  width: 200px;
  height: 300px;
  border: 1px solid #ccc;
}
.img-div{
  height: 100%;
  background-color: #ccc;
}

.img-wrap{
  position: relative;
  height: 100%;
}
.img-wrap-div{
  position: relative;
  height: 100%;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center center;
}
.img-operate{
  width: 0;
  height: 0;
  overflow: hidden;
  position: absolute;
}
.img-wrap:hover .img-operate{
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.4);
}
</style>