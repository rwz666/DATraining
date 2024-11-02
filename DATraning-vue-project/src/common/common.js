import * as echarts from 'echarts';


/**
 * 普通数据集图表
 * @param {*} chartElement 
 * @param {*} chartConfig 
 */
export function drawDatasetChart(chartElement, chartConfig) {

  var myChart = echarts.init(chartElement, null, {
    width: 400,
    height: 300
  });
  const option = {
    title: {
      text: chartConfig.title,
      left: 'center',
      top: '90%'
    },
    legend: {},
    tooltip: {},
    dataset: {
      source: [
        ['product', '2015', '2016', '2017'],
        ['Matcha Latte', 43.3, 85.8, 93.7],
        ['Milk Tea', 83.1, 73.4, 55.1],
        ['Cheese Cocoa', 86.4, 65.2, 82.5],
        ['Walnut Brownie', 72.4, 53.9, 39.1]
      ]
    },
    xAxis: { type: 'category' },
    yAxis: {},
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
  };

  myChart.setOption(option);
}


/**
 * 绘制柱形图
 * @param {HTMLElement} chartElement - 图表容器元素
 * @param {Object} chartConfig - 图表配置
 * @param {string} chartConfig.title - 标题
 * @param {number[]} chartConfig.data - 数据
 * @param {} chartConfig.xAxisData - x轴数据
 */
export function drawColumnChart(chartElement, chartConfig) {
  const myChart = echarts.init(chartElement, null, {
    width: 400,
    height: 300
  });
  console.log(chartConfig)
  const option = {
    title: {
      text: chartConfig.title,
      left: 'center',
      top: '90%'
    },
    tooltip: {
      trigger: 'item' // 可以根据需要选择触发类型
    },
    xAxis: {
      type: 'category', // 指定 x 轴类型
      data: chartConfig.xAxisData || ['郑州', '北京', '上海']
    },
    yAxis: {
      type: 'value' // 指定 y 轴类型
    },
    series: [
      {
        name: '销量',
        type: 'bar',
        data: chartConfig.data,
        itemStyle: {
          color: '#42a5f5' // 可以自定义柱子的颜色
        }
      }
    ]
  };

  myChart.setOption(option);
}


export function drawLineChart(chartElement, chartConfig) {
  var myChart = echarts.init(chartElement, null, {
    width: 400,
    height: 300
  });
  const option = {
    title: {
      text: chartConfig.title,
      left: 'center',
      top: '90%'
    },
    tooltip: {}, // 可以添加 tooltip
    legend: {
      data: chartConfig.series.map(s => s.name) // 自动生成图例
    },
    xAxis: {
      type: 'category',
      data: chartConfig.xAxisData || ['郑州', '北京', '上海']
    },
    yAxis: {
      type: 'value'
    },
    series: chartConfig.series.map(s => ({
      name: s.name,
      data: s.data || [],
      type: 'line',
    }))
  };

  // 设置图表选项
  myChart.setOption(option);
}


export function drawPieChart(chartElement, chartConfig) {
  var myChart = echarts.init(chartElement, null, {
    width: 400,
    height: 300
  });
  const option = {
    title: {
      text: chartConfig.title,

      left: 'center',
      top: '90%'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: chartConfig.data,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };

  myChart.setOption(option);
}






export function drawSmoothedLineChart(chartElement, chartConfig) {
  var myChart = echarts.init(chartElement, null, {
    width: 400,
    height: 300
  });
  const option = {
    title: {
      text: chartConfig.title,
      left: 'center',
      top: '90%'
    },
    tooltip: {}, // 可以添加 tooltip
    legend: {
      data: chartConfig.series.map(s => s.name) // 自动生成图例
    },
    xAxis: {
      type: 'category',
      data: chartConfig.xAxisData || ['郑州', '北京', '上海']
    },
    yAxis: {
      type: 'value'
    },
    series: chartConfig.series.map(s => ({
      name: s.name,
      data: s.data || [],
      type: 'line',
      smooth: true // 平滑曲线
    }))
  };

  // 设置图表选项
  myChart.setOption(option);
}