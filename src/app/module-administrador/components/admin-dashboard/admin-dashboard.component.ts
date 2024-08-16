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
        categories: [
          '01 Feb',
          '02 Feb',
          '03 Feb',
          '04 Feb',
          '05 Feb',
          '06 Feb',
          '07 Feb',
        ],
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
          name: 'Developer Edition',
          data: [150, 141, 145, 152, 135, 125],
          color: '#1A56DB',
        },
        {
          name: 'Designer Edition',
          data: [43, 13, 65, 12, 42, 73],
          color: '#7E3BF2',
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
          name: 'Income',
          color: '#31C48D',
          data: [1420, 1620, 1820, 1420, 1650, 2120],
        },
        {
          name: 'Expense',
          data: [788, 810, 866, 788, 1100, 1200],
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
      series: [90, 85, 70],
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
      labels: ['Done', 'In progress', 'To do'],
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
          data: [6500, 6418, 6456, 6526, 6356, 6456],
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
