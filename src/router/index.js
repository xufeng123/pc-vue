import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

/* Layout */
// import Layout from '@/layout'
const Layout = resolve => require(['@/layout'], resolve)
const Login = resolve => require(['@/views/login/index'], resolve)
const BadPage = resolve => require(['@/views/404'], resolve)
const Dashboard = resolve => require(['@/views/dashboard/index'], resolve)
const Menu1 = resolve => require(['@/views/nested/menu1/index'], resolve)
const Menu11 = resolve => require(['@/views/nested/menu1/menu1-1'], resolve)
const Menu12 = resolve => require(['@/views/nested/menu1/menu1-2'], resolve)
const Menu121 = resolve => require(['@/views/nested/menu1/menu1-2/menu1-2-1'], resolve)
const Menu122 = resolve => require(['@/views/nested/menu1/menu1-2/menu1-2-2'], resolve)
const Menu13 = resolve => require(['@/views/nested/menu1/menu1-3'], resolve)
const Menu2 = resolve => require(['@/views/nested/menu2/index'], resolve)
const Button = resolve => require(['@/views/button/index'], resolve)
const Form = resolve => require(['@/views/form/index'], resolve)
const Dialog = resolve => require(['@/views/dialog/index'], resolve)
const Time = resolve => require(['@/views/time/index'], resolve)
const Table = resolve => require(['@/views/table/index'], resolve)
const Img = resolve => require(['@/views/img/index'], resolve)
const Proxy = resolve => require(['@/views/proxy/index'], resolve)
const Arithmetic = resolve => require(['@/views/arithmetic/index'], resolve)

export const constantRoutes = [
  { path: '/login', component: Login, hidden: true },

  { path: '/404', component: BadPage, hidden: true },

  { path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta: { title: 'Dashboard', icon: 'dashboard' }
    }]
  },

  {
    path: '/arithmetic',
    component: Layout,
    children: [
      {
        path: '/arithmetic',
        name: 'Arithmetic',
        component: Arithmetic,
        meta: { title: '算法', icon: 'form' }
      }
    ]
  },

  {
    path: '/proxy',
    component: Layout,
    children: [
      {
        path: '/proxy',
        name: 'Proxy',
        component: Proxy,
        meta: { title: 'proxy', icon: 'form' }
      }
    ]
  },

  {
    path: '/button',
    component: Layout,
    children: [
      {
        path: '/button',
        name: 'Button',
        component: Button,
        meta: { title: '按钮', icon: 'form' }
      }
    ]
  },

  {
    path: '/form',
    component: Layout,
    children: [
      {
        path: '/form',
        name: 'Form',
        component: Form,
        meta: { title: 'form表单', icon: 'form' }
      }
    ]
  },

  {
    path: '/dialog',
    component: Layout,
    children: [
      {
        path: '/dialog',
        name: 'Dialog',
        component: Dialog,
        meta: { title: '弹框', icon: 'form' }
      }
    ]
  },

  {
    path: '/time',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Time',
        component: Time,
        meta: { title: '时间选择', icon: 'form' }
      }
    ]
  },

  {
    path: '/table',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Table',
        component: Table,
        meta: { title: 'table', icon: 'form' }
      }
    ]
  },

  {
    path: '/img',
    component: Layout,
    children: [
      {
        path: 'img',
        name: 'Img',
        component: Img,
        meta: { title: '查看大图', icon: 'form' }
      }
    ]
  },

  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1',
    name: 'Nested',
    meta: {
      title: 'Nested',
      icon: 'nested'
    },
    children: [
      {
        path: 'menu1',
        component: Menu1, // Parent router-view
        name: 'Menu1',
        meta: { title: 'Menu1' },
        children: [
          {
            path: 'menu1-1',
            component: Menu11,
            name: 'Menu1-1',
            meta: { title: 'Menu1-1' }
          },
          {
            path: 'menu1-2',
            component: Menu12,
            name: 'Menu1-2',
            meta: { title: 'Menu1-2' },
            children: [
              {
                path: 'menu1-2-1',
                component: Menu121,
                name: 'Menu1-2-1',
                meta: { title: 'Menu1-2-1' }
              },
              {
                path: 'menu1-2-2',
                component: Menu122,
                name: 'Menu1-2-2',
                meta: { title: 'Menu1-2-2' }
              }
            ]
          },
          {
            path: 'menu1-3',
            component: Menu13,
            name: 'Menu1-3',
            meta: { title: 'Menu1-3' }
          }
        ]
      },
      {
        path: 'menu2',
        component: Menu2,
        meta: { title: 'menu2' }
      }
    ]
  },

  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
        meta: { title: 'External Link', icon: 'link' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
