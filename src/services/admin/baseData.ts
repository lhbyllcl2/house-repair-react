import {request} from "@@/plugin-request/request";

export async function PartListApi(
  params: {
    current?: number;
    pageSize?: number;
  },
) {
  const response = await request('/api/v1/admin/part', {
    method: 'GET',
    params
  });
  return {
    data: response.data.item || [],
    total: response.data.total || 0,
    success: response.code === 0
  }
}
export async function MaintenanceListApi(
  params: {
    current?: number;
    pageSize?: number;
  },
) {
  const response = await request('/api/v1/admin/maintenance', {
    method: 'GET',
    params
  });
  return {
    data: response.data.item || [],
    total: response.data.total || 0,
    success: response.code === 0
  }
}

