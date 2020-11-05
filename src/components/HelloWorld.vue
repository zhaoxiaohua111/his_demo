<template>
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
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      imgUrl: require("@/assets/ljsm.png")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
}
</style>
