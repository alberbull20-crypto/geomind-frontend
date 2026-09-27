import { Routes } from '@angular/router';
import { Workspace } from './features/workspace/workspace';
import { History } from './features/history/history';
import { Data } from './features/data/data';
import { InsightsList } from './features/insights-list/insights-list';
import { ComingSoon } from './shared/components/coming-soon/coming-soon';

export const routes: Routes = [
  { path: '', component: Workspace },
  { path: 'analyze', redirectTo: '' },
  { path: 'data', component: Data },
  { path: 'insights', component: InsightsList },
  { path: 'history', component: History },
  { path: 'settings', component: ComingSoon, data: { title: 'Settings' } },
  { path: '**', redirectTo: '' }
];