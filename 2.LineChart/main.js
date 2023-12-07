const ctx = document.getElementById("myChart").getContext('2d');

const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
];

const data = {
  labels: labels,
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 40],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
  }]
};

  const config = {
    type: 'line',
    data: data,
  };


const myChart = new Chart(ctx , config);