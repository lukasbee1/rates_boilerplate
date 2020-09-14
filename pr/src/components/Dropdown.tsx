import React from 'react';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { IAppState } from 'store'
import 'antd/dist/antd.css';

const menu = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="#">
                USD
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="#">
                EUR
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="#">
                RUR
            </a>
        </Menu.Item>
    </Menu>
);

const DropdownComp = () => {
    return (
        <Dropdown overlay={menu}>
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                Select currency <DownOutlined />
            </a>
        </Dropdown>)
}

import { connect, ConnectedProps } from 'react-redux'


const mapStateToProps = (state: IAppState) => ({
    currentCurrencyId: 145,
})
const mapActionsToProps = (dispatch) => ({
    
})


const connector = connect(mapStateToProps, mapActionsToProps)
export type TReduxProps = ConnectedProps<typeof connector>
export default connector(DropdownComp)
