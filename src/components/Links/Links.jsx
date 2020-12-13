import React from 'react';
import { Button, Table } from 'antd';
import { connect } from 'dva'
import css from "./Links.css"


const Links = props => {
    const { dispatch,mes,Mysql_data} = props;
    
    return (
            <div className="home-component-root">
                <iframe id={"frame"} className={css.FrameWindow} src={"php/random-links.php"}></iframe>
                <br/>
                <Button type="primary" onClick={refresh}>按钮</Button>
            </div>
    );
    function refresh(){
        var frame=document.getElementById("frame")
        frame.src=frame.src
    }
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
  }))(Links);