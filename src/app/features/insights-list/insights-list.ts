import { Component } from '@angular/core';
import { Sidebar } from '../../shared/components/sidebar/sidebar';
import { Topbar } from '../../shared/components/topbar/topbar';
import { MOCK_INSIGHTS, InsightSummary } from '../../core/services/mock-data';

@Component({
  selector: 'app-insights-list',
  imports: [Sidebar, Topbar],
  templateUrl: './insights-list.html',
  styleUrl: './insights-list.css'
})
export class InsightsList {
  insights: InsightSummary[] = MOCK_INSIGHTS;
}