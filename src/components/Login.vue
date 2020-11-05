<template>
  <el-container style="height: 700px; border: 1px solid #eee">
    
       <el-main class="main_box" >

         <el-form ref="loginForm" :model="loginForm" label-width="80px" class="login_form">
            <h4>健康云his系统-登录</h4>
            <el-input class="myinput" v-model="loginForm.username" placeholder="请输入用户名"></el-input> 
            <el-input class="myinput" v-model="loginForm.password" placeholder="请输入密码"  show-password></el-input>
            <el-button class="myinput" style="width:240px" type="primary"@click="onSubmit">登录</el-button>
              
         </el-form>
           
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
            url:'user/12345',
            data:this.login_form
          }).then(function (response) {
          console.log("请求成功");
        })
        .catch(function (error) {
          console.log("服务器失败");
        });
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .main_box{
   background:url('../assets/登陆.png') no-repeat center #ccc;
   background-size: 100% 100%; 
   height:800px;
 }
.header_box{
  text-align: center;
   font-size: 40px;
   background:lightblue
}
.login_form{
    width:340px;
    height:300px;
    padding:20px;/*填充*/
    margin-left: 36%;
    margin-top: 10%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}
.myinput{
    margin:15px;/*元素边距*/
    width:300px
}
</style>
