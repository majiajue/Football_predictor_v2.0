document.addEventListener("DOMContentLoaded", function() {
    var options = {
		chart: {
			height: 350,
			type: "donut",
				},
			legend: {
            position: 'top'
            },
			dataLabels: {
			enabled: true
			},
			series: [prob_home_win, prob_draw_game, prob_away_win],
			labels: ["Home win", "Draw game", "Away win"],
			}
	var chart = new ApexCharts(
		document.querySelector("#apexcharts-pie"),
			options
			);
			chart.render();
		});
