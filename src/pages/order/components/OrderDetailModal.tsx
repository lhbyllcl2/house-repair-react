import React, { Fragment} from 'react';
import {Descriptions, Divider, Modal,Button,Statistic} from 'antd';
import ProTable from '@ant-design/pro-table';
import type { ProColumns } from '@ant-design/pro-table';
import styles from '../style.less';
import {PageContainer} from '@ant-design/pro-layout';
const ButtonGroup = Button.Group;
const progressColumns: ProColumns<any>[] = [
  {
    title: 'ID',
    dataIndex: 'time',
    key: 'time',
  },
  {
    title: '时间',
    dataIndex: 'time',
    key: 'time',
  },
  {
    title: '当前进度',
    dataIndex: 'rate',
    key: 'rate',
  },
  {
    title: '维修人员',
    dataIndex: 'operator',
    key: 'operator',
  },
  {
    title: '备注',
    dataIndex: 'cost',
    key: 'cost',
  },
];
const planColumns: ProColumns<any>[] = [
  {
    title: 'ID',
    dataIndex: 'time',
    key: 'time',
  },
  {
    title: '材料名称',
    dataIndex: 'time',
    key: 'time',
  },
  {
    title: '价格',
    dataIndex: 'rate',
    key: 'rate',
  },
  {
    title: '数量',
    dataIndex: 'operator',
    key: 'operator',
  },
  {
    title: '备注',
    dataIndex: 'cost',
    key: 'cost',
  },
];
export type OrderModalProps = {
  onCancel: (flag?: boolean) => void;
  visible: boolean;
};
const description = (
  <>
  <Descriptions className={styles.headerList}  column={2}>
    <Descriptions.Item label="问题描述">入户-入户玄关-破损</Descriptions.Item>
    <Descriptions.Item label="期望上门时间">2022-01-09 20:00-2022-01-09 20:00</Descriptions.Item>
    <Descriptions.Item label="报修时间">2022-01-22 12:00:00</Descriptions.Item>
    <Descriptions.Item label="备注">请于两个工作日内确认</Descriptions.Item>
  </Descriptions>
  <Divider style={{ marginBottom: 32 }} />
  <Descriptions title="用户信息" style={{ marginBottom: 32 }}  column={2}>
    <Descriptions.Item label="用户姓名">付小小</Descriptions.Item>
    <Descriptions.Item label="联系电话">18100000000</Descriptions.Item>
    <Descriptions.Item label="维修地址">浙江省杭州市西湖区万塘路18号</Descriptions.Item>
  </Descriptions>
    <Divider style={{ marginBottom: 32 }} />
    <div className={styles.title}>维修进度</div>
    <ProTable
      style={{ marginBottom: 16 }}
      pagination={false}
      loading={false}
      search={false}
      options={false}
      toolBarRender={false}
      dataSource={[]}
      columns={progressColumns}
    />
    <div className={styles.title}>维修方案</div>
    <ProTable
      style={{ marginBottom: 16 }}
      pagination={false}
      loading={false}
      search={false}
      options={false}
      toolBarRender={false}
      dataSource={[]}
      columns={planColumns}
    />
</>
);
const extra = (
  <div className={styles.moreInfo}>
    <Statistic title="维修进度" value="已上门查看" />
    <Statistic title="维修金额" value={568.08} prefix="¥" />
  </div>
);
const action =(
    <Fragment>
      <ButtonGroup>
        <Button>维修暂停</Button>
        <Button>非正常关闭</Button>
        <Button>转单</Button>
      </ButtonGroup>
    </Fragment>
  );
const OrderDetailModal: React.FC<OrderModalProps> = (props) => {
  return (
    <Modal
      maskClosable={false}
      width={1200}
      visible={props.visible}
      onCancel={() =>props.onCancel()}
      footer={false}
    >
      <PageContainer
        title="维修单号：234231029431"
        extra={action}
        extraContent={extra}
        content={description}
       />
    </Modal>
  );
};
export default OrderDetailModal;
