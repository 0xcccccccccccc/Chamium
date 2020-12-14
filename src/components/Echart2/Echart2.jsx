import React from 'react';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/toolbox';
import 'echarts/lib/component/markPoint';
import 'echarts/lib/component/markLine';


class Echarts2 extends React.Component {
  componentDidMount() {
    // 初始化
    var myChart = echarts.init(document.getElementById('main'));
    // 绘制图表
    var colorArr = ['#1890ff', '#2fc25b', '#facc14', '#223273', '#8543e0', '#13c2c2', '#3436c7', '#f04864'];

    myChart.setOption({
        title: { text: '搜索结果来源分析' },
       
      
        itemStyle: {
            normal: {
                // 设置扇形的颜色
                color: '#c23531',
                shadowBlur: 200,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        },
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b}: {c} ({d}%)"
     },
  
  color: colorArr,
  series: [
      {
        name:'信息来源',
        type:'pie',
        radius: ['50%', '70%'],
        avoidLabelOverlap: false,
        label: {
          normal: {
              show: false,
              position: 'center'
          },
          emphasis: {
              show: true,
              textStyle: {
                  fontSize: '20',
                  fontWeight: 'bold'
              }
          }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data:[ {value: 50, name: '新浪网'},
        {value: 25, name: '网易新闻'},
        {value: 25, name: '今日头条'},]
      }
  ]

     
         
      
    });
}
render() {
    return (
        <div id="main" style={{ width: '100%', height: 500 }}></div>
    );
}
}

export default Echarts2;

