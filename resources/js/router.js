import Vue from 'vue'
import Router from 'vue-router'
import firstPage from './componets/pages/myFirstViewPage.vue'
import newRoute from './componets/pages/newRoutePagePage.vue'
import hooks from './componets/pages/basic/hooks.vue'
import methods from './componets/pages/basic/methods.vue'


import home from './componets/pages/home.vue'
import tags from './componets/pages/tags.vue'
Vue.use(Router)

const routes = [
    //project routes
    {
        path:'/',
        component: home,
        name: 'Home'
    },
    {
        path:'/tags',
        component: tags,
        name: 'tags'
    },

    //test routes for learning purpose
    {
        path:'/my-new-vue-route',
        component: firstPage,
        name: 'Home'
    },
    {
        path:'/my-route',
        component: newRoute
    },
    
    //vue hooks
    {
        path:'/hooks',
        component: hooks
    },
    //vue hooks
    {
        path:'/methods',
        component: methods
    },
]

export default new Router({
    mode: 'history',
    routes
})