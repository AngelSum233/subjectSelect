<template>
  <el-container class="home">
    <el-header>
      <div>
        <span>选课系统</span>
      </div>
      <el-button type="info" plain @click="logout">退出</el-button>
    </el-header>
    <el-container class="home-contanier">
      <el-aside class="home-sider" width='200px'>
        <el-menu
          background-color="#1F2D3D"
          text-color="#fff"
          default-active="workhome">
          <el-menu-item index="workhome" @click="handleroute('/workhome')">
            <template slot="title">
              <i class="el-icon-s-home"></i>
              <span>首页</span>
            </template>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-s-help"></i>
              <span>教师管理系统</span>
            </template>
            <el-menu-item index="college" @click="handleroute('/teacher/college')">
              <template slot="title">
                <i class="el-icon-s-marketing"></i>
                <span>学院列表</span>
              </template>
            </el-menu-item>
            <el-menu-item index="subjects" @click="handleroute('/teacher/subjects')">
              <template slot="title">
                <i class="el-icon-s-data"></i>
                <span>学科列表</span>
              </template>
            </el-menu-item>
            <el-menu-item index="majors" @click="handleroute('/teacher/majors')">
              <template slot="title">
                <i class="el-icon-s-flag"></i>
                <span>专业列表</span>
              </template>
            </el-menu-item>
            <el-menu-item index="administrationclass" @click="handleroute('/teacher/administrationclass')">
              <template slot="title">
                <i class="el-icon-s-claim"></i>
                <span>行政班列表</span>
              </template>
            </el-menu-item>
            <el-menu-item index="classlist" @click="handleroute('/teacher/classlist')">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>课程列表</span>
              </template>
            </el-menu-item>
            <el-menu-item index="subjectclass" @click="handleroute('/teacher/subjectclass')">
              <template slot="title">
                <i class="el-icon-s-finance"></i>
                <span>课程班列表</span>
              </template>
            </el-menu-item>
            <el-menu-item index="teacherlist" @click="handleroute('/teacher/teacherlist')">
              <template slot="title">
                <i class="el-icon-s-grid"></i>
                <span>教师列表</span>
              </template>
            </el-menu-item>
            <el-menu-item index="visitmange" @click="handleroute('/teacher/visitmange')">
              <template slot="title">
                <i class="el-icon-s-custom"></i>
                <span>咨询用户管理员</span>
              </template>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-s-help"></i>
              <span>学生管理系统</span>
            </template>
            <el-menu-item index="studentchoice" @click="handleroute('/student/studentchoice')">
              <template slot="title">
                <i class="el-icon-s-grid"></i>
                <span>选课</span>
              </template>
            </el-menu-item>
            <el-menu-item index="studentinfo" @click="handleroute('/student/studentinfo')">
              <template slot="title">
                <i class="el-icon-s-order"></i>
                <span>基本信息</span>
              </template>
            </el-menu-item>
            <el-menu-item index="studentlist" @click="handleroute('/student/studentlist')">
              <template slot="title">
                <i class="el-icon-s-custom"></i>
                <span>学生列表</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data () {
    return {}
  },
  created () {
  },
  methods: {
    logout () {
      window.sessionStorage.clear()
      this.$router.push('/login')
    },
    handleroute (pathname) {
      this.$router.push(pathname)
    }
  }
}
</script>

<style lang='scss' scoped>
.home{
  height: 100%;
}
.el-header {
  background-color: #020a35e0;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  color: #fff;
  font-size: 20px;
  > div {
    display: flex;
    align-items: center;
    span {
      margin-left: 15px;
    }
  }
}
.el-aside {
  background-color: #1F2D3D;
  .el-menu{
    height: 100%;
    border-right: none;
  }
}
.el-main {
  background-color: #e4eaec;
}
.home-container {
  height: 100%;
}
.iconfont{
  margin-right: 10px;
}
</style>
