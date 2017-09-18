const routers = [{
    path: '/',
    meta: {
        title: 'index'
    },
    component: (resolve) => require(['./components/page/Home.vue'], resolve)
}];
export default routers;