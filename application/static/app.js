
var ws = new WebSocket("ws://localhost:8765");

// Get the canvas element
const ctx = document.getElementById('myChart').getContext('2d');
ctx.canvas.style.backgroundColor = 'black';

const data2 = [];
const data = {
  datasets: [
    {
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
    label: 'mihenk',
    data: [{ x: 0, y: 0 }],
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgba(255, 99, 132, 1)',
    borderWidth: 9
  },
  {
    label: 'random',
    data: data2,
    backgroundColor: 'rgba(0, 255, 0, 0.2)',
    borderColor: 'rgba(0, 255, 0, 1)',
    borderWidth: 4
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
        position: 'center'
      },
      y: {
        grid: {
          color: 'rgba(0, 230, 0, 0.4)'
        },
        beginAtZero: true,
        suggestedMin: -100,
        suggestedMax: 100,
        position: 'center'
      }
    },
    plugins: {
      title: {
        display: false,
        text: 'Axis Center Positioning'
      },
    },
    animation: false
  }
});
function sendMessage() {
  var message = document.getElementById('message').value;
  ws.send(message);
  document.getElementById('message').value = "";
}



ws.onmessage = function (event) {
  const data2 = [];
  // Check for specific message type or criteria
  if (event) {
    // var newMessage = document.createElement('p');
    // newMessage.textContent = event.data;
    // document.getElementById('additional-messages').appendChild(newMessage);
    const jsonData = event.data;
    const data = JSON.parse(jsonData, (key, value) => {
      if (typeof value === 'string' && !Number.isNaN(Number(value))) {
        return Number(value);
      }
      return value;
    });

    
    for (let i = 0; i < data.length; i++) {
      const obj = data[i];
      const newObj = {};
      Object.entries(obj).forEach(([key, value]) => {
        if (typeof value === 'number') {
          newObj[key] = value;
        } else if (typeof value === 'string' && !Number.isNaN(Number(value))) {
          newObj[key] = Number(value);
        } else {
          newObj[key] = value;
        }
      });
      data2.push(newObj);
    }
    myChart.data.datasets[2].data = data2;
    myChart.update();
    // console.log(data2);
  } else {
    // Existing logic for handling regular messages in response-list
    // ...
  }
};


// Create the chart data

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Create an empty array to store the dictionaries
const data1 = [];

// Generate 30 dictionaries with random x and y values
for (let i = 0; i < 30; i++) {
  const x = getRandomInt(-100, 100);
  const y = getRandomInt(-100, 100);
  data1.push({ x: x, y: y }); // Object shorthand for key-value pairs with same name
}
// console.log(data1);



