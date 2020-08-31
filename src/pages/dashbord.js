import React, { Component } from 'react'
// import { MessageOutlined } from '@ant-design/icons'
import EchartsTest from './echarts/round'
import echarts from 'echarts'
import 'echarts-liquidfill'
// 引入提示框和标题组件
import 'echarts/lib/component/title'
import style from './dashbord.module.css'

class Dashbord extends Component {
  state = {  }
  componentDidMount() {
    const myChart = echarts.init(document.getElementById('four'))
    myChart.setOption({
			backgroundColor: 'rgba(61,216,255,.2)',
			title: {
        text: '各内存使用情况',
        textAlign: "center",
        left: "15%",
        top: '15%',
        textStyle: {
          color: '#000',
          fontSize: 22,
          fontWeight: '400'
        }
      },
		    color: ['#3D91F7', '#61BE67'],
		    tooltip: {},
		    legend: {
		        show: true,
		        icon: "circle",
		        bottom: 30,
		        center: 0,
		        itemWidth: 14,
		        itemHeight: 14,
		        itemGap: 21,
		        orient: "horizontal",
		        data: ['a', 'b'],
		        textStyle: {
		            fontSize: '70%',
		            color: '#8C8C8C'
		        },
		    },
		    radar: {
		        // shape: 'circle',
		    	radius:'80%',
		    	triggerEvent: true,
		        name: {
              textStyle: {
                color: '#fff',
                fontSize:'20',
                borderRadius: 3,
                padding: [3, 5]
              }
		        },
		        nameGap:'2',
		        indicator: [{//[4300, 10000, 28000, 35000, 50000, 19000, 21000]
		             name: 'cpu', max: 100},
		            {name: '内存', max: 100},
		            {name: '显卡', max: 100 },
		            {name: '主机', max: 100},
		            {name: '其他',max: 100}
		        ],
		        splitArea: {
		            areaStyle: {
		            	 color: [
                    'rgba(222,134,85, 0.1)', 'rgba(222,134,85, 0.2)',
                    'rgba(222,134,85, 0.4)', 'rgba(222,134,85, 0.6)',
                    'rgba(222,134,85, 0.8)', 'rgba(222,134,85, 1)'
                    ].reverse()
		            }
		        },
		        // axisLabel:{//展示刻度
		        //     show: true
		        // },
		        axisLine: { //指向外圈文本的分隔线样式
              lineStyle: {
                color: 'rgba(0,0,0,0)'
              }
		        },
		        splitLine: {
		            lineStyle: {
		            	width:2,
		                color: [
		                    'rgba(224,134,82, 0.1)', 'rgba(224,134,82, 0.2)',
		                    'rgba(224,134,82, 0.4)', 'rgba(224,134,82, 0.6)',
		                    'rgba(224,134,82, 0.8)', 'rgba(224,134,82, 1)'
		                ].reverse()
		            }
		        },

		    },
		    series: [{
		        name: '高一',
		        type: 'radar',
		        //areaStyle: {normal: {}},
		        areaStyle: {
                normal: {
                  color: 'rgba(252,211,3, 0.3)'
                }
                },
                symbolSize: 0,
                lineStyle: {
                  normal: {
                      color: 'rgba(252,211,3, 1)',
                      width: 1
                  }
                },
		        data: [{
		                value: [43, 90, 80, 53, 78, 89, 77],
		                name: '人数',
		            }
		        ]
		    },{
		        name: '高二',
		        type: 'radar',
		        //areaStyle: {normal: {}},
		        areaStyle: {
                    normal: {
                        color: 'rgba(255,292,203, 0.3)'
                    }
                },
                symbolSize: 0,
                lineStyle: {
                    normal: {
                        color: 'rgba(255,292,203, 1)',
                        width: 1
                    }
                },
		        data: [{
                  value: [50, 44, 56, 69, 43, 77, 90],
                  name: '因素',
		            }
		        ]
		    },,{
		        name: '高三',
		        type: 'radar',
		        //areaStyle: {normal: {}},
		        areaStyle: {
                    normal: {
                        color: 'rgba(0,255,0, 0.3)'
                    }
                },
                symbolSize: 0,
                lineStyle: {
                  normal: {
                    color: 'rgba(0,255,0, 1)',
                    width: 1
                  }
                },
		        data: [{
              value: [67, 80, 92, 94, 69, 77, 45],
              name: '因素',
            }
          ]
		    }]
      })
  }
  render() { 
    return ( 
      <div className={style.dashbord}>
        <>
          <h3>使用率分览</h3>
          <div className={style.box}>
            <div className={style.item}>
              <EchartsTest name="one" num="30" color="#1890ff" />
              <div className={style.font}>cpu使用率</div>
            </div>
            <div className={style.item}>
              <EchartsTest name="two" num="40" color="#f19759" />
              <div className={style.font}>内存使用率</div>
            </div>
            <div className={style.item}>
              <EchartsTest name="three" num="60" color="#00c2f9" />
              <div className={style.font}>磁盘使用率</div>
            </div>
          </div>
        </>
        <>
          {/* 接入总揽数据表 */}
          <h3>数据总览</h3>
          <div id="four" style={{width:'1400px', height:'300px'}} />
        </>
      </div>
     )
  }
}
 
export default Dashbord