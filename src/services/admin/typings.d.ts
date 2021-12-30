// @ts-ignore
/* eslint-disable */

declare namespace ADMIN_API {
  type PageParams = {
    current?: number;
    pageSize?: number;
  };
  type MenuListItem = {
    id?: number;
    name?: string
  };
  type MenuList = {
    data?: MenuListItem[];
    total?: number;
    success?: boolean;
  };
}
