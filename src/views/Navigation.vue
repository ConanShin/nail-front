<template>
    <div class="navigation">
        <div class="icons" @click.stop.prevent="moveTo(0)">
            <img v-if="selected === 0" src="@/assets/navigation/home-selected.svg"/>
            <img v-else src="@/assets/navigation/home.svg"/>
        </div>
        <div class="icons" @click.stop.prevent="moveTo(1)">
            <img v-if="selected === 1" src="@/assets/navigation/add-selected.svg"/>
            <img v-else src="@/assets/navigation/add.svg"/>
        </div>
        <div class="icons" @click.stop.prevent="moveTo(2)">
            <img v-if="selected === 2" src="@/assets/navigation/unlike-selected.svg"/>
            <img v-else src="@/assets/navigation/unlike.svg"/>
        </div>
    </div>
</template>

<script>
    import {Component, Vue} from 'vue-property-decorator'

    @Component
    export default class Navigation extends Vue {
        get selected() {
            return this.$store.getters.selectedMenu
        }
        moveTo(menuIndex) {
            const container = document.querySelector('.container')
            const height = container.offsetHeight
            container.scrollTo(0, height * menuIndex)
        }
    }
</script>

<style scoped lang="scss">
    .navigation {
        position: fixed;
        top: 10px;
        right: 10px;
        height: auto !important;
        z-index: 1;
    }

    .icons {
        padding: 2px;
        margin: 2px;

        img {
            height: 15px;
        }
    }
</style>
