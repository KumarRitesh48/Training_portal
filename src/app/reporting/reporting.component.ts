// reporting.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChartOptions, ChartType, ChartDataset } from 'chart.js';

import { ReportingService } from '../reporting.service';

@Component({
  selector: 'app-reporting',
  templateUrl: './reporting.component.html',
  styleUrls: ['./reporting.component.css']
})
export class ReportingComponent implements OnInit {
  project: any;
  graphData: any;
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartData: ChartDataset[] = [];

  constructor(
    private route: ActivatedRoute,
    private reportingService: ReportingService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.project = params.get('project');
      this.fetchGraphData();
    });
  }

  fetchGraphData() {
    this.reportingService.getProgressByProject(this.project)
      .subscribe((data: any) => {
        this.graphData = data;
        this.prepareChartData();
      });
  }

  prepareChartData() {
    // Assuming graphData is an array of progress values
    this.barChartData = [{ data: this.graphData, label: 'Progress', xAxisID: 'progressAxis' }];
  }
}
