import React, { Component } from 'react';
import styles from './index.css';
import SWtest from '../components/SWtest/Swtest';
import IndexMotion from '../components/Canvas/IndexMotion'
import { Button } from 'antd';
import router from 'umi/router';
export default function() {
  const getOtherPage = () => {
    router.push('/links')
  }
  return (

     <div >
      <IndexMotion/>
    </div>
  );
 
}
