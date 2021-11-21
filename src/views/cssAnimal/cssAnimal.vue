<template>
    <div id="cssAnimal">
        <loading></loading>
    </div>

</template>
<script>
import loading from "./loading.vue";
    export default{
        components: {
            loading
        },
        mounted(){
            fetch('/api/sou')
        }
    }
</script>