import React,{ useEffect } from 'react';
import { Button, Table,Input } from 'antd';
import { connect } from 'dva'
import Colorbox from '../Colorbox/Colorbox'
import Imagebox from '../Imagebox/Imagebox'
import Dropbox from '../Dropbox/Dropbox'
const Color2 = props => {
    
    return (
            <div style={{max_width:100,height:"calc(90vh)",backgroundColor:"blue"}}>
              <Dropbox/>
               <div>
                <Imagebox/>
                
                <Colorbox/>
                </div>
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
    
  }))(Color2);