		// 路径配置
		require.config({
			paths: {
				echarts: 'http://echarts.baidu.com/build/dist'
			}
		});

		// 使用
		require(
			[
				'echarts',
				'echarts/chart/bar' // 使用柱状图就加载bar模块，按需加载
			],
			function(ec) {
				// 基于准备好的dom，初始化echarts图表
				var myChart = ec.init(document.getElementById('main'));

				var option = {
					textStyle: {
						color: '#333'
					},
					grid: {
						borderWidth: 0,
					},
					xAxis: [{
						splitLine: {
							show: false,
						},
						axisLine: {
							show: false,
						},
						axisTick: {
							show: false,

						},
						type: 'category',
						data: ['Sketch', 'AI', 'PS', 'ID', 'Axure', 'HTML5','AE']
					}],
					yAxis: [{
						show: false,
						type: 'value',
						boundaryGap: [0, 0.1]
					}],
					series: [

						{
							name: 'Forecast',
							type: 'bar',
							stack: 'sum',

							barCategoryGap: '10%',
							itemStyle: {
								normal: {
									color: function(params) {
										// build a color map as your need.
										var colorList = [
											'#c7778d','#cd7672','#8092b6','#c7778d','#61799b','#cd7672','#8092b6',
										];
										return colorList[params.dataIndex]
									},
									label: {
										show: true,
										position: 'top',
										textStyle: {
											color: '#666',
										}
									}
								}
							},
							data: [90, 85, 90, 80, 70, 75,60]
						}
					]
				};

				// 为echarts对象加载数据 
				myChart.setOption(option);
			}
		);
