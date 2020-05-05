<template>
    <div class="schedule">
        <calendar @selectDate="readTimeTable"></calendar>
        <time-table></time-table>
    </div>
</template>

<script>
    import {Component, Vue} from 'vue-property-decorator'
    import PullToRefresh from 'pulltorefreshjs'
    import Calendar from "@/views/Schedule/Calendar";
    import TimeTable from "@/views/Schedule/TimeTable";

    @Component({
        components: {TimeTable, Calendar}
    })
    export default class Schedule extends Vue {
        get userId() {
            return sessionStorage.getItem('userId')
        }

        pullToRefresh() {
            PullToRefresh.init({
                triggerElement: '.schedule',
                onRefresh() {
                    console.log('hello')
                },
                instructionsPullToRefresh: ' ',
                instructionsReleaseToRefresh: ' ',
                instructionsRefreshing: ' '
            })
        }

        readTimeTable(date) {
            this.$store.dispatch('readTimeTable', date)
        }

        mounted() {
            this.pullToRefresh()
        }
    }
</script>

<style scoped lang="scss">
    .schedule {
        position: relative;
    }
</style>