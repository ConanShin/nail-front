<template>
    <div class="login">
        <img class="button" @click="login" src="@/assets/login/kakao.png"/>
    </div>
</template>

<script>
    import {Component, Vue} from 'vue-property-decorator'

    @Component
    export default class Login extends Vue {
        async login() {
            Kakao.Auth.login({
                success: response => {
                    Kakao.Auth.setAccessToken(response.access_token)
                    Kakao.API.request({
                        url: '/v2/user/me',
                        success: ({id, kakao_account}) => {
                            sessionStorage.setItem('userId', id)
                            this.$router.push('/main')
                        }
                    })
                },
                fail: error => {
                    console.log(error)
                }
            })
        }
    }
</script>

<style scoped lang="scss">
    .login {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        font-family: inherit;
    }
    .button {
        cursor: pointer;
        width: 70px;
        height: 70px;
        padding: 5px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: rgb(250, 225, 2);
        color: coral;
        border-radius: 10px;
    }
</style>