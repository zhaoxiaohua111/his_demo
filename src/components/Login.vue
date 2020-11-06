<template>
<<<<<<< HEAD
  <el-container style="height: 100%; background:lightblue">
    
       <el-main class="main_box" >
        <el-card class="card">
         <el-form ref="loginForm" :model="loginForm" label-width="80px" class="login_form">
            <h4>健康云his系统-登录</h4>
            <el-input class="myinput" v-model="loginForm.username" placeholder="请输入用户名"></el-input> 
            <el-input class="myinput" v-model="loginForm.password" placeholder="请输入密码"  show-password></el-input>
            <el-button class="myinput" style="width:240px" type="primary" @click="onSubmit">登录</el-button>
              
         </el-form>
        </el-card>
       </el-main>
    
   </el-container>
</template>


<script>
export default {
  name: 'Login',
  data () {
    return {
     'loginForm':{
     'username':'',
     'password':''
     }
    }
  },
  methods:{
      onSubmit(){
          this.axios({
            mothod:'post',
            url:'http://localhost:8090',
            data:this.loginForm
          }).then(function (response) {
          console.log(response+"请求成功");
        })
        .catch(function (error) {
          console.log(error+"服务器失败");
        });
      }
  }
}
=======

<div >

  <div class="background">
    <img :src="require('@/assets/login.png')" width="100%" height="100%" alt="" />
  </div>

  <div  class="login" >

<br><br>
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="用户名">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <br>
          <el-form-item label="密码">
            <el-input v-model="form.name"></el-input>
          </el-form-item>


          <el-form-item> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
          &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
            <el-button type="primary" @click="onSubmit">登录</el-button>&nbsp&nbsp&nbsp&nbsp
            <el-button>注册</el-button>
          </el-form-item>
        </el-form>




  </div>

</div>

</template>





<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
>>>>>>> 5ed6a06bbb4c524993ec1554179faad63d5b663b
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
<<<<<<< HEAD
 .main_box{
   background:url('../assets/Login.png') no-repeat center #ccc;
   background-size: 100% 100%; 
   height:900px;
 }
.header_box{
  text-align: center;
   font-size: 40px;
   background:lightblue
}
.card{
  width:420px;
    margin-left: 36%;
    margin-top: 10%;
  background-color: rgba(200,200,200,0.5);
  boder-color:rgba(200,200,200,0.5);
  boder-radius:10px
}
.login_form{
    width:340px;
    height:300px;
    padding:20px;/*填充*/
}

.myinput{
    margin:15px;/*元素边距*/
    width:300px;
    opacity:1;
=======

.background{
    width:100%;
    height:100%;  /**宽高100%是为了图片铺满屏幕 */
    z-index:-1;
    position: absolute;

}

.login{
    z-index:1;
    position: absolute;

    width:600px;
    height:300px;
    margin-left: 550px;
    margin-top:300px;
>>>>>>> 5ed6a06bbb4c524993ec1554179faad63d5b663b
}
</style>
