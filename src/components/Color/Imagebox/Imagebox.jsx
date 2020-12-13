import React from "react";
import emitter from '../../../lib/ev'
import kMeans from '../../../lib/kMeans'
import css from "./ImageBox.css"
class Imagebox extends React.Component{

    constructor(props) {
        super(props);
        this.state = {msg:null};
    }
    componentDidMount(){
        // 声明一个自定义事件
        // 在组件装载完成以后
        this.eventEmitter = emitter.addListener("updateImg",(msg)=>{
            var canvas_handle = this.pictureCanvas || document.getElementById("pictureCanvas");
            var img = new Image();
            img.src = msg;
            img.onload = function () {
                canvas_handle.width = img.width;
                canvas_handle.height = img.height;
                canvas_handle.getContext("2d").drawImage(img, 0, 0); //synchronous ion

                var img_mat = canvas_handle.getContext("2d").getImageData(0, 0, canvas_handle.width, canvas_handle.height).data;
                var rgb_map = new Map();
                for (var i = 0; i < img_mat.length / 4; i++) {
                    var pixel = [img_mat[4 * i], img_mat[4 * i + 1], img_mat[4 * i + 2]];
                    rgb_map.set(String(pixel), pixel);
                }
                var rgb_list = [...rgb_map.values()];
                var km = new kMeans({
                    K: 8
                });
                km.cluster(rgb_list);

                while (km.step()) {
                    km.findClosestCentroids();
                    km.moveCentroids();
                    console.log(km.centroids);
                    if(km.hasConverged()) break;
                }
                console.log('Finished in:', km.currentIteration, ' iterations');
                console.log(km.centroids, km.clusters);
                var centroidsColor=[];
                for(var i=0;i<km.centroids.length;i++)
                {
                    var r=Math.round(km.centroids[i][0]).toString(16)
                    if(r.length==1)r="0"+r;
                    var g=Math.round(km.centroids[i][1]).toString(16)
                    if(g.length==1)r="0"+g;
                    var b=Math.round(km.centroids[i][2]).toString(16)
                    if(b.length==1)r="0"+b;
                    centroidsColor.push("#" + r + g + b)
                }
                emitter.emit("clusterFinished", centroidsColor);

            }
        });
    }


    // 组件销毁前移除事件监听
    componentWillUnmount() {
        emitter.removeListener(this.eventEmitter, () => {
        });
    }

    render() {
        return (
            <div>
                <canvas id="pictureCanvas" ref={(ref) => {
                    this.pictureCanvas = ref
                }} alt="logo" className={css.ImageBox}></canvas>
            </div>
        );

    }
}
export default Imagebox;