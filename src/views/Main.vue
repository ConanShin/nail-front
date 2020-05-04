<template>
    <div class="main">
        <navigation></navigation>
        <div class="container">
            <home></home>
            <new></new>
            <unlike></unlike>
        </div>
    </div>
</template>

<script>
    import {Component, Vue} from 'vue-property-decorator'
    import Navigation from './Navigation'
    import Home from './Schedule/Schedule'
    import Unlike from './Admin/Admin'
    import New from './New/New'

    @Component({
        components: {Navigation, Home, New, Unlike}
    })
    export default class Main extends Vue {
        debounce = null

        mounted() {
            const container = document.querySelector('.container')
            container.addEventListener('scroll', event => {
                clearTimeout(this.debounce)
                this.debounce = setTimeout(() => {
                    const height = container.offsetHeight
                    const yPosition = container.scrollTop
                    let viewingIndex = 0
                    if (yPosition > height * 2 + 300) viewingIndex = 3
                    else if (yPosition > height + 300) viewingIndex = 2
                    else if (yPosition > 300) viewingIndex = 1
                    this.$store.commit('selectMenu', viewingIndex)
                })
            }, false)
        }
    }
</script>

<style scoped lang="scss">
    .main {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        height: 100%;

        .container {
            height: 100%;
            overflow-y: auto;
            scroll-snap-type: y mandatory;
            -webkit-overflow-scrolling: touch;
            z-index: 0;

            & > div {
                height: 100%;
                scroll-snap-align: start;
            }
        }
    }
</style>
