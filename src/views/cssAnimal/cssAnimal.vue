<template>
    <div id="cssAnimal">
        <loading></loading>
        <div>
            <el-radio-group v-model="selected">
                <el-radio :label="11">11</el-radio>
                <el-radio :label="22">22</el-radio>
                <el-radio :label="33">33</el-radio>
                <el-radio :label="44">44</el-radio>
            </el-radio-group>
             <el-divider></el-divider>
            <!-- <test-01 v-if="selected===11"> -->
            <test-01>
                <template #header="scoped">
                    <span>header==={{scoped.header && scoped.header.age}}</span>
                </template>
            </test-01>
            <test-02 v-if="selected===22"></test-02>
            <test-03 v-if="selected===33"></test-03>
            <test-04 v-if="selected===44"></test-04>
            <el-input v-model="inputValue"></el-input>
            <el-button @click="open">vnode弹窗</el-button>
        </div>
    </div>
</template>
<script>
import loading from "./components/loading.vue";
import Test01 from './components/test01.vue'
import Test02 from './components/test02.vue'
import Test03 from './components/test03.vue'
import Test04 from './components/test04.vue'
export default{
    name: 'css-animal',
    components: {
        loading,
        Test01,
        Test02,
        Test03,
        Test04,
    },
    data() {
        return {
            selected: 11,
            inputValue: '测试', 
            key: 0
        }
    },
    mounted(){
        setTimeout(() => {
            console.log(this);
        })
    },
    methods: {
        open() {
            const that = this;
            const h = this.$createElement;
            this.$confirm('测试', {
                message: h('div', {
                    key: that.key++
                }, [
                    h('el-input', {
                        props: {
                            value: that.inputValue
                        },
                        on: {
                            input: function(value) {
                                that.inputValue = value
                                console.log(value, that.inputValue,44)
                            }
                        }
                    })
                ])
            })
        }
    }
}
</script>