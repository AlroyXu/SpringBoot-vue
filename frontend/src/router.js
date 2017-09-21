const routers = [
    {
        path: '/',
        meta: {
            title: 'Detail'
        },
        component: (resolve) => require(['./components/page/Detail.vue'], resolve)
    },
    {
        path: '/Detail',
        meta: {
            title: 'Detail'
        },
        component: (resolve) => require(['./components/page/Detail.vue'], resolve)
    },
    {
        path: '/Login',
        meta: {
            title: 'Login'
        },
        component: (resolve) => require(['./components/page/Login.vue'], resolve)
    },

];
export default routers;