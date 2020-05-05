<template>
    <div class="new">
        <calendar @selectDate="showTimeSelector"></calendar>
        <vue-timepicker @open="setHours" :minute-interval="10" :hour-range="[[9, 18]]" v-click-outside="hideTimePicker"></vue-timepicker>
    </div>
</template>

<script>
    import {Component, Vue} from 'vue-property-decorator'
    import Calendar from "@/views/Schedule/Calendar";
    import VueTimepicker from 'vue2-timepicker/src/vue-timepicker'


    @Component({
        components: {Calendar, VueTimepicker}
    })
    export default class New extends Vue {
        showTimePicker = false

        mounted() {

        }

        setHours() {
            document.querySelectorAll('.time-picker .hours li').forEach(el => {
                if (Number(el.textContent) < 9) el.parentElement.removeChild(el)
                if (Number(el.textContent) > 19) el.parentElement.removeChild(el)
            })
        }

        showTimeSelector(date) {
            console.log(date)
            this.showTimePicker = true
            // this.$el.querySelector('.time-picker .dropdown').style.display = 'block'
        }

        hideTimePicker() {
            // this.$el.querySelector('.time-picker .dropdown').style.display = 'none'
        }
    }
</script>
<style scoped lang="scss">
    .new {
        position: relative;
    }
</style>
<style lang="scss">
    .time-picker {
        width: calc(100%);
        height: 310px;
        position: absolute;
        top: 100px;
        left: 0;
        input {
            width: 100% !important;
            background: transparent;
            height: 100% !important;
            border: none !important;

            &::placeholder {
                color: transparent;
            }
        }
        .hours {
        }
    }
</style>
