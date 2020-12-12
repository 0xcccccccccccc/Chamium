import { Menu, Icon,Layout } from 'antd';
import { HomeFilled,BgColorsOutlined,LinkOutlined} from '@ant-design/icons';
import React from 'react';
import styles from './index.css';
import router from 'umi/router';
const { SubMenu } = Menu;
const{Header}=Layout


const TopMenu  = props =>  {
  const state = {
    current: 'mail',
  };
  const getOtherPage = () => {
    router.push('/test_mysql')
  }
  const getcolorPage = () => {
    router.push('/color')
  }
  const getHomePage = () => {
    router.push('/')
  }
  const getSpiderPage=()=>{
    router.push('/spider')
  }
  const handleClick = e => {
    console.log('click ', e);
    state.current=e.key
    console.log(state.current);

  };

 
    return (
    <Header className={styles.header} >
       <div className={styles.welcome}/>
      <Menu onClick={handleClick} selectedKeys={[state.current]} mode="horizontal" theme='dark' style={{ lineHeight: '100px' , float: 'left',fontSize:'30px' }}>
        <Menu.Item key="home" style={{width:'200px'}} onClick={getHomePage} icon={<HomeFilled />}>Home
        </Menu.Item>


        {/* <SubMenu
          title={
            
            <span className="submenu-title-wrapper">
              
             Color
            </span>
          }
          style={{width:'200px'}}
          icon={<BgColorsOutlined />}
        >
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu> */}
         <Menu.Item key="color" style={{width:'200px'}}  icon={<BgColorsOutlined />}>
          <a onClick={getcolorPage} target="_blank" rel="noopener noreferrer" >
         
            Color
          </a>
        </Menu.Item>
        <Menu.Item key="alipay" style={{width:'200px'}}  icon={<LinkOutlined />}>
          <a onClick={getOtherPage} target="_blank" rel="noopener noreferrer" >
         
            Link
          </a>
        </Menu.Item>
        <Menu.Item key="alipay" style={{width:'200px'}}  icon={<LinkOutlined />}>
          <a onClick={getSpiderPage} target="_blank" rel="noopener noreferrer" >
         
            Spider
          </a>
        </Menu.Item>
      </Menu>
      </Header>
    );
  
}
export default TopMenu