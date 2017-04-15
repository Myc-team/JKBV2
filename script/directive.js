/**
 * Created by mark on 2017/4/10.
 */

/* 自定义指令*/
MyApp.directive('allgroup', function () {
  /* 全部分组插件*/
  return {
    // A 是单词 attribute 首字母，将指令当属性来用
    // E 是单词 element   首字母，将指令当标签来用
    // C 是单词 class     首字母，将指令当类来用
    // M 是单词 mark      首字母，将指令将注释来用
    restrict: 'E',
    replace: true,
    templateUrl: '/views/conmponents/allgroup/AllGroup.html',
    link: function ($scope, ele, attrs) {
      ele.on('click', function () {
      });
    }
  };
}).directive('selitem', function () {
  /* 选择任务插件*/
  return {
    // A 是单词 attribute 首字母，将指令当属性来用
    // E 是单词 element   首字母，将指令当标签来用
    // C 是单词 class     首字母，将指令当类来用
    // M 是单词 mark      首字母，将指令将注释来用
    restrict: 'E',
    replace: true,
    templateUrl: '/views/conmponents/allgroup/selectitem.html',
    link: function ($scope, ele, attrs) {
      ele.on('click', function () {
      });
    }
  };
}).directive('datetime', function () {
  /* 日期插件*/
  return {
    // A 是单词 attribute 首字母，将指令当属性来用
    // E 是单词 element   首字母，将指令当标签来用
    // C 是单词 class     首字母，将指令当类来用
    // M 是单词 mark      首字母，将指令将注释来用
    restrict: 'E',
    replace: true,
    templateUrl: '/views/conmponents/allgroup/datetime.html',
    link: function ($scope, ele, attrs) {
      ele.on('click', function () {
      });
    }
  };
}).directive('pageusability',['Data', function (Data) {
  /* 绘制页面可用性图表*/
  var myChart = echarts.init(document.getElementById('pageuse'));
  option = Data.usabilioption;
  myChart.setOption(option);
  return {
    // A 是单词 attribute 首字母，将指令当属性来用
    // E 是单词 element   首字母，将指令当标签来用
    // C 是单词 class     首字母，将指令当类来用
    // M 是单词 mark      首字母，将指令将注释来用
    restrict: 'E',
    replace: true,
    link: function ($scope, ele, attrs) {
      ele.on('click', function () {
      });
    }
  };
}]).directive('pageper',['Data', function (Data) {
  /* 绘制页面性能图表*/
  var myChart = echarts.init(document.getElementById('pageper'));
  option = Data.peroption;
  myChart.setOption(option);
  return {
    // A 是单词 attribute 首字母，将指令当属性来用
    // E 是单词 element   首字母，将指令当标签来用
    // C 是单词 class     首字母，将指令当类来用
    // M 是单词 mark      首字母，将指令将注释来用
    restrict: 'E',
    replace: true,
    link: function ($scope, ele, attrs) {
      ele.on('click', function () {
      });
    }
  };
}]).directive('eleus',['Data', function (Data) {
  /* 绘制元素可用性图表*/
  var myChart = echarts.init(document.getElementById('eleus'));
  option = Data.eleoption;
  myChart.setOption(option);
  return {
    // A 是单词 attribute 首字母，将指令当属性来用
    // E 是单词 element   首字母，将指令当标签来用
    // C 是单词 class     首字母，将指令当类来用
    // M 是单词 mark      首字母，将指令将注释来用
    restrict: 'E',
    replace: true,
    link: function ($scope, ele, attrs) {
      ele.on('click', function () {
      });
    }
  };
}]).directive('cndeva',['Data', function (Data) {
  /* 绘制CDN评估表*/
  var myChart = echarts.init(document.getElementById('cndev'));
  option = Data.cdnoption;
  myChart.setOption(option);
  return {
    // A 是单词 attribute 首字母，将指令当属性来用
    // E 是单词 element   首字母，将指令当标签来用
    // C 是单词 class     首字母，将指令当类来用
    // M 是单词 mark      首字母，将指令将注释来用
    restrict: 'E',
    replace: true,
    link: function ($scope, ele, attrs) {
      ele.on('click', function () {
      });
    }
  };
}]).directive('wordmap', function () {
  return {
    // A 是单词 attribute 首字母，将指令当属性来用
    // E 是单词 element   首字母，将指令当标签来用
    // C 是单词 class     首字母，将指令当类来用
    // M 是单词 mark      首字母，将指令将注释来用
    restrict: 'E',
    replace: true,
    link: function ($scope, ele, attrs) {
      ele.on('click', function () {
      });
    }
  };
}).directive('operators', function () {
  /* 运营商首屏时间统计*/
  return {
    // A 是单词 attribute 首字母，将指令当属性来用
    // E 是单词 element   首字母，将指令当标签来用
    // C 是单词 class     首字母，将指令当类来用
    // M 是单词 mark      首字母，将指令将注释来用
    restrict: 'E',
    replace: true,
    link: function ($scope, ele, attrs) {
      ele.on('click', function () {
      });
    }
  };
}).directive('operatorslow', function () {
  /* 首屏时间最慢*/
  return {
    // A 是单词 attribute 首字母，将指令当属性来用
    // E 是单词 element   首字母，将指令当标签来用
    // C 是单词 class     首字母，将指令当类来用
    // M 是单词 mark      首字母，将指令将注释来用
    restrict: 'E',
    replace: true,
    link: function ($scope, ele, attrs) {
      ele.on('click', function () {
      });
    }
  };
});