import React from 'react';
import ProForm, {
  ModalForm,
  ProFormText,
  ProFormTextArea,
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
          name="name"
          initialValue={props.currentRecord?.name}
          label="姓名"
          placeholder="请输入工作人员姓名"
          rules={[{required: true, message: '请输入工作人员姓名'}]}
        />
        <ProFormText
          width="md"
          label="联系电话"
          name="contact_number"
          initialValue={props.currentRecord?.contact_number}
          rules={[{required: true, message: '请输入联系电话'}]}
        />
      </ProForm.Group>
      <ProForm.Group>
        <ProFormSelect
          width="md"
          name="company_id"
          initialValue={props.currentRecord?.company_name}
          label="所属公司"
          options={[
            {
              label: '测试公司1',
              value: 1,
            },
            {
              label: '测试公司2',
              value: 2,
            }
          ]}
          rules={[{required: true, message: '请选择一个公司'}]}
        />
        <ProFormSelect
          width="md"
          name="type"
          initialValue={props.currentRecord?.type}
          label="类型"
          options={[
            {
              label: '维修工程师',
              value: 1,
            },
            {
              label: '审核人员',
              value: 2,
            }
          ]}
          rules={[{required: true, message: '请选择类型'}]}
        />
      </ProForm.Group>
      <ProFormTextArea
        width="md"
        name="remark"
        initialValue={props.currentRecord?.remark}
        label="备注"
        placeholder="请填写备注"
      />
    </ModalForm>
  );
};
export default UpdateFormModal;
