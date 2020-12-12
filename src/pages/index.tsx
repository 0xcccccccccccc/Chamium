import React, { Component } from 'react';
import styles from './index.css';
import SWtest from '../components/SWtest/Swtest';
import IndexMotion from '../components/Canvas/IndexMotion'
import { Button } from 'antd';
import router from 'umi/router';
export default function() {
  const getOtherPage = () => {
    router.push('/test_mysql')
  }
  return (
    // <div className={styles.normal}>
    //   <div className={styles.welcome} />
    //   <ul className={styles.list}>
    //     <li>To get started, edit <code>src/pages/index.js</code> and save to reload.</li>
    //     <li>
    //       <a href="https://umijs.org/guide/getting-started.html">
    //         Getting Started
    //       </a>
       
    //     </li>
    //     <Button type="primary" onClick={getOtherPage}>跳转mysql测试</Button>
    //     <SWtest/>
    //   </ul>
    // </div>

     <div >
      <IndexMotion/>
    </div>
  );
 
}
