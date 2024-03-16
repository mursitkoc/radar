// Get the canvas element
const ctx = document.getElementById('myChart').getContext('2d');
ctx.canvas.style.backgroundColor = 'black';
// Create the chart data


const data = {
  datasets: [{
    label: 'kuzey tarafı',
    data: [{
      x: -10,
      y: 0,
      r: 10
    }, {
      x: 0,
      y: 20,
      r: 5
    }, {
      x: 10,
      y: -10,
      r: 15
    }, {
      x: -5,
      y: -5,
      r: 100
    }, {
      x: 100,
      y: 0,
      r: 100
    }],
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgba(255, 99, 132, 1)',
    borderWidth: 1
  },
  {
    label:'mihenk',
    data:[{x:0,y:0,r:0}],
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgba(255, 99, 132, 1)',
    borderWidth: 9
  }
]
};

// Create the chart
const myChart = new Chart(ctx, {
  type: 'scatter',
  data: data,
  options: {
    scales: {
      x: {
        grid: {
          color: 'rgba(0, 230, 0, 0.4)'
        },
        beginAtZero: true,
        suggestedMin: -100,
        suggestedMax: 100,
        position:'center'
      },
      y: {
        grid: {
          color: 'rgba(0, 230, 0, 0.4)'
        },
        beginAtZero: true,
       suggestedMin: -100,
        suggestedMax: 100,
        position:'center'
      }
    },
    plugins: {
      title: {
        display: false,
        text: 'Axis Center Positioning'
      },
      defaults: {
        color: 'lightGreen'
      },
 
    }
    // plugins: {
    //   datalabels: {
    //     formatter: (value, context) => {
    //       const x = context.chart.scales.x.getValueForPixel(context.raw.x);
    //       const y = context.chart.scales.y.getValueForPixel(context.raw.y);
    //       const quadrant = Math.round((Math.atan2(y, x) / Math.PI) * 2) + 1;
    //       return `Q${quadrant}: ${value}`;
    //     },
    //     color: 'black'
    //   }
    // }
  }
});

// myChart.options.scales.x.position = 'center';
// myChart.options.scales.y.position = 'center';
// myChart.update();