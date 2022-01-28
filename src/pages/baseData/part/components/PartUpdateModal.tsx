import React from 'react';
import {
  ModalForm,
  ProFormText,
  ProFormSelect
} from '@ant-design/pro-form';

export type FormValueType = {
  name?: string;
  contact_number?: string;
  company_id?: number;
  remark?: string;
} & Partial<ADMIN_API.RoleListItem>;
export type UpdateFormProps = {
  onSubmit: (values: FormValueType) => Promise<void>;
  updateModalVisible: (flag: boolean) => void;
  modalVisit: boolean;
  currentRecord: Partial<ADMIN_API.StaffListItem> | undefined;
};
const PartUpdateModal: React.FC<UpdateFormProps> = (props) => {
  const handleSubmit = async (fv: FormValueType) => {
    console.log(fv)
  };
  return (
    <ModalForm
      title={props.currentRecord?.id ? '编辑' : '创建'}
      visible={props.modalVisit}
      modalProps={
        {
          maskClosable: false,
          destroyOnClose: true
        }
      }
      onVisibleChange={props.updateModalVisible}
      onFinish={handleSubmit}
    >
        <ProFormText
          width="md"
          name="name"
          initialValue={props.currentRecord?.name}
          label="部品名称"
          placeholder="请输入部品名称"
          rules={[{required: true, message: '请输入部品名称'}]}
        />
        <ProFormSelect
          width="md"
          name="status"
          initialValue={props.currentRecord?.type || 1}
          label="状态"
          options={[
            {
              label: '禁用',
              value: 0,
            },
            {
              label: '正常',
              value: 1,
            }
          ]}
          rules={[{required: true, message: '请选择状态'}]}
        />
    </ModalForm>
  );
};
export default PartUpdateModal;
