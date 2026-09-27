import { Component, signal } from '@angular/core';
import { Sidebar } from '../../shared/components/sidebar/sidebar';
import { Topbar } from '../../shared/components/topbar/topbar';
import { Map } from '../map/map';
import { Analysis } from '../analysis/analysis';
import { Insights } from '../insights/insights';
import { Api } from '../../core/services/api';
import { AnalysisResult } from '../../core/models/analysis-result.model';

@Component({
  selector: 'app-workspace',
  imports: [Sidebar, Topbar, Map, Analysis, Insights],
  templateUrl: './workspace.html',
  styleUrl: './workspace.css'
})
export class Workspace {
  queryText = signal('');
  result = signal<AnalysisResult | null>(null);
  isAnalyzing = signal(false);
  analysisStep = signal(0);
  progress = signal(0);

  suggestedQuestions = [
    'Find underserved areas',
    'Show nearby facilities',
    'Compare accessibility',
    'Identify high-need zones'
  ];

  private stepTimer?: ReturnType<typeof setInterval>;

  constructor(private api: Api) {}

  onAnalyze() {
    if (!this.queryText().trim() || this.isAnalyzing()) return;

    this.isAnalyzing.set(true);
    this.result.set(null);
    this.analysisStep.set(0);
    this.progress.set(10);

    this.stepTimer = setInterval(() => {
      this.analysisStep.update((s) => Math.min(s + 1, 3));
      this.progress.update((p) => Math.min(p + 30, 95));
    }, 500);

    this.api.analyze({ query: this.queryText(), location: 'demo-area' }).subscribe({
      next: (res) => {
        clearInterval(this.stepTimer);
        this.progress.set(100);
        setTimeout(() => {
          this.result.set(res);
          this.isAnalyzing.set(false);
        }, 200);
      },
      error: (err) => {
        clearInterval(this.stepTimer);
        console.error('Analysis failed:', err);
        this.isAnalyzing.set(false);
      }
    });
  }

  setQuery(text: string) {
    this.queryText.set(text);
  }
}