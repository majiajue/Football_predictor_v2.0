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
			series: [prob_draw_game, prob_home_win, prob_away_win],
			labels: ["Draw game", "Home win", "Away win"],
			}
	var chart = new ApexCharts(
		document.querySelector("#apexcharts-pie"),
			options
			);
			chart.render();
		});
