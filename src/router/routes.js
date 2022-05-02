import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Search from '@/pages/Search'
import Register from '@/pages/Register'
import Detail from '@/pages/Detail'
export default [
    {
        path:'/home',
        component:Home,
        meta:{show:true}
    },
    {
        path:'/detail/:skuid',
        component:Detail,
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