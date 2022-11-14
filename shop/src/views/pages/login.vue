<template>
    <div class="login_wrap">
        <div class="form_wrap">
            <el-form>
                <el-form
                  ref="formRef"
                  :model="loginData"
                  label-width="100px"
                  class="demo-dynamic"
                >
                  <el-form-item
                    prop="userName"
                    label="用户名"
                    :rules="[
                      {
                        required: true,
                        message: '此项为必填项',
                        trigger: 'blur',
                      },
                     ]"
                    >
                    <el-input v-model="loginData.userName" />
                   </el-form-item>
                </el-form>
            </el-form>

            <el-form>
                <el-form
                  ref="formRef"
                  :model="loginData"
                  label-width="100px"
                  class="demo-dynamic1"
                >
                  <el-form-item
                    prop="passWord"
                    label="密码"
                    :rules="[
                      {
                        required: true,
                        message: '此项为必填项',
                        trigger: 'blur',
                      },
                     ]"
                    >
                    <el-input type="passWord" v-model="loginData.passWord" />
                   </el-form-item>
                </el-form>
            </el-form>

            <el-button  class="login_btn" type="primary" @click="handleLogin" >登录</el-button>
            <p>{{num}}</p>
        </div>

    </div>
</template>

<script>
import { reactive, toRefs } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router'; 
import { loginApi } from "@/utils/request"
  export default{
    name:'login',
    setup(){
        const store = useStore()
        const router = useRouter()
        const count = store.state.number.count
        const data = reactive({
            loginData:{
                userName:"",
                passWord:""
            },
            num:count,
            numStatus:store.getters.countStatus
        })
        const handleLogin=()=>{
          //请求后台接口
          //默认用户：admin 123456
          loginApi(data.loginData).then(res=>{
            if (res.data) {
              store.commit('setUserInfo',  data.loginData)
          //使用localStorage可以防止，当我们跳转到另一个页面，再刷新就不会回到之前的最初页面了
              localStorage.setItem("loginData", JSON.stringify(data.loginData))
          //跳转/
              router.push({
                path:'/user'
              })
            }
          })

        }
        
        //vuex更改语法
        // console.log("修改前getters", store.getters["number/countStatus"])
        // const handleLogin = () => {
        //   // store.commit('setCount', 100);
        //   store.dispatch('number/setCountPromise', 10).then(res => {
        //     alert("修改成功")
        //   }).catch(err => {
        //     alert(err)
        //   });
        //   console.log(store.state.number.count)
        //   console.log("修改后getters", store.getters["number/countStatus"])
        // }
        return{
            ...toRefs(data),
            handleLogin
        }
    }
  }
</script>

<style> 
  .login_wrap{
    width: 100%;
    height: 100vh;
    background: rgb(56, 86, 139);
    position: relative;
  }
  .form_wrap{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #ffff;
    padding: 30px 50px;
    border-radius: 5px;
  }
  .login_btn{
    margin: 10px auto;
    display: block;
  }

</style>