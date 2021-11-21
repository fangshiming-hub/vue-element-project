<template>
  <div>
    <h2>密码框测试</h2>
    <hr />
    <div style="width: 500px">
      <el-form action="http:www.baidu.com" method="post">
        <el-form-item>
          <el-input
            v-model="username"
            type="text"
            name="text"
            placeholder="账号"
            autocomplete="off"
            ><i slot="prefix" class="el-input_icon el-icon-user"></i
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            v-model="pwdCover"
            type="text"
            name="pwd"
            id="pwd"
            placeholder="密码"
            autocomplete="off"
            @input="setPassword"
            ><i slot="prefix" class="el-icon-lock"></i
          >
          <i @mousedown="showPwd" @mouseup="hidePwd" slot="suffix" style="cursor: pointer" class="el-input__icon el-icon-unlock"></i></el-input>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pwdCover: "",
      username: "",
      password: ""
    };
  },
  computed: {
    pwd2() {
      const a = "*";
      return a.repeat(this.pwd.length);
    },
  },
  methods: {
    setPassword(val) {
      let reg = /[0-9a-zA-Z]/g; // 只允许输入字母和数字
      let nDot = /[^●]/g; // 非圆点字符
      let index = -1; // 新输入的字符位置
      let lastChar = void 0; // 新输入的字符
      let realArr = this.password.split(""); // 真实密码数组
      let coverArr = val.split(""); // 文本框显示密码数组
      let coverLen = val.length; // 文本框字符串长度
      let realLen = this.password.length; // 真实密码长度
      // 找到新输入的字符及位置
      coverArr.forEach((el, idx) => {
        if (nDot.test(el)) {
          index = idx;
          lastChar = el;
        }
      });
      // 判断输入的字符是否符合规范，不符合的话去掉该字符
      if (lastChar && !reg.test(lastChar)) {
        coverArr.splice(index, 1);
        this.pwdCover = coverArr.join("");
        return;
      }
      if (realLen < coverLen) {
        // 新增字符
        realArr.splice(index, 0, lastChar);
      } else if (coverLen <= realLen && index !== -1) {
        // 替换字符（选取一个或多个字符直接替换）
        realArr.splice(index, realLen - (coverLen - 1), lastChar);
      } else {
        // 删除字符，因为 val 全是 ● ，没有办法匹配，不知道是从末尾还是中间删除的字符，删除了几个，不好对 password 处理，所以可以通过光标的位置和 val 的长度来判断
        let pos = document.getElementById("pwd").selectionEnd; // 获取光标位置
        realArr.splice(pos, realLen - coverLen);
      }
      // 将 pwdCover 替换成 ●
      this.pwdCover = val.replace(/\S/g, "●");
      this.password = realArr.join("");
      console.log(this.password);
    },
    showPwd(){
        this.pwdCover = this.password;
    },
    hidePwd(){
        const dot = "●";
        this.pwdCover = dot.repeat(this.password.length)
    }
  },
};
</script>