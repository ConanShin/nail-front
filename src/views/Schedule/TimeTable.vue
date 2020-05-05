<template>
    <div class="timetable" :class="timetable ? 'show' : 'hide'" @click="clear">
        <div class="table" @click.stop.prevent>
            <div class="date">{{date}}</div>
            <div class="time">
                <div v-for="time in timetable">{{time.start}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    import {Component, Vue} from 'vue-property-decorator'

    @Component
    export default class TimeTable extends Vue {
        get timetable() {
            return this.$store.getters.timetable
        }

        get date() {
            return this.$store.getters.selectedDate
        }

        clear() {
            this.$store.commit('resetSelection')
        }
    }
</script>

<style scoped lang="scss">
    @keyframes open {
        0% {
            height: 0;
            opacity: 0;
        }
        100% {
            height: 100%;
            opacity: 1;
        }
    }

    @keyframes close {
        0% {
            height: 100%;
            opacity: 1;
        }
        100% {
            height: 0;
            opacity: 0;
        }
    }

    @keyframes slide-up {
        0% {
            height: 0;
        }
        100% {
            height: 400px;
        }
    }

    @keyframes slide-down {
        0% {
            height: 400px;
        }
        100% {
            height: 0;
        }
    }

    .timetable {
        position: absolute;
        top: 0;
        height: 0;
        width: 100%;
        background-color: #ffffffbf;
        overflow: hidden;

        .table {
            height: 0;
            width: 100%;
            position: absolute;
            bottom: 0;
            overflow: hidden;
        }

        $keyframe-time: .5s;

        &.show {
            animation: open $keyframe-time forwards;

            .table {
                animation: slide-up $keyframe-time forwards;
                animation-delay: $keyframe-time;
            }
        }

        &.hide {
            height: 100%;
            animation: close $keyframe-time forwards;
            animation-delay: $keyframe-time;

            .table {
                height: 400px;
                animation: slide-down $keyframe-time forwards;
            }
        }
        .date {
            height: 15px;
        }
        .time {
            height: calc(100% - 35px);
            border: 1px solid black;
            margin: 10px;
        }
    }
</style>