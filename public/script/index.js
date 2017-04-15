/**
 * Created by mark on 2017/4/7.
 */
"use strict"
let MyApp = angular.module('App', ['ngRoute']);
/* 定义路由控制器*/
MyApp.config(['$routeProvider', '$locationProvider',  function ($routeProvider, $locationProvider) {
  $routeProvider.when('/all', {
    /* 概述路由*/
    controller: 'allCtl',
    templateUrl: '/views/conmponents/all/all.html'
  }).when('/yys', {
    /* 运营商路由*/
    controller: 'yysCtl',
    templateUrl: '/views/conmponents/yys/yys.html'
  }).when('/xn', {
    /* 性能路由*/
    controller: 'xnCtl',
    templateUrl: '/views/conmponents/xn/xn.html'
  }).when('/ys', {
    /* 元素路由*/
    controller: 'ysCtl',
    templateUrl: '/views/conmponents/ys/ys.html'
  }).when('/kyx', {
    /* 可用性路由*/
    controller: 'kyxCtl',
    templateUrl: '/views/conmponents/kyx/kyx.html'
  }).when('/db', {
    /* 对比路由*/
    controller: 'dbCtl',
    templateUrl: '/views/conmponents/db/db.html'
  }).when('/rwgl', {
    /* 对比路由*/
    controller: 'rwglCtl',
    templateUrl: '/views/conmponents/rwgl/rwgl.html'
  }).when('/ksjc', {
    /* 对比路由*/
    controller: 'ksjcCtl',
    templateUrl: '/views/conmponents/ksjc/ksjc.html'
  }).when('/gjgl', {
    /* 对比路由*/
    controller: 'gjglCtl',
    templateUrl: '/views/conmponents/gjgl/gjgl.html'
  }).otherwise({
    /* 其他路由*/
    redirectTo: '/all'
  });
  $locationProvider.html5Mode({
    enabled: false,  //true 为消除URL路由前面的#号
    requireBase: false//必须配置为false，否则<base href=''>这种格式带base链接的地址才能解析
  });
}]);

/* HeadNavS头部导航*/
MyApp.controller('head', ['$scope', 'Data', '$http', function ($scope, Data, $http) {
  $scope.nav = Data.nav;
  $scope.key = 0;
  $scope.active = function (index) {
    $scope.key = index;
  };
  $scope.logout = function () {
    $http({
      url: '/users/logout',
      method: 'post',
      withCredentials: true,
    }).success(function (info) {
      if (info.response === 'success') {
        $.cookie("jkb_ticket",null,{path:"/"});
        window.location.replace('/synthetic/login/index');
      }else{
        alert('请重试')
      }
    })
  }
}]);
/* HeadNavE头部导航*/
/* AsideB侧边栏*/
MyApp.controller('asideCtl', ['$scope', '$rootScope', 'Data', function ($scope, $rootScope, Data) {
  $scope.aside = Data.aside;
  $rootScope.flag = false;
  $rootScope.changetoggle = function (index) {
    if (index === 0) {
      $rootScope.flag = !$rootScope.flag;
    } else {
      $rootScope.flag = false;
    }
  };
}]);
/* AsideE侧边栏*/

