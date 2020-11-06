<template>
<<<<<<< HEAD
  <el-container style="height: 700px; border: 1px solid #eee">
    <el-header class="header_box">
    <img :src="imgUrl" class="header_left" width="70%" height="200px" align="left" alt="" />
    <div class="header_right" :span="4">
    <el-link href="@/login" target="blank">登陆</el-link>
    <el-link href="@/register" target="blank">注册</el-link>
    </div>
    </el-header>
    <div>
    <el-row style="height:300px">
      <el-col :span="4" style="height:100%">
        <el-aside class="left_box" width="200px">
        left-左侧区
        </el-aside>
      </el-col>
      <el-col :span="20" style="height:100%">
        <el-main class="main_box">
        Hello-Main区
        </el-main>
      </el-col>
    </el-row>
    <el-footer style="background: lightblue">
    footer区
    </el-footer>
    </div>
  </el-container>
=======
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
  </div>
>>>>>>> 5ed6a06bbb4c524993ec1554179faad63d5b663b
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
<<<<<<< HEAD
      imgUrl: require("@/assets/ljsm.png")
=======
      msg: 'Welcome to Your Vue.js App'
>>>>>>> 5ed6a06bbb4c524993ec1554179faad63d5b663b
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
<<<<<<< HEAD
.left_box{
background-color: rgb(238, 241, 246);
height: 300px
}
.main_box{
 background: lightgreen;
 height:100%
}
.header_box{
  height:500px;
  width:100%;
  z-index:-1;
  position: absolute;
}
..header_left{  
    height:100%;  /**宽高100%是为了图片铺满屏幕 */
    width:70%;
    align:left;
   z-index:1;
   position: absolute;
}
..header_right{
  height:100%;  /**宽高100%是为了图片铺满屏幕 */
    width:30%;
    align:left;
   z-index:1;
   position: absolute;
=======
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
>>>>>>> 5ed6a06bbb4c524993ec1554179faad63d5b663b
}
</style>
