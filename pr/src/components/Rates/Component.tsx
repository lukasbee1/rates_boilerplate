import React, { useEffect, useState } from 'react'
import ApexChart, { Props } from 'react-apexcharts'
import { TReduxProps } from './Container'
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { StyledContainer } from './style'
import 'antd/dist/antd.css';

export type TComponentProps = {
} & TReduxProps

const Rates: React.FC<TComponentProps> = ({ getCurrency, currency }) => {

  const chartOptions = {}
  const [chartSeries, setChartSeries] = useState([]);
  const type = 'line'


  console.log({ getCurrency, currency });

  useEffect(() => {
    getCurrency('145');
  }, [])
  useEffect(() => {
    const currencies = currency.data.reduce((accumulator, item) => {
      let day = item.Date;
      let curr = item.Cur_OfficialRate;
      const timestamp = Math.round(new Date(day).getDate())
      return [...accumulator, [timestamp, curr]]
    }, [])
    setChartSeries(currencies)
  }, [currency])

  const changeCurrency = (currID) => {
    const ids = {
      'USD': 145,
      'EUR': 292,
      'RUR': 298,
    }
    getCurrency(ids[currID]);
  }
  return (
    <StyledContainer>
      <ApexChart
        options={chartOptions}
        series={[
          {
            name: "Series 1",
            data: chartSeries
          }
        ]}
        type={type}
        width={500}
        height={300}
      />
      <Dropdown overlay={() => (
        <Menu>
          <Menu.Item key="USD" onClick={() => { changeCurrency("USD") }}>
            USD
          </Menu.Item>
          <Menu.Item key="EUR" onClick={() => { changeCurrency("EUR") }}>
            EUR
        </Menu.Item>
          <Menu.Item key="RUR" onClick={() => { changeCurrency("RUR") }}>
            RUR
        </Menu.Item>
        </Menu>
      )}>
        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
          Select currency <DownOutlined />
        </a>
      </Dropdown>
    </StyledContainer >
  )
}

export default Rates