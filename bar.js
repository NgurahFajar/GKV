//elemen div dengan id test, container elemen html

BAR2 = document.getElementById('barplot2');

//data pada plot untuk absis-x dan ordinat-y
var data1 = [
  {
    x: ['DKI Jakarta', 'Jawa Barat', 'Jawa Tengah', 'Jawa Timur', 'Kalimantan Timur', 'Yogyakarta', 'Banten', 'Riau', 'Bali', 'Sulawesi Selatan'],
    y: [864000, 707000, 486000, 399000, 158000, 156000, 132000, 128000, 114000, 109000],
    marker: {
      color: 'orange',
    },
    type: 'bar',
    name: 'total_case',
    showlegend: true,
  },
];

Plotly.newPlot('barplot2', data1);

var config = { responsive: true };
