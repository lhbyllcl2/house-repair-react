import {PlusOutlined} from '@ant-design/icons';
import React, {useRef} from 'react';
import {FormattedMessage} from 'umi';
import {Button} from 'antd';
import type {ProColumns, ActionType} from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import {PageContainer} from "@ant-design/pro-layout";
import {MenuList} from "@/services/admin/menu"
const Menu: React.FC = () => {
  const actionRef = useRef<ActionType>();
  const columns: ProColumns<ADMIN_API.MenuListItem>[] = [
    {
      title: '菜单名称',
      dataIndex: 'name',
      width: 130,
    },
  ]
  return (
    <PageContainer>
      <ProTable<ADMIN_API.MenuListItem>
        actionRef={actionRef}
        rowKey="id"
        search={{
          labelWidth: 'auto',
        }}
        request={MenuList}
        columns={columns}
        toolBarRender={() => [
          <Button
            type="primary"
            key="primary"
            onClick={() => {
            }}
          >
            <PlusOutlined/> <FormattedMessage id="pages.searchTable.new" defaultMessage="New"/>
          </Button>
        ]}
      />
    </PageContainer>
  )
}
export default Menu;
