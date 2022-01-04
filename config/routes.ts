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
    icon: 'barChart',
    component: './dashboard',
  },
  {
    path: '/system',
    name: '系统管理',
    icon: 'setting',
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
    path: '/base_data',
    name: '基础数据',
    icon: 'database',
    routes: [
      {
        path: '/base_data/part',
        name: '部品部位管理',
        icon: 'smile',
        component: './baseData/part',
      },
      {
        path: '/base_data/question',
        name: '问题管理',
        icon: 'smile',
        component: './baseData/question',
      },
      {
        path: '/base_data/maintenance',
        name: '维修项目管理',
        icon: 'smile',
        component: './baseData/maintenance',
      },
    ],
  },
  {
    path: '/order',
    name: '维修订单',
    icon: 'bars',
    component: './order',
  },
  {
    path: '/staff',
    name: '维修人员管理',
    icon: 'user',
    component: './staff',
  },
  {
    path: '/',
    redirect: '/dashboard',
  },
  {
    component: './404',
  },
];
