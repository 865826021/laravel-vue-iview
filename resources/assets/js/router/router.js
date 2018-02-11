// 所有路由信息的配置
import layout from 'views/layout'

export const mainRouter = [
  {
    path: '/login',
    component: require('views/login/index'),
    name: 'login',
    meta: { roles: ['admin']}
  },
  {
    path: '/',
    component: layout,
    redirect: '/home',
    meta: { roles: ['admin'] }, // you can set roles in root nav
    children: [{
      path: 'home',
      component: require('views/home/index'),
      name: 'home',
      meta: {
        title: 'home',
        icon: 'lock',
        noCache: true,
        roles: ['admin'] // or you can only set roles in sub nav
      }
    }]
  },
];

// 导出所有的路由配置
export const routes = [
  ...mainRouter
];
