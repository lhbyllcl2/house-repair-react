import {PlusOutlined,FormOutlined} from '@ant-design/icons';
import React, {useRef} from 'react';
import {FormattedMessage} from 'umi';
import {Button} from 'antd';
import type {ProColumns, ActionType} from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import {PageContainer} from "@ant-design/pro-layout";
import {RoleListApi} from "@/services/admin/system"
const Staff: React.FC = () => {
  const actionRef = useRef<ActionType>();
  const columns: ProColumns<ADMIN_API.RoleListItem>[] = [
    {
      title: '序号',
      dataIndex: 'id',
      hideInSearch: true,
      width: 60,
    },
    {
      title: '姓名',
      dataIndex: 'name',
    },
    {
      title: '电话',
      dataIndex: 'sequence',
      hideInSearch: true,
    },
    {
      title: '公司',
      dataIndex: 'sequence',
      hideInSearch: true,
    },
    {
      title: '角色',
      dataIndex: 'status',
      valueType:'select',
      valueEnum:{
        1:{
          status:'error',
          text:'维修人员'
        },
        2:{
          status:'success',
          text:'审核人员'
        }
      }
    },
    {
      title: '状态',
      dataIndex: 'status',
      valueType:'select',
      valueEnum:{
        0:{
          status:'error',
          text:'禁用'
        },
        1:{
          status:'success',
          text:'启用'
        }
      }
    },
    {
      title: '创建时间',
      dataIndex: 'created_at',
      hideInSearch: true,
      width: 180,
    },
    {
      title: '备注',
      dataIndex: 'memo',
      hideInSearch: true,
    },
    {
      title: '操作',
      dataIndex: 'action',
      hideInSearch: true,
      width: 100,
      render:()=>{
        return (
          <>
            <FormOutlined />
          </>
        );
      }
    },
  ]
  return (
    <PageContainer>
      <ProTable<ADMIN_API.RoleListItem>
        actionRef={actionRef}
        rowKey="id"
        search={{
          labelWidth: 'auto',
        }}
        request={RoleListApi}
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
export default Staff;
