import {Menu, Icon, Layout} from 'antd';
import {HomeFilled, BgColorsOutlined, LinkOutlined} from '@ant-design/icons';
import React from 'react';
import styles from './index.css';
import router from 'umi/router';

const {SubMenu} = Menu;
const {Header} = Layout


const TopMenu = props => {
    const state = {
        current: 'mail',
    };
    const getOtherPage = () => {
        router.push('/links')
    }
    const getColorPage = () => {
        router.push('/color')
    }
    const getColorbarPage = () => {
        router.push('/colorbar')
    }
    const getHomePage = () => {
        router.push('/')
    }
    const getSpiderPage = () => {
        router.push('/spider')
    }
    const handleClick = e => {
        console.log('click ', e);
        state.current = e.key
        console.log(state.current);

    };


    return (
        <Header className={styles.header}>
            <div className={styles.welcome}/>
            <Menu onClick={handleClick} selectedKeys={[state.current]} mode="horizontal" theme='dark'
                  style={{lineHeight: '100px', float: 'left', fontSize: '30px'}}>
                <Menu.Item key="home" style={{width: '200px'}} onClick={getHomePage} icon={<HomeFilled/>}>Home
                </Menu.Item>
                <SubMenu
                    title={
                        <span className="submenu-title-wrapper">
                        Color
                        </span>
                    }
                    style={{width: '200px'}}
                    icon={<BgColorsOutlined/>}
                >
                        <Menu.Item key="setting:1">
                            <a onClick={getColorPage} target="_blank" rel="noopener noreferrer">
                                MNIST
                            </a>
                        </Menu.Item>
                        <Menu.Item key="setting:2">
                            <a onClick={getColorbarPage} target="_blank" rel="noopener noreferrer">
                                ColorPicker
                            </a>
                        </Menu.Item>

                </SubMenu>
                {/*<Menu.Item key="color" style={{width: '200px'}} icon={<BgColorsOutlined/>}>*/}
                {/*    <Menu.SubMenu>*/}

                {/*        <a onClick={getcolorbarPage} target="_blank" rel="noopener noreferrer">*/}
                {/*            ColorBar*/}
                {/*        </a>*/}

                {/*    </Menu.SubMenu>*/}

                {/*</Menu.Item>*/}
                <Menu.Item key="alipay" style={{width: '200px'}} icon={<LinkOutlined/>}>
                    <a onClick={getOtherPage} target="_blank" rel="noopener noreferrer">

                        Link
                    </a>
                </Menu.Item>
                <Menu.Item key="alipay" style={{width: '200px'}} icon={<LinkOutlined/>}>
                    <a onClick={getSpiderPage} target="_blank" rel="noopener noreferrer">

                        Spider
                    </a>
                </Menu.Item>
            </Menu>
        </Header>
    );

}
export default TopMenu