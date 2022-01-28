import React, {useRef, useState} from 'react';
import type {ProColumns, ActionType} from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import {PageContainer} from "@ant-design/pro-layout";
import {OrderListApi} from "@/services/admin/order";
import {FormattedMessage} from "@@/plugin-locale/localeExports";
import OrderDetailModal from "@/pages/order/components/OrderDetailModal";
const Order: React.FC = () => {
  const actionRef = useRef<ActionType>();
  const [detailModalVisible, setDetailModalVisible] = useState<boolean>(false);
  const columns: ProColumns<ADMIN_API.OrderListItem>[] = [
    {
      title: '序号',
      dataIndex: 'id',
      hideInSearch: true,
      render:(_,text,index)=>index+1,
      width: 60,
    },
    {
      title: '订单号',
      dataIndex: 'order_no',
      width:150,
    },
    {
      title: '姓名',
      dataIndex: 'name',
      hideInSearch: true,
    },
    {
      title: '联系电话',
      dataIndex: 'contact_number',
      hideInSearch: true,
    },
    {
      title: '问题描述',
      dataIndex: 'major_description',
      hideInSearch: true,
    },
    {
      title: '地址',
      dataIndex: 'address',
      hideInSearch: true,
      ellipsis:true,
      width: 200,
    },
    {
      title: '进度',
      dataIndex: 'node_ps',
      hideInSearch: true,
    },
    {
      title: '维修人员',
      dataIndex: 'repair_staff',
      hideInSearch: true,
    },
    {
      title: '审核人员',
      dataIndex: 'audit_staff',
      hideInSearch: true,
    },
    {
      title: '状态',
      dataIndex: 'status',
      valueType:'select',
      valueEnum:{
        0:{
          status:'error',
          text:'用户取消'
        },
        1:{
          status:'success',
          text:'正常'
        }
      }
    },
    {
      title: '报修时间',
      dataIndex: 'repair_time',
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
            <a key="orderDetail" onClick={()=>setDetailModalVisible(true)}>
              <FormattedMessage
                id="pages.orderTable.showDetail"
                defaultMessage="查看详情"
              />
            </a>
          </>
        );
      }
    },
  ]
  return (
    <PageContainer>
      <ProTable
        actionRef={actionRef}
        rowKey="id"
        search={{
          labelWidth: 'auto',
        }}
        request={OrderListApi}
        columns={columns}
        scroll={{x: 'max-content'}}
      />
      <OrderDetailModal visible={detailModalVisible} onCancel={()=>setDetailModalVisible(false)}/>
    </PageContainer>
  )
}
export default Order;
