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
  }
    ;
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

  //部品
  type PartListItem = {
    id?: number;
    name?: string
  };
  type PartDataSource = {
    data?: PartListItem[];
    total?: number;
    success?: boolean;
  };
  //维修项目
  type MaintenanceListItem = {
    id?: number;
    parent_id?: number;
    item_name?: string
    problem_description?: string
    repair_mode?: string
    norms?: string
    condition?: string
    unit?: string
    exclusive_price?: string
    create_time?: string
  };
  type MaintenanceDataSource = {
    data?: MaintenanceListItem[];
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

  //维修工程师
  type StaffListItem = {
    id?: number;
    name?: string
    contact_number?: string
    company_name?: string
    staff_code?: string
    type?: number
    status?: number
    create_at?: string
    remark?: string
  };
  type StaffList = {
    data?: StaffListItem[];
    total?: number;
    success?: boolean;
  };
}
