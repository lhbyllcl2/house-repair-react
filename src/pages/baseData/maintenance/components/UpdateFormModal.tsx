import React from 'react';
import ProForm, {
  ModalForm,
  ProFormText,
  ProFormMoney,
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
  currentRecord: Partial<ADMIN_API.MaintenanceListItem> | undefined;
};
const UpdateFormModal: React.FC<UpdateFormProps> = (props) => {
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
      <ProForm.Group>
        <ProFormText
          width="md"
          name="item_name"
          initialValue={props.currentRecord?.item_name}
          label="名称"
          placeholder="请输入名称"
          rules={[{required: true, message: '请输入名称'}]}
        />
        <ProFormText
          width="md"
          label="描述"
          name="problem_description"
          initialValue={props.currentRecord?.problem_description}
          rules={[{required: true, message: '请输入联系电话'}]}
        />
      </ProForm.Group>
      <ProForm.Group>
        <ProFormText
          width="md"
          name="norms"
          initialValue={props.currentRecord?.repair_mode}
          label="规格"
          rules={[{required: true, message: '请填写规格'}]}
        />
        <ProFormText
          width="md"
          name="condition"
          initialValue={props.currentRecord?.condition}
          label="起修条件"
          rules={[{required: true, message: '请填写起修条件'}]}
        />
      </ProForm.Group>
      <ProForm.Group>
        <ProFormText
          width="md"
          name="unit"
          initialValue={props.currentRecord?.unit}
          label="单位"
          placeholder="请填写单位"
        />
        <ProFormMoney
          width="md"
          name="exclusive_price"
          initialValue={props.currentRecord?.exclusive_price}
          label="含税单价"
          rules={[{required: true, message: '请填写起修条件'}]}
          min={0}
          placeholder="请填写含税单价"
        />
      </ProForm.Group>
    </ModalForm>
  );
};
export default UpdateFormModal;
