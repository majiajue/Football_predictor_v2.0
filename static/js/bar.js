		document.addEventListener("DOMContentLoaded", function() {
			// Column chart
			var options = {
				chart: {
					height: 350,
					type: "bar",
					toolbar: false
				},
				plotOptions: {
					bar: {
						horizontal: true,
						endingShape: "rounded",
						columnWidth: "75%",
					},
				},
				dataLabels: {
					enabled: true
				},
				legend: {
                position: 'top'
                },
				stroke: {
					show: true,
					width: 2,
					colors: ["transparent"]
				},
				series: [{
					name: "Total goals",
					data: [total_goals_final]
				}, {
					name: "Home team goals",
					data: [home_goals_final]
				}, {
					name: "Away team goals",
					data: [away_goals_final]
				}],
				xaxis: {
					categories: [""],
				},
				yaxis: {
					title: {
						text: "Goals"
					}
				},
				fill: {
					opacity: 1
				},
				tooltip: {
					y: {
						formatter: function(val) {
							return val + " goals"
						}
					}
				}
			}
			var chart = new ApexCharts(
				document.querySelector("#apexcharts-column"),
				options
			);
			chart.render();
		});