/* DataShowB数据显示*/
MyApp.controller('allCtl', ['$scope', 'Data', '$rootScope', '$http', function ($scope, Data, $rootScope, $http) {
  $rootScope.key = 1;
  $rootScope.allgroup = '全部分组';
  /* 切换显示分组*/
  $scope.allgrouplist = Data.allgroupdata;
  $scope.toggroup = false;
  $scope.toggleGroup =  function () {
    $scope.toggroup = !$scope.toggroup;
    if($scope.togitem){
      $scope.togitem = !$scope.togitem;
    }
  };
  /* 选择分组*/
  $scope.groupvalue = function (val) {
    if (val==="全部分组"){
      $rootScope.selecttask = '<--请选择任务-->';
    }
    $rootScope.allgroup = val;
    $scope.toggroup = !$scope.toggroup;
  };
  /* 切换显示任务*/
  $rootScope.selecttask = '<--请选择任务-->';
  $scope.tasklists = Data.selecttaskdata;
  $scope.togitem = false;
  $scope.itemshow =  function () {
    $scope.togitem = !$scope.togitem;
    if($scope.toggroup){
      $scope.toggroup = !$scope.toggroup;
    }
  };
  /* 选择任务*/
  $scope.itemvalue = function (val) {
    $rootScope.selecttask = val;
    $scope.togitem = !$scope.togitem;
  };

  $rootScope.newlytime = '最近30分钟';
  /* 页面进入时重新绘图-页面可用性*/
  let myCharta = echarts.init(document.getElementById('pageuse'));
  let urla = '/data/availability/page';
  let paramsa = {
    task_id:64,
    start_time: "2016-01-01",
    end_time: "2018-01-01"
  };
  let promisea = Data.ajaxget(urla,paramsa);
  promisea.then(function (info) {
    if(info.code===10010){
      Data.logout();
    }else{
      Data.usabilioption.series[0].data[0].value = info[0][200];
      let optiona = Data.usabilioption;
      myCharta.setOption(optiona);
    }
  });
  /* 页面进入时重新绘图-页面性能*/
  let myChartb = echarts.init(document.getElementById('pageper'));
  let urlb="/data/performance/page";
  let paramsb={
    task_id:1,
    start_time: "2016-01-01",
    end_time: "2018-01-01"
  };
  let promiseb = Data.ajaxget(urlb,paramsb);
  promiseb.then(function (info) {
    let arrb=[];
      for (let k in info){
        arrb.push(info[k])
      }
      arrb.shift();
      if(info.code===10010){
        Data.logout();
      }else{
        for (let i =0; i<Data.peroption.series[0].data.length;i++) {
          Data.peroption.series[0].data[i].value = arrb[i+1]
        }
        for(let i =0; i<Data.peroption.series[1].data.length;i++){
          Data.peroption.series[1].data[i].value = arrb[i]
        }
        let optionb = Data.peroption;
        myChartb.setOption(optionb);
      }
  });
  /* 页面进入时重新绘图-页面元素可用性*/
  let myChartc = echarts.init(document.getElementById('eleus'));
  let urlc = '/data/availability/object';
  let paramsc = {
    task_id:1,
    start_time: "2016-01-01",
    end_time: "2018-01-01"
  };
  let promisec = Data.ajaxget(urlc,paramsc);
  promisec.then(function (info) {
    if(info.code===10010){
      Data.logout();
    }else{
      let arrcinner=info.inner;
      let arrcout=info.performance;
      Data.eleoption.series[0].data=[];
      Data.eleoption.series[1].data=[];
      arrcinner.forEach(function (val,i) {
        let objc= {};
        objc.name=arrcinner[i].name;
        objc.value=arrcinner[i].value;
        Data.eleoption.series[0].data.push(objc)
      });
      arrcout.forEach(function (val,i) {
        let objc= {};
        objc.name=arrcout[i].name;
        objc.value=arrcout[i].value;
        Data.eleoption.series[1].data.push(objc)
      });
      let optionc = Data.eleoption;
      myChartc.setOption(optionc);
    }
  });
  /* 页面进入时重新绘图-CDN评估*/
  let myChartd = echarts.init(document.getElementById('cndev'));
  let optiond = Data.cdnoption;
  myChartd.setOption(optiond);
  /* 页面进入时重新绘图-世界地图*/
  let myChartf = echarts.init(document.getElementById('word'));
  let optionf = Data.wordoption;
  myChartf.setOption(optionf);
  myChartf.on('click', function (params) {
    let mapbak = document.getElementsByClassName('back')[0];
    mapbak.style.display = 'inline-block';
    if (params.name == "China") {
      myChartf.setOption({
        series: [{
          type: 'map',
          map: params.name.toLowerCase()
        }]
      });
    }
  });
  /* 页面进入时重新绘图-运营商首屏时间统计*/
  let myChartg = echarts.init(document.getElementById('operator'));
  let optiong = Data.Operatorsoption;
  myChartg.setOption(optiong);
  /* 页面进入时重新绘图-运营商首屏时间最慢*/
  let myCharth = echarts.init(document.getElementById('operatorslow'));
  let urlh = '/Data/Performance/Monitor';
  let paramsh = {
    task_id:1,
    start_time: "2017-01-01",
    end_time: "2017-04-20",
    location_code:100
  };
  let promiseh = Data.ajaxget(urlh,paramsh);
  promiseh.then(function (info) {
    if(info.code===10010){
      Data.logout();
    }else{
      let arrh=info.data;
      let datacolor = [];
      let textstyle =[];
      Data.operatorslowoption.yAxis.data.forEach(function (val) {
        textstyle.unshift(val.textStyle)
      });
      Data.operatorslowoption.series[0].data.forEach(function (val) {
        datacolor.unshift(val.itemStyle)
      });
      Data.operatorslowoption.yAxis.data=[];
      Data.operatorslowoption.series[0].data=[];
      arrh.forEach(function (val,i) {
        let objh= {};
        objh.itemStyle=datacolor[i];
        objh.value=val.first_view_time;
        Data.operatorslowoption.series[0].data.unshift(objh)
      });
      arrh.forEach(function (val,i) {
        let objh= {};
        objh.textStyle=textstyle[i];
        objh.value=val.monitor_name;
        Data.operatorslowoption.yAxis.data.unshift(objh)
      });
      let optionh = Data.operatorslowoption;
      myCharth.setOption(optionh);
    }
  });
}]).controller('yysCtl', ['$scope', '$rootScope', function ($scope, $rootScope) {
  /* 运营商控制器*/
  $rootScope.key = 2;
}]).controller('xnCtl', ['$scope', '$rootScope', function ($scope, $rootScope) {
  /* 性能控制器*/
  $rootScope.key = 3;
}]).controller('ysCtl', ['$scope', '$rootScope', function ($scope, $rootScope) {
  /* 元素控制器*/
  $rootScope.key = 4;
}]).controller('kyxCtl', ['$scope', '$rootScope', function ($scope, $rootScope) {
  /* 可用性控制器*/
  $rootScope.key = 5;
}]).controller('dbCtl', ['$scope', '$rootScope', function ($scope, $rootScope) {
  /* 对比控制器*/
  $rootScope.key = 6;
}]).controller('rwglCtl', ['$scope', '$rootScope', function ($scope, $rootScope) {
 /* 任务管理*/
}]).controller('ksjcCtl', ['$scope', '$rootScope', function ($scope, $rootScope) {
  /* 快速检测*/
}]).controller('gjglCtl', ['$scope', '$rootScope', function ($scope, $rootScope) {
  /* 告警管理*/
}]);
/* DataShowE数据显示*/


