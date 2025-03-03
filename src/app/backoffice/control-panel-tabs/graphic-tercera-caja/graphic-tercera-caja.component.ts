import {Component, OnInit} from '@angular/core';
import { Chart,Filler,ChartConfiguration, ChartDataset, ChartType} from 'chart.js';
import {BaseChartDirective} from 'ng2-charts';

@Component({
  selector: 'app-graphic-tercera-caja',
  imports: [
    BaseChartDirective
  ],
  standalone: true,
  templateUrl: './graphic-tercera-caja.component.html',
  styleUrl: './graphic-tercera-caja.component.scss'
})
export class GraphicTerceraCajaComponent implements OnInit {


  constructor() { 
    Chart.register(Filler); 
  }

  ngOnInit(): void {
    this.setChartData();
  }

  public lineChartOptions: ChartConfiguration['options'] = {
    responsive: true, // Línea obligatoria
    maintainAspectRatio: false, // Proporción del gráfico
    plugins: {
      legend: { // campo opcional
        display: true,
        position: 'bottom'
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "",
          font: { size: 12, weight: "bolder" }
        }
      },
      y: {
        title: {
          display: true,
          text: "",
          font: { size: 12, weight: "bolder" }
        },
        ticks: {
          stepSize: 10,
        }
      }
    }
  }

  public lineChartLabels: string[] = []
  public lineChartData: ChartDataset<'line'>[] = [
    {
      data: [],
      label: "",
      backgroundColor: [],
      hoverBackgroundColor: [],
    }
  ];

  public lineChartType: ChartType = 'line';


  private setChartData(): void {
    const data = {
      labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
      values1: [0, 90, 10, 50, 20, 75, 10, 12, 100, 80, 10, 0],
      values2: [0, 60, 40, 85, 15, 40, 80, 90, 10, 50, 20, 10],
      values3: [0, 10, 80, 50, 95, 10, 10, 30, 50, 60, 75, 10]
    }

    this.lineChartLabels = data.labels;
    this.lineChartData = [
      {
        data: data.values1,
        label: "Iphone",
        borderColor: "rgb(1, 88, 29)",
        pointBackgroundColor: "rgb(7, 155, 120)",
        pointBorderColor: "#fff",
        fill: false,
      },
      {
        data: data.values2,
        label: "Samsung",
        borderColor: "rgb(9, 2, 103)",
        pointBackgroundColor: "rgb(9, 198, 251)",
        pointBorderColor: "#fff",
        fill: false,
      },
      {
        data: data.values3,
        label: "Xiaomi",
        borderColor: "rgba(213, 255, 99, 0.98)",
        pointBackgroundColor: "rgb(161, 255, 99)",
        pointBorderColor: "#fff",
        fill: false,
      }
    ];
  }



  }
