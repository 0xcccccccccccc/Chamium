import React,{ useEffect } from 'react';
import { Button, Table,Input } from 'antd';
import { connect } from 'dva'


const Search = props => {
    const { dispatch,mes,Mysql_data,spider_data,spider_mes} = props;
    var obj1=new Object();
    let inputValue;
    const handlePost = (e) => {
        if (e) e.preventDefault();
        obj1.word = inputValue.value;
        console.log(obj1);
        
        dispatch({
            type: 'test/spider',
            payload: obj1,
        })
        //在此做提交操作，比如发dispatch等
      };
      const columns = [
        {
          title: '标题',
          dataIndex: 'title',
          key: 'title',
        },
        {
          title: '链接',
          dataIndex: 'url',
          key: 'url',
        },
        {
          title: 'id',
          dataIndex: 'KEY',
          key: 'id',
        },
        
      ];
    return (
            <div >
                <input ref={input => inputValue = input}  />
                <Button type="primary" onClick={handlePost}>爬虫爬取测试</Button>
                <Table dataSource={spider_data.data} columns={columns} />;
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
    function test3(){ 
        dispatch({
        type:'test/test2',
        payload:'wxy'
    })}

   
    

};



export  default connect(({ test: {mes,Mysql_data,spider_data,spider_mes},}) => ({
    mes,
    Mysql_data,
    spider_data,
    spider_mes
    
  }))(Search);