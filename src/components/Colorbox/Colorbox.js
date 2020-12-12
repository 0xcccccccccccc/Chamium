import React from "react";
import emitter from "../../lib/ev";
import "./Colorbox.css"

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {items: []};
    }
    componentDidMount(){
        // 声明一个自定义事件
        // 在组件装载完成以后
        this.eventEmitter = emitter.addListener("clusterFinished",(msg)=>{
            this.setState(state => ({
                items: msg
            }));
        });
    }

    // 组件销毁前移除事件监听
    componentWillUnmount(){
        emitter.removeListener(this.eventEmitter, () => {
        });
    }
    render() {
        return (
            <div >
                {this.state.items.map(item => (
                    <div className="BoxItem">
                        <div className="ColorBlock" style={{width:"40px",height:"40px",margin:"10px",background:item}}></div>
                        <p>{item}</p>
                    </div>

                ))}
            </div>
        );
    }
}
