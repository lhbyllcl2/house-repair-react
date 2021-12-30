import React, {useState} from "react";
import ProCard, {StatisticCard} from '@ant-design/pro-card';
import RcResizeObserver from 'rc-resize-observer';
import {Space} from 'antd';
import {
  RightOutlined,
} from '@ant-design/icons';

const {Statistic} = StatisticCard;
const ChartCard: React.FC = () => {
  const [responsive, setResponsive] = useState(false);
  return (
    <RcResizeObserver
      key="resize-observer"
      onResize={(offset) => {
        setResponsive(offset.width < 596);
      }}
    >
      <ProCard split={responsive ? 'horizontal' : 'vertical'}>
        <StatisticCard.Group>
          <StatisticCard
            title={
              <Space>
                <span>总销售额</span>
              </Space>
            }
            statistic={{
              value: 1102893,
              prefix: '¥',
              description: (
                <Space>
                  <Statistic title="周同比" value="12%"/>
                  <Statistic title="日同比" value="11%"/>
                </Space>
              ),
            }}
            footer={
                <Statistic value="￥12,423" title="日销售额" layout="horizontal" />
            }
          />
          <StatisticCard
            title={
              <Space>
                <span>访问量</span>
              </Space>
            }
            statistic={{
              value: 1102893,
              description:(<></>)
            }}
            footer={
              <Statistic value="12893" title="日访问量" layout="horizontal" />
            }
          />
          <StatisticCard
            title={
              <Space>
                <span>支付笔数</span>
                <RightOutlined style={{color: 'rgba(0,0,0,0.65)'}}/>
              </Space>
            }
            statistic={{
              value: 1102893,
            }}
            chart={
              <>
                <img
                  src="https://gw.alipayobjects.com/zos/alicdn/BA_R9SIAV/charts.svg"
                  alt="chart"
                  width="100%"
                />
              </>
            }
          />
          <StatisticCard
            title={
              <Space>
                <span>运营活动效果</span>
                <RightOutlined style={{color: 'rgba(0,0,0,0.65)'}}/>
              </Space>
            }
            statistic={{
              value: 1102893,
            }}
            chart={
              <>
                <img
                  src="https://gw.alipayobjects.com/zos/alicdn/BA_R9SIAV/charts.svg"
                  alt="chart"
                  width="100%"
                />
              </>
            }
          />
        </StatisticCard.Group>
      </ProCard>
    </RcResizeObserver>
  )
}
export default ChartCard;
