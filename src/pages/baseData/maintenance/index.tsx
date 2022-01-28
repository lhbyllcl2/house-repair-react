import {PlusOutlined} from '@ant-design/icons';
import React, {useRef, useState} from 'react';
import {FormattedMessage} from 'umi';
import {Button, Divider, Popconfirm} from 'antd';
import type {ProColumns, ActionType} from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import {PageContainer} from "@ant-design/pro-layout";
import {MaintenanceListApi} from "@/services/admin/baseData";
import type {FormValueType} from "@/pages/baseData/maintenance/components/UpdateFormModal";
import UpdateFormModal from "@/pages/baseData/maintenance/components/UpdateFormModal";
const BaseDataForMaintenance: React.FC = () => {
  const actionRef = useRef<ActionType>();
  const [modalVisit, setModalVisit] = useState<boolean>(false)
  const [currentRecord, setCurrentRecord] = useState<ADMIN_API.PartListItem | undefined>()
  const handleDelete = (id: number | undefined) => {
    console.log(id)
    return true;
  }
  const updateOrCreate = (fv: ADMIN_API.StaffListItem | undefined) => {
    setModalVisit(true)
    setCurrentRecord(fv)
  }
  const columns: ProColumns<ADMIN_API.MaintenanceListItem>[] = [
    {
      title: '序号',
      dataIndex: 'id',
      hideInSearch: true,
      width: 60,
      render:(_,text,index)=>index+1,
    },
    {
      title: '名称',
      dataIndex: 'item_name',
    },
    {
      title: '问题描述',
      dataIndex: 'problem_description',
      hideInSearch: true,
    },
    {
      title: '维修方式',
      dataIndex: 'repair_mode',
      hideInSearch: true,
    },
    {
      title: '规格',
      dataIndex: 'norms',
      hideInSearch: true,
    },
    {
      title: '起修条件',
      dataIndex: 'condition',
      hideInSearch: true,
    },
    {
      title: '单位',
      dataIndex: 'unit',
      hideInSearch: true,
    },
    {
      title: '含税单价',
      dataIndex: 'exclusive_price',
      hideInSearch: true,
    },
    {
      title: '创建时间',
      dataIndex: 'create_at',
      hideInSearch: true,
      width: 180,
    },
    {
      title: '操作',
      dataIndex: 'action',
      hideInSearch: true,
      width: 100,
      render:(_,record)=>{
        return (
          <>
            <a key="editStaff" onClick={() =>updateOrCreate(record)}>
              <FormattedMessage
                id="pages.tableRow.edit"
                defaultMessage="编辑"
              />
            </a>
            <Divider type="vertical"/>
            <Popconfirm title="您确定要删除该条数据吗？"
                        onConfirm={() => handleDelete(record.id)}>
              <a key="editStaff">
                <FormattedMessage
                  id="pages.tableRow.delete"
                  defaultMessage="删除"
                />
              </a>
            </Popconfirm>
          </>
        );
      }
    },
  ]
  const onSubmit = async (fv: FormValueType) => {
    console.log(fv)
  }
  return (
    <PageContainer>
      <ProTable
        actionRef={actionRef}
        rowKey="id"
        search={{
          labelWidth: 'auto',
        }}
        request={MaintenanceListApi}
        columns={columns}
        scroll={{x: 'max-content'}}
        toolBarRender={() => [
          <Button
            type="primary"
            key="primary"
            onClick={() => updateOrCreate(undefined)}
          >
            <PlusOutlined/> <FormattedMessage id="pages.searchTable.new" defaultMessage="New"/>
          </Button>
        ]}
      />
      <UpdateFormModal
        onSubmit={onSubmit}
        updateModalVisible={setModalVisit}
        modalVisit={modalVisit}
        currentRecord={currentRecord}
      />
    </PageContainer>
  )
}
export default BaseDataForMaintenance;
