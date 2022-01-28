// @ts-ignore
/* eslint-disable */

declare namespace ADMIN_API {
  type PageParams = {
    current?: number;
    pageSize?: number;
  };
  //菜单
  type MenuListItem = {
    id?: number;
    name?: string
  };
  type MenuList = {
    data?: MenuListItem[];
    total?: number;
    success?: boolean;
  };
  //角色
  type RoleListItem = {
    id?: number;
    name?: string
  };
  type RoleList = {
    data?: RoleListItem[];
    total?: number;
    success?: boolean;
  };
  //账号
  type UserListItem = {
    id?: number;
    name?: string
  };
  type UserDataSource = {
    data?: UserListItem[];
    total?: number;
    success?: boolean;
  };
  //订单
  type OrderListItem = {
    id?: number;
    order_no?: number;
    name?: string
    contact_number?: string
    repair_time?: string
    node_ps?: string
    repair_staff?: string
    audit_staff?: string
    address?: string
  };
  type OrderList = {
    data?: OrderListItem[];
    total?: number;
    success?: boolean;
  };
}
