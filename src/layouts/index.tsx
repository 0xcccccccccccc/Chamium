import React from 'react';
import styles from './index.css';
import { Menu, Icon } from 'antd';
import TopMenu from '../components/TopMenu/TopMenu'
const BasicLayout: React.FC = props => {
  
  return (
    <div className={styles.normal}>
      {/* <h1 className={styles.title}>web前端测试环境</h1> */}
      <TopMenu></TopMenu>
      {props.children}
    </div>
  );
};

export default BasicLayout;
