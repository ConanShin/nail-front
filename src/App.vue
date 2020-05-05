<template>
    <div id="app">
        <div class="title">Nail B</div>
        <router-view></router-view>
    </div>
</template>

<script>
    import {Component, Vue} from 'vue-property-decorator'

    @Component
    export default class App extends Vue {
    }
</script>
<style scoped lang="scss">
    .title {
        font-family: pecita;
        position: fixed;
        top: 14px;
        color: #616161;
        font-size: 25px;
        z-index: 1;
        width: 100%;
        text-align: center;
    }
</style>

<style lang="scss">
    html, body, #app {
        font-family: monospace;
        height: 100%;
        -webkit-overflow-scrolling: touch;
        margin: 0;
        overflow: hidden;
    }

    input {
        -webkit-appearance: none;
        -webkit-border-radius: 0;
        outline: none;

        &:focus {
            outline: none;
        }
    }

    @font-face {
        font-family: pecita;
        src: url("./assets/font/Pecita.otf");
    }

    .ptr--ptr {
        box-shadow: none !important;
        position: relative;
        z-index: 3;
    }
</style>
