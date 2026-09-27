import { Component, Input } from '@angular/core';
import { AnalysisResult } from '../../core/models/analysis-result.model';

@Component({
  selector: 'app-insight-panel',
  imports: [],
  templateUrl: './insights.html',
  styleUrl: './insights.css'
})
export class Insights {
  @Input({ required: true }) result!: AnalysisResult;
}