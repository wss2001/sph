import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// 备份
let originPush = VueRouter.prototype.push
let originReplace = VueRouter.prototype.replace
// 重写，三个参数，一个为传递的参数，路径或者params等，俩个promise的回调
VueRouter.prototype.push=function(location,resolve,reject){
    if(resolve,reject){
        originPush.call(this,location,resolve,reject)
    }else{
        originPush.call(this,location,()=>{},()=>{})
    }
}
VueRouter.prototype.replace=function(location,resolve,reject){
    if(resolve,reject){
        originReplace.call(this,location,resolve,reject)
    }else{
        originReplace.call(this,location,()=>{},()=>{})
    }
}
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Search from '@/pages/Search'
import Register from '@/pages/Register'
export default new VueRouter({
    routes:[
        {
            path:'/home',
            component:Home,
            meta:{show:true}
        },
        {
            // 在这里加问好代表params参数可以传递也可以不传递，如果定义了没有传递参数会发生url跳转错误
            path:'/search/:keyword?',
            name:'search',
            component:Search,
            meta:{show:true},
        },
        {
            path:'/register',
            component:Register,
            meta:{show:false}
        },
        {
            path:'/login',
            component:Login,
            meta:{show:false}
        },
        {
            path:'/',
            redirect:'/home'
        }
    ]
})