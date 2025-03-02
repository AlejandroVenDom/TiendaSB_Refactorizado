import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartDataset, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-graphic-cuarta-caja',
  imports: [BaseChartDirective],
  standalone: true,
  templateUrl: './graphic-cuarta-caja.component.html',
  styleUrl: './graphic-cuarta-caja.component.scss',
})
export class GraphicCuartaCajaComponent implements OnInit {
  ngOnInit(): void {
    this.setChartData();
  }

  public lineChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Meses',
          font: { size: 10, weight: 'bolder' }
        }
      },
      y:{
        title:{
          display: true,
          text: 'Ventas',
          font: { size: 10, weight: 'bolder' }
        },
        ticks:{
          stepSize: 10,
        },
      },
    },
  };

  public lineChartLabels: string[]=[];
  public lineChartData: ChartDataset<'line'>[]=[
    {
      data:[],
      label:"Progreso",
      backgroundColor:[],
      hoverBackgroundColor:[],
    }
  ];

  public lineChartType: ChartType = 'line';

  private setChartData():void{
    const data = {
      labels: ["2005","2007","2008","2009","2010","2011","2012"],
      values: [10,80,30,40,20,10,40]
    }

    this.lineChartLabels = data.labels;
    this.lineChartData = [
      {
        data: data.values,
        label: "Windows",
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgb(0, 120, 76)",
        pointBackgroundColor: "rgb(0, 0, 0)",
        pointBorderColor: "#fff",
        fill: true,
      },
    ];
  }


}
