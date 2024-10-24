import { Component, OnInit } from '@angular/core';
import ApexCharts from 'apexcharts';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css',
})
export class AdminDashboardComponent implements OnInit {
  ngOnInit(): void {
    this.optionsFirtsChart();
    this.optionsSecondChart();
    this.optionsThirdChart();
    this.optionsFourthChart();
  }

  optionsFirtsChart() {
    const options = {
      xaxis: {
        show: true,
        categories: ['2015', '2016', '2017', '2018', '2019', '2020', '2021'],
        labels: {
          show: true,
          style: {
            fontFamily: 'Inter, sans-serif',
            cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400',
          },
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        show: true,
        labels: {
          show: true,
          style: {
            fontFamily: 'Inter, sans-serif',
            cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400',
          },
        },
      },
      series: [
        {
          name: 'Adultos Mayores (65+)',
          data: [10.5, 11.0, 11.6, 12.3, 13.0, 13.8, 14.6], // Millones de personas
          color: '#1A56DB',
        },
      ],
      chart: {
        sparkline: {
          enabled: false,
        },
        height: '100%',
        width: '100%',
        type: 'area',
        fontFamily: 'Inter, sans-serif',
        dropShadow: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      tooltip: {
        enabled: true,
        x: {
          show: false,
        },
      },
      fill: {
        type: 'gradient',
        gradient: {
          opacityFrom: 0.55,
          opacityTo: 0,
          shade: '#1C64F2',
          gradientToColors: ['#1C64F2'],
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 6,
      },
      legend: {
        show: false,
      },
      grid: {
        show: false,
      },
    };

    const chartElement = document.getElementById('labels-chart');
    if (chartElement && typeof ApexCharts !== 'undefined') {
      const chart = new ApexCharts(chartElement, options);
      chart.render();
    }
  }

  optionsSecondChart() {
    const options = {
      series: [
        {
          name: 'Más barato',
          color: '#31C48D',
          data: [700, 750, 720, 740, 710, 780],
        },
        {
          name: 'Más Caro',
          data: [900, 920, 930, 980, 920, 1500],
          color: '#F05252',
        },
      ],
      chart: {
        sparkline: {
          enabled: false,
        },
        type: 'bar',
        width: '100%',
        height: 400,
        toolbar: {
          show: false,
        },
      },
      fill: {
        opacity: 1,
      },
      plotOptions: {
        bar: {
          horizontal: true,
          columnWidth: '100%',
          borderRadiusApplication: 'end',
          borderRadius: 6,
          dataLabels: {
            position: 'top',
          },
        },
      },
      legend: {
        show: true,
        position: 'bottom',
      },
      dataLabels: {
        enabled: false,
      },
      tooltip: {
        shared: true,
        intersect: false,
      },
      xaxis: {
        labels: {
          show: true,
          style: {
            fontFamily: 'Inter, sans-serif',
            cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400',
          },
        },
        categories: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          show: true,
          style: {
            fontFamily: 'Inter, sans-serif',
            cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400',
          },
        },
      },
      grid: {
        show: true,
        strokeDashArray: 4,
        padding: {
          left: 2,
          right: 2,
          top: -20,
        },
      },
    };

    const chartElement = document.getElementById('bar-chart');
    if (chartElement && typeof ApexCharts !== 'undefined') {
      const chart = new ApexCharts(chartElement, options);
      chart.render();
    }
  }

  optionsThirdChart() {
    const options = {
      series: [90, 2, 10],
      colors: ['#1C64F2', '#16BDCA', '#FDBA8C'],
      chart: {
        height: 380,
        width: '100%',
        type: 'radialBar',
        sparkline: {
          enabled: true,
        },
      },
      plotOptions: {
        radialBar: {
          track: {
            background: '#E5E7EB',
          },
          dataLabels: {
            show: false,
          },
          hollow: {
            margin: 0,
            size: '32%',
          },
        },
      },
      grid: {
        show: false,
        strokeDashArray: 4,
        padding: {
          left: 2,
          right: 2,
          top: -23,
          bottom: -20,
        },
      },
      labels: ['Hechos', 'En progreso', 'Cancelados'],
      legend: {
        show: true,
        position: 'bottom',
        fontFamily: 'Inter, sans-serif',
      },
      tooltip: {
        enabled: true,
        x: {
          show: false,
        },
      },
      yaxis: {
        show: false,
        labels: {},
      },
    };

    const chartElement = document.getElementById('radial-chart');
    if (chartElement && typeof ApexCharts !== 'undefined') {
      const chart = new ApexCharts(chartElement, options);
      chart.render();
    }
  }
  optionsFourthChart() {
    const options = {
      chart: {
        height: '100%',
        maxWidth: '100%',
        type: 'area',
        fontFamily: 'Inter, sans-serif',
        dropShadow: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      tooltip: {
        enabled: true,
        x: {
          show: false,
        },
      },
      fill: {
        type: 'gradient',
        gradient: {
          opacityFrom: 0.55,
          opacityTo: 0,
          shade: '#1C64F2',
          gradientToColors: ['#1C64F2'],
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 6,
      },
      grid: {
        show: false,
        strokeDashArray: 4,
        padding: {
          left: 2,
          right: 2,
          top: 0,
        },
      },
      series: [
        {
          name: 'New users',
          data: [1, 4, 6],
          color: '#1A56DB',
        },
      ],
      xaxis: {
        categories: [
          '01 February',
          '02 February',
          '03 February',
          '04 February',
          '05 February',
          '06 February',
          '07 February',
        ],
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        show: false,
      },
    };

    const chartElement = document.getElementById('area-chart');
    if (chartElement && typeof ApexCharts !== 'undefined') {
      const chart = new ApexCharts(chartElement, options);
      chart.render();
    }
  }
}
