/**
 * Created by mark on 2017/4/10.
 */
/* 自定义数据服务*/
MyApp.service('Data',['$rootScope', '$http', '$q', function ($rootScope,$http,$q) {
  return {
    key: 0,
    /* 头部导航栏数据*/
    /* 全部分组数据*/
    allgroupdata:[
      {name:'全部分组'},
      {name:'1207-01'},
      {name:'分组名称'},
      {name:'民生卡中心'},
      {name:'分组名称0'}
      ],
    /* 选择任务数据*/
    selecttaskdata:[
      {name:'C-印度尼西亚',id:101},
      {name:'苹果',id:17},
      {name:'test2',id:66},
      {name:'卡萨帝中国',id:42},
      {name:'A-联想',id:108},
      {name:'海尔-法国',id:106},
      {name:'C-巴基斯坦',id:104},
      {name:'C-法国',id:103},
      {name:'C-波兰',id:100},
      {name:'C-马拉西亚Ipay88',id:98},
      {name:'C-俄罗斯电商OZON',id:97},
      {name:'C-德国电商',id:96},
      {name:'C-菲律宾电商',id:95},
      {name:'C-英国Wiggle',id:93},
      {name:'C-荷兰BOL',id:91}
    ],
    nav: [
      { text: '综合呈现', link: '#/all'},
      { text: '任务管理', link: '#/rwgl'},
      { text: '快速检测', link: '#/ksjc'},
      { text: '告警管理', link: '#/gjgl'}],
    /* 侧边栏数据*/
    aside: [
      { text: '收起', link: 'javascirpt:;', icon: 'icon1' },
      { text: '概览', link: '#/all', icon: 'icon2' },
      { text: '运营商', link: '#/yys', icon: 'icon3' },
      { text: '性能', link: '#/xn', icon: 'icon4' },
      { text: '元素', link: '#/ys', icon: 'icon5' },
      { text: '可用性', link: '#/kyx', icon: 'icon6' },
      { text: '对比', link: '#/db', icon: 'icon7' }
    ],
    /* 页面可用性数据*/
    usabilioption: {
      title : {
        text: '页面可用性',
        x: 15,
        y: 15,
        textStyle: {
          color: '#fff',
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontFamily: '微软雅黑',
          fontSize: 14,
        }
      },
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)",
        confine: true
      },
      color: ['#9879fd', '#43dea1', '#4bc8fa', '#6d7eff'],
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: ['30%', '45%'],
          data: [
            {value: 335, name: '正常'},
            {value: 310, name: '404错误'},
            {value: 400, name: '500错误'},
            {value: 135, name: '其他错误'},
          ]
        }
      ]
    },
    /* 页面性能数据*/
    peroption: {
      title : {
        text: '页面性能',
        x: 15,
        y: 15,
        textStyle: {
          color: '#fff',
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontFamily: '微软雅黑',
          fontSize: 14,
        }
      },
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)",
        confine: true
      },
      series: [
        {
          color:['#4edc7f', '#faeb6f', '#b4f65d', '#788bff'],
          name:'访问来源',
          type:'pie',
          radius: [0, '26%'],
          label: {
            normal: {
              position: 'inner',
              textStyle: 11
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data:[
            {value: 0, name: '连接不达标'},
            {value: 0, name: 'DNS解析不达标'},
            {value: 0, name: '首字节不达标'},
            {value: 0, name: 'SSL握手不达标'}
          ],
          itemStyle:{
            normal:{
              label:{
                show: true,
                formatter: '{d}%'
              },
              labelLine :{show:true}
            }
          }
        },
        {
          color: ['#4edc7f', '#faeb6f', '#b4f65d', '#788bff'],
          name: '访问来源',
          type: 'pie',
          radius: ['35%', '45%'],
          itemStyle: {
            normal:{
              label:{
                show:true,
                formatter:function(val){   //让series 中的文字进行换行
                  return val.name.split("-").join("\n");}
              }
            }
          },
          data: [
            {value: 0, name: '建立连接'},
            {value: 0, name: 'DNS解析'},
            {value: 0, name: '首字节'},
            {value: 0, name: 'SSL握手'},
          ]
        }
      ]
    },
    /* 元素性能数据*/
    eleoption: {
      title : {
        text: '页面元素可用性',
        x: 15,
        y: 15,
        textStyle: {
          color: '#fff',
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontFamily: '微软雅黑',
          fontSize: 14,
        }
      },
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)",
        confine: true
      },
      color: ['#9879fd', '#43dea1', '#4bc8fa', '#6d7eff'],
      series: [
        {
          name:'访问来源',
          type:'pie',
          radius: [0, '26%'],
          label: {
            normal: {
              position: 'inner',
              textStyle: 11
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data:[
            {value: 335, name: '其他'}
          ],
          itemStyle:{
            normal:{
              color: '#48d8fc',
              label:{
                show: true,
                formatter: '其他'
              },
              labelLine :{show:true}
            }
          }
        },
        {
          name: '访问来源',
          type: 'pie',
          radius: ['35%', '45%'],
          itemStyle: {
            normal:{
              label:{
                show:true,
                formatter:function(val){   //让series 中的文字进行换行
                  return val.name.split("-").join("\n");}
              }
            }
          },
          data: [
            {value: 335, name: '正常'},
            {value: 310, name: '404错误'},
            {value: 234, name: '500错误'},
            {value: 135, name: '其他错误'},
          ]
        }
      ]
    },
    /* CDN性能数据*/
    cdnoption: {
      title: {
        text: 'CDN评估',
        x: 15,
        y: 15,
        textStyle: {
          color: '#fff',
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontFamily: '微软雅黑',
          fontSize: 14,
        }
      },
      tooltip: {
        trigger: 'axis',
        confine: true
      },
      radar: [
        {
          indicator: [
            {text: '图片压缩', max: 100},
            {text: '有效性', max: 100},
            {text: '静态资源', max: 100},
            {text: '连接保持', max: 100},
            {text: '首字节', max: 100}
          ],
          center: ['50%','50%'],
          radius: 80,
          name: {
            textStyle: {
              color: '#fff'
            }
          },
          splitArea: {
            areaStyle: {
              color: '#262d33'
            }
          },
          axisLine: {
            lineStyle: {
              color: '#2e3741'
            }
          },
          splitLine: {
            lineStyle: {
              color: '#2e3741'
            }
          }
        }

      ],
      series: [
        {
          type: 'radar',
          symbolSize: 0,
          tooltip: {
            trigger: 'item'
          },
          data: [
            {
              value: [60,73,85,100,50],
              name: '手机',
              itemStyle: {normal: {
                color: '#276b7c',
                areaStyle: {color: '#276b7c'},
                lineStyle: {color: '#276b7c'}
              }},
            },
            {
              value: [60,100,85,60,30],
              name: '电脑',
              itemStyle: {normal: {
                color: '#465190',
                areaStyle: {color: '#465190'},
                lineStyle: {color: '#465190'}
              }},
            }
          ]
        }
      ]
    },
    /* 世界地图数据*/
    wordoption: {
      visualMap: {
        x: 'left',
        y: 'bottom',
        splitList: [
          {start: 1500,label: '>10000 ms', color: '#ff6161'},
          {start: 900, end: 1500,label: '8001~10000 ms', color: '#ff8746'},
          {start: 310, end: 1000,label: '5001~8000 ms', color: '#f5cc5c'},
          {start: 200, end: 300,label: '3501~5000 ms', color: '#cbea1b'},
          {start: 10, end: 200, label: '2001~3500 ms', color: '#34d495'},
          {start: 1, end: 10, label: '<2000 ms', color: '#31c1f4'}
        ],
        textStyle: {
          color: '#fff'
        }
      },
      series: [
        {
          type: 'map',
          mapType: 'world',
          roam: false,
          itemStyle:{
            emphasis:{label:{show:true}},
            color:'#fff'
          },
          data:[
            {name: 'Afghanistan', value: 297.812},
            {name: 'Angola', value: 149.124},
            {name: 'Albania', value: 310.143},
            {name: 'United Arab Emirates', value: 841.537},
            {name: 'Argentina', value: 374.224},
            {name: 'Armenia', value: 296.496},
            {name: 'French Southern and Antarctic Lands', value: 268.065},
            {name: 'Australia', value: 404.488},
            {name: 'Austria', value: 8401.924},
            {name: 'Azerbaijan', value: 94.718},
            {name: 'Burundi', value: 92.753},
            {name: 'Belgium', value: 141.288},
            {name: 'Benin', value: 959.798},
            {name: 'Burkina Faso', value: 1540.284},
            {name: 'Bangladesh', value: 1525.475},
            {name: 'Bulgaria', value: 739.175},
            {name: 'The Bahamas', value: 602.316},
            {name: 'Bosnia and Herzegovina', value: 3845.929},
            {name: 'Belarus', value: 9491.07},
            {name: 'Belize', value: 308.595},
            {name: 'Bermuda', value: 64.951},
            {name: 'Bolivia', value: 716.939},
            {name: 'Brazil', value: 1910.154},
            {name: 'Brunei', value: 27.223},
            {name: 'Bhutan', value: 716.939},
            {name: 'Botswana', value: 1969.341},
            {name: 'Central African Republic', value: 449.921},
            {name: 'Canada', value: 346.24},
            {name: 'Switzerland', value: 780.534},
            {name: 'Chile', value: 1750.76},
            {name: 'China', value: 1.465},
            {name: 'Ivory Coast', value: 608.978},
            {name: 'Cameroon', value: 204.343},
            {name: 'Democratic Republic of the Congo', value: 691.161},
            {name: 'Republic of the Congo', value: 3573.024},
            {name: 'Colombia', value: 444.798},
            {name: 'Costa Rica', value: 466.685},
            {name: 'Cuba', value: 1121.768},
            {name: 'Northern Cyprus', value: 1.468},
            {name: 'Cyprus', value: 1103.685},
            {name: 'Czech Republic', value: 1053.701},
            {name: 'Germany', value: 817.404},
            {name: 'Djibouti', value: 834.036},
            {name: 'Denmark', value: 550.959},
            {name: 'Dominican Republic', value: 1016.797},
            {name: 'Algeria', value: 362.82},
            {name: 'Ecuador', value: 151.072},
            {name: 'Egypt', value: 785.705},
            {name: 'Eritrea', value: 5741.159},
            {name: 'Spain', value: 462.038},
            {name: 'Estonia', value: 18.533},
            {name: 'Ethiopia', value: 95.281},
            {name: 'Finland', value: 567.693},
            {name: 'Fiji', value: 860.559},
            {name: 'Falkland Islands', value: 49.581},
            {name: 'France', value: 630.866},
            {name: 'Gabon', value: 1556.222},
            {name: 'United Kingdom', value: 666.35},
            {name: 'Georgia', value: 488.674},
            {name: 'Ghana', value: 262.901},
            {name: 'Guinea', value: 106.033},
            {name: 'Gambia', value: 1680.64},
            {name: 'Guinea Bissau', value: 106.033},
            {name: 'Equatorial Guinea', value: 696.167},
            {name: 'Greece', value: 1119.999},
            {name: 'Greenland', value: 56.546},
            {name: 'Guatemala', value: 1341.576},
            {name: 'French Guiana', value: 231.169},
            {name: 'Guyana', value: 786.126},
            {name: 'Honduras', value: 7621.204},
            {name: 'Croatia', value: 438.027},
            {name: 'Haiti', value: 896.4},
            {name: 'Hungary', value: 1004.633},
            {name: 'Indonesia', value: 206.485},
            {name: 'India', value: 1224.648},
            {name: 'Ireland', value: 4467.561},
            {name: 'Iran', value: 2476.485},
            {name: 'Iraq', value: 30962.38},
            {name: 'Iceland', value: 318.042},
            {name: 'Israel', value: 720.368},
            {name: 'Italy', value: 608.978},
            {name: 'Jamaica', value: 274.485},
            {name: 'Jordan', value: 6454.554},
            {name: 'Japan', value: 1252.833},
            {name: 'Kazakhstan', value: 1921.127},
            {name: 'Kenya', value: 409.194},
            {name: 'Kyrgyzstan', value: 534.223},
            {name: 'Cambodia', value: 1464.931},
            {name: 'South Korea', value: 452.352},
            {name: 'Kosovo', value: 97.743},
            {name: 'Kuwait', value: 2991.58},
            {name: 'Laos', value: 6395.713},
            {name: 'Lebanon', value: 441.092},
            {name: 'Liberia', value: 357.99},
            {name: 'Libya', value: 600.612},
            {name: 'Sri Lanka', value: 20758.779},
            {name: 'Lesotho', value: 2008.921},
            {name: 'Lithuania', value: 3068.457},
            {name: 'Luxembourg', value: 507.885},
            {name: 'Latvia', value: 2090.519},
            {name: 'Morocco', value: 31642.36},
            {name: 'Moldova', value: 103.619},
            {name: 'Madagascar', value: 21079.532},
            {name: 'Mexico', value: 1186.404},
            {name: 'Macedonia', value: 507.885},
            {name: 'Mali', value: 1385.961},
            {name: 'Myanmar', value: 131.231},
            {name: 'Montenegro', value: 620.078},
            {name: 'Mongolia', value: 2712.738},
            {name: 'Mozambique', value: 2967.265},
            {name: 'Mauritania', value: 3609.42},
            {name: 'Malawi', value: 15013.694},
            {name: 'Malaysia', value: 2875.835},
            {name: 'Namibia', value: 218.967},
            {name: 'New Caledonia', value: 246.379},
            {name: 'Niger', value: 1593.746},
            {name: 'Nigeria', value: 1707.78},
            {name: 'Nicaragua', value: 522.209},
            {name: 'Netherlands', value: 115.243},
            {name: 'Norway', value: 891.251},
            {name: 'Nepal', value: 266.016},
            {name: 'New Zealand', value: 468.136},
            {name: 'Oman', value: 202.768},
            {name: 'Pakistan', value: 1149.306},
            {name: 'Panama', value: 378.128},
            {name: 'Peru', value: 2262.83},
            {name: 'Philippines', value: 344.322},
            {name: 'Papua New Guinea', value: 858.945},
            {name: 'Poland', value: 3198.754},
            {name: 'Puerto Rico', value: 309.671},
            {name: 'North Korea', value: 1.468},
            {name: 'Portugal', value: 1589.792},
            {name: 'Paraguay', value: 659.721},
            {name: 'Qatar', value: 1749.713},
            {name: 'Romania', value: 1861.476},
            {name: 'Russia', value: 1861.476},
            {name: 'Rwanda', value: 1036.732},
            {name: 'Western Sahara', value: 514.648},
            {name: 'Saudi Arabia', value: 2758.387},
            {name: 'Sudan', value: 652.002},
            {name: 'South Sudan', value: 990.929},
            {name: 'Senegal', value: 1290.564},
            {name: 'Solomon Islands', value: 526.447},
            {name: 'Sierra Leone', value: 551.976},
            {name: 'El Salvador', value: 618.195},
            {name: 'Somaliland', value: 966.173},
            {name: 'Somalia', value: 966.173},
            {name: 'Republic of Serbia', value: 573.024},
            {name: 'Suriname', value: 524.96},
            {name: 'Slovakia', value: 433.437},
            {name: 'Slovenia', value: 2054.232},
            {name: 'Sweden', value: 382.297},
            {name: 'Swaziland', value: 1193.148},
            {name: 'Syria', value: 830.534},
            {name: 'Chad', value: 1720.781},
            {name: 'Togo', value: 6306.014},
            {name: 'Thailand', value: 6402.316},
            {name: 'Tajikistan', value: 7627.326},
            {name: 'Turkmenistan', value: 5041.995},
            {name: 'East Timor', value: 616.797},
            {name: 'Trinidad and Tobago', value: 1328.095},
            {name: 'Tunisia', value: 631.83},
            {name: 'Turkey', value: 137.546},
            {name: 'United Republic of Tanzania', value: 973.33},
            {name: 'Uganda', value: 987.213},
            {name: 'Ukraine', value: 6050.22},
            {name: 'Uruguay', value: 3371.982},
            {name: 'United States of America', value: 2247.116},
            {name: 'Uzbekistan', value: 769.27},
            {name: 'Venezuela', value: 236.299},
            {name: 'Vietnam', value: 9047.397},
            {name: 'Vanuatu', value: 236.299},
            {name: 'West Bank', value: 13.565},
            {name: 'Yemen', value: 2763.008},
            {name: 'South Africa', value: 1452.352},
            {name: 'Zambia', value: 3216.985},
            {name: 'Zimbabwe', value: 76.978}
          ]
        }
      ]
    },
    /* 运营商首屏时间统计*/
    Operatorsoption: {
      title: {
        text: '运营商首屏时间统计(ms)',
        x: 15,
        y: 15,
        textStyle: {
          color: '#fff',
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontFamily: '微软雅黑',
          fontSize: 14,
        }
      },
      tooltip: {
        trigger: 'axis',
        confine: true,
        axisPointer: {
          type: 'line'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        show:false,
        type: 'value',
        boundaryGap: [0, 0.01]
      },
      yAxis: {
        type: 'category',
        axisTick:{
          show:false
        },
        axisLine:{
          show:false
        },
        data: [
          {value: '德国',
            textStyle: {
              fontSize: 12,
              color: '#fff'
            }},
          {value: '俄罗斯',
            textStyle: {
              fontSize: 12,
              color: '#fff'
            }},
          {value: '菲律宾',
            textStyle: {
              fontSize: 12,
              color: '#fff'
            }}
        ]
      },
      series: [
        {
          name: '运营商首屏时间',
          type: 'bar',
          label: {
            normal: {
              show: true,
              position: 'inside',
              textStyle:{
                color:'black',
                fontSize:12
              }
            }
          },
          data: [
            {value:4211,itemStyle:{
            normal:{
              color:'#ffc669'
            }
          }},{value:12341,itemStyle:{
            normal:{
              color:'#ffa256'
            }
          }},{value:22112, itemStyle:{
            normal:{
              color:'#f44a43'
            }
          }}
          ],
          itemStyle:{
            normal:{
              barBorderRadius: 10
            }
          },
          barWidth:15
        }
      ]
    },
    /* 首屏时间最慢*/
    operatorslowoption:{
      title: {
        text: '首屏时间最慢TOP10(ms)',
        x: 15,
        y: 15,
        textStyle: {
          color: '#fff',
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontFamily: '微软雅黑',
          fontSize: 14,
        }
      },
      tooltip: {
        trigger: 'axis',
        confine: true,
        axisPointer: {
          type: 'line'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        show:false,
        type: 'value',
        boundaryGap: [0, 0.01]
      },
      yAxis: {
        type: 'category',
        axisTick:{
          show:false
        },
        axisLine:{
          show:false
        },
        data: [
          {value: '菲律宾马尼拉',
            textStyle: {
              fontSize: 12,
              color: '#fff'
            }},
          {value: '俄罗斯莫斯科',
            textStyle: {
              fontSize: 12,
              color: '#fff'
            }},
          {value: '德国汉堡',
            textStyle: {
              fontSize: 12,
              color: '#fff'
            }},
          {value: '意大利米兰',
            textStyle: {
              fontSize: 12,
              color: '#fff'
            }},
          {value: '印度孟买',
            textStyle: {
              fontSize: 12,
              color: '#fff'
            }},
          {value: '阿联酋迪拜',
            textStyle: {
              fontSize: 12,
              color: '#fff'
            }},
          {value: '陕西省西安市',
            textStyle: {
              fontSize: 12,
              color: '#fff'
            }},
          {value: '英国伦敦',
            textStyle: {
              fontSize: 12,
              color: '#fff'
            }},
          {value: '印尼雅加达',
            textStyle: {
              fontSize: 12,
              color: '#fff'
            }},
          {value: '荷兰海牙',
            textStyle: {
              fontSize: 12,
              color: '#fff'
            }}
        ]
      },
      series: [
        {
          name: '首屏时间最慢TOP10',
          type: 'bar',
          label: {
            normal: {
              show: true,
              position: 'inside',
              textStyle:{
                color:'black',
                fontSize:12
              }
            }
          },
          data: [{value:9912,itemStyle:{
            normal:{
              color:'#4cbbfa'
            }
          }},{value:13141,itemStyle:{
            normal:{
              color:'#44d982'
            }
          }},{value:21211, itemStyle:{
            normal:{
              color:'#44d982'
            }
          }},{value:31311, itemStyle:{
            normal:{
              color:'#b7f75c'
            }
          }},{value:42112,itemStyle:{
            normal:{
              color:'#b7f75c'
            }
          }},{value:52341,itemStyle:{
            normal:{
              color:'#fce368'
            }
          }},{value:62111, itemStyle:{
            normal:{
              color:'#fdde63'
            }
          }},{value:71411, itemStyle:{
            normal:{
              color:'#ffb962'
            }
          }},{value:81151, itemStyle:{
            normal:{
              color:'#ffb25f'
            }
          }},{value:95111, itemStyle:{
            normal:{
              color:'#f44a43'
            }
          }}],
          itemStyle:{
            normal:{
              barBorderRadius: 10
            }
          },
          barWidth:15
        }
      ]
    },
    /* 退出登录*/
    logout:function () {
      $.cookie("jkb_ticket",null,{path:"/"});
      window.location.replace('/synthetic/login/index');
    },
    /*封装ajax Get请求*/
    ajaxget:function (url,params) {
      var defer = $q.defer();
      $http({
        url:url,
        method:'get',
        params:params,
        withCredentials: true,
      }).success(function (info) {
        defer.resolve(info)
      })
      return defer.promise;
    }
  }
}]);