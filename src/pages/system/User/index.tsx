import {PlusOutlined,FormOutlined} from '@ant-design/icons';
import React, {useRef} from 'react';
import {FormattedMessage} from 'umi';
import {Button} from 'antd';
import type {ProColumns, ActionType} from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import {PageContainer} from "@ant-design/pro-layout";
import {UserListApi} from "@/services/admin/system"
const User: React.FC = () => {
  const actionRef = useRef<ActionType>();
  const columns: ProColumns<ADMIN_API.UserListItem>[] = [
    {
      title: '序号',
      dataIndex: 'id',
      hideInSearch: true,
      width: 60,
    },
    {
      title: '账号',
      dataIndex: 'user_name',
    },
    {
      title: '昵称',
      dataIndex: 'real_name',
      hideInSearch: true,
    },
    {
      title: '邮箱',
      dataIndex: 'email',
    },
    {
      title: '手机号',
      dataIndex: 'phone',
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
      valueType:'dateRange',
      search:{
        transform:(value)=>({startTime:value[0],endTime:value[1]})
      },
      width: 180,
    },
    {
      title: '备注',
      dataIndex: 'memo',
      hideInSearch: true,
      width: 200,
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
      <ProTable<ADMIN_API.UserListItem>
        actionRef={actionRef}
        rowKey="id"
        scroll={{x: 'max-content'}}
        search={{
          labelWidth: 'auto',
        }}
        request={UserListApi}
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
export default User;
