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
  const currecies: string[] = ["USD", "EUR", "RUR"];
  const defaultCurrency = currecies[0];
  const chartOptions = {}
  const [chartSeries, setChartSeries] = useState([]);
  const [selectedCurrency, selectCurrency] = useState<string>(defaultCurrency)
  const type = 'line'

  useEffect(() => {
    const ids = {
      'USD': '145',
      'EUR': '292',
      'RUR': '298',
    }

    getCurrency(ids[selectedCurrency]);
    console.log(selectedCurrency);
    console.log(selectedCurrency, ids[selectedCurrency]);
  }, [selectedCurrency])

  useEffect(() => {
    const currencies = currency.data.reduce((accumulator, item) => {
      let day = item.Date;
      let curr = item.Cur_OfficialRate;
      const timestamp = Math.round(new Date(day).getDate())
      return [...accumulator, [timestamp, curr]]
    }, [])
    setChartSeries(currencies)
  }, [currency])

  const curreciesOptions = () => (
    <Menu>
      {currecies.map(i => (
        // @ts-ignore
        <Menu.Item key={i} onClick={(e) => { selectCurrency(e.keyPath[0])} }>
          {i}
        </Menu.Item>
      ))}
    </Menu>
  )

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
      <Dropdown overlay={curreciesOptions}>
        <a>
        Select currency <DownOutlined />
        </a>
      </Dropdown>
    </StyledContainer >
  )
}

export default Rates