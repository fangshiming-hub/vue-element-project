<template>
    <div>
        <strong>高德地图测试</strong>
        <div id="map" class="map"></div>
    </div>
</template>
<script>
import { initMap } from './map.js'

export default {
    data(){
        return {

        }
    }, 
    mounted(){
        initMap()
    }
}
</script>

<style scoped>
    .map{
        width: 100%;
        height: 800px;
        border: 1px solid;
    }
</style>