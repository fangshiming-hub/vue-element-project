<template>
  <el-container style="height: 100vh; border: 1px solid #eee">
    <el-header class="header">
      <div>{{ $t('layout.title') }}</div>
      <el-select v-model="language" placeholder="请选择" style="width:150px" @change="selectLanguage">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </el-header>
    <el-container>
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1', '3']" :router="true">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>CSS</template>
            <el-menu-item-group>
              <el-menu-item index="/app/cssAnimal">CSS动画</el-menu-item>
              <el-menu-item index="/app/about">unknow</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}
.header {
  display: flex;
  justify-content: space-between;
}

.el-aside {
  color: #333;
}
</style>

<script>
export default {
  data() {
    return {
      options: [
        {
          value: 'zh', 
          label: '简体中文'
        },
        {
          value: 'en', 
          label: '英语'
        }
      ], 
      language: 'zh'
    }
  },
  methods: {
    selectLanguage(lang){
      this.$i18n.locale = lang;
    }
  }
};
</script>