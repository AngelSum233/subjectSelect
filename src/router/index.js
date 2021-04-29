import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Workhome from '../views/Workhome.vue'
import CementingDataShow from '../views/CementingDataShow.vue'
import Statistics from '../views/Statistics.vue'
import System from '../views/System.vue'

import College from '../views/teacher/College.vue'
import Subjectclass from '../views/teacher/Subjectclass.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    redirect: '/workhome',
    children: [
      { path: '/workhome', component: Workhome },
      { path: '/teacher/college', component: College },
      { path: '/teacher/subjects', component: Statistics },
      { path: '/teacher/majors', component: Statistics },
      { path: '/teacher/administrationclass', component: Statistics },
      { path: '/teacher/classlist', component: CementingDataShow },
      { path: '/teacher/subjectclass', component: Subjectclass },
      { path: '/teacher/teacherlist', component: Statistics },
      { path: '/teacher/visitmange', component: System },
      { path: '/student/studentchoice', component: System },
      { path: '/student/studentinfo', component: System },
      { path: '/student/studentlist', component: System }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
export default router
