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
