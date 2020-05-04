<template>
    <div class="schedule">
        Schedule
    </div>
</template>

<script>
    import {Component, Vue} from 'vue-property-decorator'
    import PullToRefresh from 'pulltorefreshjs'

    @Component
    export default class Schedule extends Vue {
        get userId() {
            return sessionStorage.getItem('userId')
        }

        pullToRefresh() {
            const _this = this
            PullToRefresh.init({
                triggerElement: '.home',
                onRefresh() {
                    _this.$store.dispatch('readItems')
                },
                instructionsPullToRefresh: ' ',
                instructionsReleaseToRefresh: ' ',
                instructionsRefreshing: ' '
            })
        }

        mounted() {
            this.pullToRefresh()
        }
    }
</script>

<style scoped lang="scss">
    .schedule {
    }
</style>