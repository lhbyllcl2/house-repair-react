import React, {useRef} from 'react';
import type {ProFormInstance} from '@ant-design/pro-form';
import ProForm, {
  DrawerForm,
  ProFormText,
} from '@ant-design/pro-form';

export type FormValueType = {
  target?: string;
  template?: string;
  type?: string;
  time?: string;
  frequency?: string;
} & Partial<API.RuleListItem>;

export type UpdateFormProps = {
  onVisibleChange: (visible: boolean) => void;
  onSubmit: (values: FormValueType) => Promise<void>;
  drawerVisit: boolean;
  values: Partial<ADMIN_API.MenuListItem>;
};

const UpdateForm: React.FC<UpdateFormProps> = (props) => {
  const formRef = useRef<ProFormInstance>();
  return (
    <DrawerForm
      title={props.values.id ? '编辑菜单' : '新建'}
      formRef={formRef}
      onFinish={props.onSubmit}
      visible={props.drawerVisit}
      onVisibleChange={props.onVisibleChange}
    >
      <ProForm.Group>
        <ProFormText
          name="菜单名称"
          width="md"
          label="props"
          tooltip="最长为 24 位"
          placeholder="请输入菜单名称"
        />
        <ProFormText width="md" name="company" label="我方公司名称" placeholder="请输入名称"/>
      </ProForm.Group>
      <ProForm.Group>
        <ProFormText
          name="菜单名称"
          width="md"
          label="props"
          tooltip="最长为 24 位"
          placeholder="请输入菜单名称"
        />
        <ProFormText width="md" name="company" label="我方公司名称" placeholder="请输入名称"/>
      </ProForm.Group>
    </DrawerForm>
  );
};

export default UpdateForm;
