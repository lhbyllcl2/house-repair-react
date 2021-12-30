export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/Login',
          },
        ],
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/dashboard',
    name: '仪表板',
    icon: 'smile',
    component: './dashboard',
  },
  {
    path: '/system',
    name: '系统管理',
    icon: 'smile',
    routes: [
      {
        path: '/system/menu',
        name: '菜单管理',
        icon: 'smile',
        component: './system/Menu',
      },
      {
        path: '/system/role',
        name: '角色管理',
        icon: 'smile',
        component: './system/Role',
      },
      {
        path: '/system/user',
        name: '账号管理',
        icon: 'smile',
        component: './system/User',
      },
    ],
  },
  {
    path: '/',
    redirect: '/dashboard',
  },
  {
    component: './404',
  },
];
