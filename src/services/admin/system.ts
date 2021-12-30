import {request} from 'umi';

export async function MenuList(
  params: {
    current?: number;
    pageSize?: number;
  },
  options?: Record<string, any>,
) {
  return request<ADMIN_API.MenuList>('/api/v1/menus', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

export async function RoleListApi(
  params: {
    current?: number;
    pageSize?: number;
  },
  options?: Record<string, any>,
) {
  return request<ADMIN_API.RoleList>('/api/v1/roles', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

export async function UserListApi(
  params: {
    current?: number;
    pageSize?: number;
  },
  options?: Record<string, any>,
) {
  return request<ADMIN_API.UserDataSource>('/api/v1/users', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
