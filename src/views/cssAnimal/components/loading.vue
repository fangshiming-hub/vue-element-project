<template>
    <div id="loading">
        <div class="loading"></div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.loading {
    display: inline-block;
    border: 4px solid hsl(222 100% 95%);
    border-left-color: hsl(243 80% 62%);
    border-radius: 50%;
    width: 30px;
    height: 30px;
    animation: donut-spin 1.5s linear infinite;
}

@keyframes donut-spin {
    to {
        transform: rotate(1turn);
    }
}

</style>
