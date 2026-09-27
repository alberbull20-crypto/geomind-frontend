import { Component, Input } from '@angular/core';

interface AnalysisStep {
  label: string;
}

@Component({
  selector: 'app-analysis-overlay',
  imports: [],
  templateUrl: './analysis.html',
  styleUrl: './analysis.css'
})
export class Analysis {
  @Input() activeStep = 0;
  @Input() progress = 0;

  steps: AnalysisStep[] = [
    { label: 'Understanding your question' },
    { label: 'Querying geographic data' },
    { label: 'Performing spatial analysis' },
    { label: 'Generating AI insight' },
  ];

  isDone(index: number): boolean {
    return index < this.activeStep;
  }

  isActive(index: number): boolean {
    return index === this.activeStep;
  }
}