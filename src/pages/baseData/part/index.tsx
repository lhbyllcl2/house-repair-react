import {PlusOutlined} from '@ant-design/icons';
import React, {useRef, useState} from 'react';
import {FormattedMessage} from 'umi';
import {Button, Divider, Popconfirm} from 'antd';
import type {ProColumns, ActionType} from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import {PageContainer} from "@ant-design/pro-layout";
import {PartListApi} from "@/services/admin/baseData";
import type {FormValueType} from "@/pages/staff/components/UpdateFormModal";
import PartUpdateModal from "@/pages/baseData/part/components/PartUpdateModal";
const BaseDataForPart: React.FC = () => {
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

  const columns: ProColumns<ADMIN_API.PartListItem>[] = [
    {
      title: '序号',
      dataIndex: 'id',
      hideInSearch: true,
      width: 60,
      render:(_,text,index)=>index+1,
    },
    {
      title: '部品/部位',
      dataIndex: 'name',
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
      title: '操作',
      dataIndex: 'action',
      hideInSearch: true,
      width: 100,
      render: (_, record) => {
        return (
          <>
            <a key="editStaff" onClick={() =>updateOrCreate(record)}>
              <FormattedMessage
                id="pages.tableRow.edit"
                defaultMessage="编辑"
              />
            </a>
            <Divider type="vertical"/>
            <Popconfirm title="are you sure you want to delete this data"
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
        request={PartListApi}
        columns={columns}
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
      <PartUpdateModal
        onSubmit={onSubmit}
        updateModalVisible={setModalVisit}
        modalVisit={modalVisit}
        currentRecord={currentRecord}
      />
    </PageContainer>
  )
}
export default BaseDataForPart;
