import {request} from "@@/plugin-request/request";

export async function OrderListApi(
  params: {
    current?: number;
    pageSize?: number;
  },
) {
  const response = await request('/api/v1/admin/order', {
    method: 'GET',
    params
  });
  return {
    data: response.data.item || [],
    total: response.data.total || 0,
    success: response.code === 0
  }
}
