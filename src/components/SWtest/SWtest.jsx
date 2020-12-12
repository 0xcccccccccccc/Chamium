import React from 'react';
import { Button } from 'antd';
import { connect } from 'dva'


const SWtest = props => {
    const { dispatch,mes,a1} = props;
   
    console.log(mes)
    console.log(a1)
    return (
            <div className="home-component-root">
            <Button type="primary" onClick={test1}>egg传值测试</Button>
    <h1>{mes}</h1>
    <h1>{a1}</h1>
            </div>
    );
    function test1(){ 
        dispatch({
        type:'test/test1',
    })}
   
    

};



export  default connect(({ test: {mes,a1},}) => ({
    mes,
    a1
  }))(SWtest);