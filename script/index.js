/**
 * Created by mark on 2017/4/7.
 */

var MyApp = angular.module('App', ['ngRoute']);
/* 定义路由控制器*/
MyApp.config(['$routeProvider', '$locationProvider',  function ($routeProvider, $locationProvider) {
  $routeProvider.when('/all', {
    controller: 'allCtl',
    templateUrl: 'views/conmponents/all/all.html'
  }).when('/yys', {
    controller: 'yysCtl',
    templateUrl: 'views/conmponents/yys/yys.html'
  }).when('/xn', {
    controller: 'xnCtl',
    templateUrl: 'views/conmponents/xn/xn.html'
  }).when('/ys', {
    controller: 'ysCtl',
    templateUrl: 'views/conmponents/ys/ys.html'
  }).when('/kyx', {
    controller: 'kyxCtl',
    templateUrl: 'views/conmponents/kyx/kyx.html'
  }).when('/db', {
    controller: 'dbCtl',
    templateUrl: 'views/conmponents/db/db.html'
  }).otherwise({
    redirectTo: '/all'
  });
  $locationProvider.html5Mode({
    enabled: false,  //true 为消除URL路由前面的#号
    requireBase: false//必须配置为false，否则<base href=''>这种格式带base链接的地址才能解析
  });
}]);
/* 自定义数据服务*/
MyApp.service('Data', function () {
  return {
    key: 0,
    nav: [
      { text: '综合呈现' },
      { text: '任务管理' },
      { text: '快速检测' },
      { text: '告警管理' }],
    aside: [
      { text: '收起', link: 'javascirpt:;', icon: 'icon1' },
      { text: '概览', link: '#/all', icon: 'icon2' },
      { text: '运营商', link: '#/yys', icon: 'icon3' },
      { text: '性能', link: '#/xn', icon: 'icon4' },
      { text: '元素', link: '#/ys', icon: 'icon5' },
      { text: '可用性', link: '#/kyx', icon: 'icon6' },
      { text: '对比', link: '#/db', icon: 'icon7' }
    ]
  };
});
/* HeadNavS*/
MyApp.controller('head', ['$scope', 'Data', function ($scope, Data) {
  $scope.nav = Data.nav;
  $scope.key = Data.key;
  $scope.active = function (index) {
    $scope.key = index;
    Data.key = index;
  };
}]);
/* HeadNavE*/
/* AsideB*/
MyApp.controller('asideCtl', ['$scope', '$rootScope', 'Data', '$location', function ($scope, $rootScope, Data, $location) {
  $scope.aside = Data.aside;
  $rootScope.flag = false;
  $rootScope.changetoggle = function (index) {
    // console.log($scope.$$prevSibling.nav);
    if (index === 0) {
      $rootScope.flag = !$rootScope.flag;
    } else {
      $rootScope.flag = false;
    }
  };
}]);
/* AsideE*/
/* DataShowB*/
MyApp.directive('allgroup', function () {
  return {
    // A 是单词 attribute 首字母，将指令当属性来用
    // E 是单词 element   首字母，将指令当标签来用
    // C 是单词 class     首字母，将指令当类来用
    // M 是单词 mark      首字母，将指令将注释来用
    restrict: 'ECMA',
    replace: true,
    templateUrl: 'views/conmponents/allgroup/AllGroup.html',
    link: function ($scope, ele, attrs) {
      ele.on('click', function () {
      });
    }
  };
});
/* DataShowB*/
MyApp.controller('allCtl', ['$scope', 'Data', '$rootScope', function ($scope, Data, $rootScope) {
  $rootScope.key = 1;
}]);
MyApp.controller('yysCtl', ['$scope', '$rootScope', function ($scope, $rootScope) {
  $rootScope.key = 2;
}]);
MyApp.controller('xnCtl', ['$scope', '$rootScope', function ($scope, $rootScope) {
  $rootScope.key = 3;
}]);
MyApp.controller('ysCtl', ['$scope', '$rootScope', function ($scope, $rootScope) {
  $rootScope.key = 4;
}]);
MyApp.controller('kyxCtl', ['$scope', '$rootScope', function ($scope, $rootScope) {
  $rootScope.key = 5;
}]);
MyApp.controller('dbCtl', ['$scope', '$rootScope', function ($scope, $rootScope) {
  $rootScope.key = 6;
}]);
/* DataShowE*/

