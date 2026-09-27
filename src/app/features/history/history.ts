import { Component } from '@angular/core';
import { Sidebar } from '../../shared/components/sidebar/sidebar';
import { Topbar } from '../../shared/components/topbar/topbar';
import { MOCK_HISTORY, HistoryEntry } from '../../core/services/mock-data';

@Component({
  selector: 'app-history',
  imports: [Sidebar, Topbar],
  templateUrl: './history.html',
  styleUrl: './history.css'
})
export class History {
  entries: HistoryEntry[] = MOCK_HISTORY;
}