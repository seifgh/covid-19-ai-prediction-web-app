'use strict';

(async function(){
	const chartScatterCanvas = document.getElementById('chart-1');

	let response;
	try{
		response =  await axios.get('http://localhost:8000/predictions')
	}catch( err ){
		console.log(err)
	}

	const predictionData = response.data.points;
	const scatterChart = new Chart(

		chartScatterCanvas,
		{
			type: 'scatter',
			data: {
			  datasets: [{
			    label: 'Infections',
			    borderColor: "#80b6f4",
	            pointBorderColor: "rgb(128, 182, 244)",
	            pointBackgroundColor: "rgb(128, 182, 244)",
	            fill: true,
				backgroundColor: "rgba(128, 182, 244, 0.5)",
			    data: predictionData,
			  }]
			},
			options: {
			  responsive: true,
			  scales: {
	            xAxes: [{
	                gridLines: {
	                    zeroLineColor: "transparent"
					},
	                ticks: {
	                	autoSkip: false,
	                	stepSize: 1,
	        			min:0,
	        			max: 95,
	                    padding: 20,
	                    fontSize: 16,
	                    fontColor: "rgba(0,0,0,0.5)",
	                    fontStyle: "bold",
	                    callback: function(value, index, values) {

	                    	console.log(value);
	           				switch( value ){
	           					case 3: return 'Mars';
	           					case 27: return 'April';
	           					case 58: return  'May';
	           					case 88: return 'June';
	           					default: return null
	           				}					         	
	           			
	                    }
	                }
	            }],
	            yAxes: [{
	                ticks: {
	                    fontColor: "rgba(0,0,0,0.5)",
	                    fontStyle: "bold",
	                    beginAtZero: true,
	                    // maxTicksLimit: 5,
	                    padding: 20
	                },
	                gridLines: {
	                    padding: 20,
	                    zeroLineColor: "transparent"

	                }
				}],
			  }
			}
	   }
	)


	// const chartBarCanvas = document.getElementById('chart-2');


	// const INFECTEDS = [  170, 300, 800, 1500 ];
	// const MONTHS = [ "Mars", "April", "May", "Jun"   ];



	// const myBarChart = new Chart(chartBarCanvas, {
	//     type: 'bar',
	//     data: {

	//     	labels: MONTHS,
	//     	datasets: [{
	// 		     label: 'Infections',
	// 			 backgroundColor: [
	// 		        'rgba(255, 99, 132, 0.2)',
	// 		        'rgba(54, 162, 235, 0.2)',
	// 		        'rgba(255, 206, 86, 0.2)',
	// 		        'rgba(75, 192, 192, 0.2)',
	// 		        // 'rgba(153, 102, 255, 0.2)',
	// 		        // 'rgba(255, 159, 64, 0.2)',
	// 		        // 'rgba(255, 99, 132, 0.2)',
	// 		        // 'rgba(54, 162, 235, 0.2)',
	// 		        // 'rgba(255, 206, 86, 0.2)',
	// 		        // 'rgba(75, 192, 192, 0.2)',
	// 		        // 'rgba(153, 102, 255, 0.2)',
	// 		        // 'rgba(255, 159, 64, 0.2)'
	// 		      ],
	// 		      borderColor: [
	// 		        'rgba(255,99,132,1)',
	// 		        'rgba(54, 162, 235, 1)',
	// 		        'rgba(255, 206, 86, 1)',
	// 		        'rgba(75, 192, 192, 1)',
	// 		        // 'rgba(153, 102, 255, 1)',
	// 		        // 'rgba(255, 159, 64, 1)',
	// 		        // 'rgba(255,99,132,1)',
	// 		        // 'rgba(54, 162, 235, 1)',
	// 		        // 'rgba(255, 206, 86, 1)',
	// 		        // 'rgba(75, 192, 192, 1)',
	// 		        // 'rgba(153, 102, 255, 1)',
	// 		        // 'rgba(255, 159, 64, 1)'
	// 		      ],
	// 		     data: INFECTEDS,
	// 		  }]
	//     },
	//     options: {
	// 		  responsive: true,
	// 		  scales: {
	            
	// 		  }
	// 		}
	// });
})();