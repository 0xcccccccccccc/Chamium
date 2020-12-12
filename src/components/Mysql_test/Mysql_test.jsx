import React from 'react';
import { Button, Table } from 'antd';
import { connect } from 'dva'


const Mysql_test = props => {
    const { dispatch,mes,Mysql_data} = props;
    const columns = [
        {
          title: '昵称',
          dataIndex: 'nickname',
          key: 'nickname',
        },
        {
          title: '密码',
          dataIndex: 'passward',
          key: 'passward',
        },
        
      ];
    
    console.log(Mysql_data)
    
    return (
            <div className="home-component-root">
            <Button type="primary" onClick={test1}>后端测试</Button>
            <Button type="primary" onClick={test2}>umi传值测试</Button>
            <h1>{mes}</h1>
            <Table dataSource={Mysql_data.user} columns={columns} />;
            </div>
    );
    function test1(){ 
        dispatch({
        type:'test/test1',
    })}
    function test2(){ 
        dispatch({
        type:'test/test2',
        payload:'wxy'
    })}

   
    

};



export  default connect(({ test: {mes,Mysql_data},}) => ({
    mes,
    Mysql_data,
    
  }))(Mysql_test);