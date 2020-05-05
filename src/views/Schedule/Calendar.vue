<template>
    <div class="calendar">
        <div class="cell weekday" :class="{red: weekIndex > 4}" v-for="(day, weekIndex) in weekdays">{{day}}</div>
        <div class="week" v-for="(week, weekIndex) in daysEachWeek">
            <span class="cell empty" v-if="weekIndex === 0" v-for="dayIndex in 7-week"></span>
            <template v-for="dayIndex in week">
                <span @click="selecteDate(index2Date(dayIndex, weekIndex))" class="cell" :class="[index2Date(dayIndex, weekIndex).format('YYYYMMDD'), isWeekend(index2Date(dayIndex, weekIndex)) && 'red']">
                    {{index2Date(dayIndex, weekIndex).date()}}
                    <div class="remain">1타임</div>
                </span>
            </template>
            <span class="cell empty" v-if="weekIndex === daysEachWeek.length-1" v-for="dayIndex in 7-week"></span>
        </div>
    </div>
</template>

<script>
    import {Component, Vue} from 'vue-property-decorator'
    import moment from 'moment'

    @Component
    export default class Calendar extends Vue {
        weekdays = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun']
        now = moment()

        get daysInFirstWeek() {
            const firstDayOfMonth = this.now.startOf('month').day()
            if (firstDayOfMonth === 0) return 1
            return 8 - firstDayOfMonth
        }

        get daysInLastWeek() {
            const lastDayOfMonth = this.now.endOf('month').day()
            if (lastDayOfMonth === 0) return 7
            return lastDayOfMonth
        }

        get fullWeeks() {
            const numberOfWeek = (this.now.daysInMonth() - this.daysInFirstWeek - this.daysInLastWeek) / 7
            return Array(numberOfWeek).fill(7)
        }

        get daysEachWeek() {
            return [this.daysInFirstWeek, ...this.fullWeeks, this.daysInLastWeek]
        }

        index2Date(dayIndex, weekIndex) {
            const date = dayIndex + (weekIndex !== 0 ? (weekIndex - 1) * 7 + this.daysInFirstWeek : 0)
            return this.now.set({date})
        }

        isWeekend(date) {
            return date.day() === 6 || date.day() === 0
        }

        selecteDate(date) {
            this.$emit('selectDate', date)
        }
    }
</script>

<style scoped lang="scss">
    .calendar {
        position: relative;
        top: 100px;
        margin: auto;
        display: table;
        border-collapse: collapse;

        .week {
            display: table-row;
        }

        .cell {
            display: table-cell;
            font-size: 12px;
            text-align: left;
            padding: 5px;
            border: 1px solid black;

            &.red {
                color: red;
            }
            .remain {
                display: flex;
                width: 10vw;
                height: 4vh;
                align-items: center;
                color: black;
            }
        }

        .weekday {
            border: none;
            text-align: center;
        }
    }
</style>