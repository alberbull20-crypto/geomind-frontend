import { Component } from '@angular/core';
import { Sidebar } from '../../shared/components/sidebar/sidebar';
import { Topbar } from '../../shared/components/topbar/topbar';
import { MOCK_DATASETS, Dataset } from '../../core/services/mock-data';

@Component({
  selector: 'app-data',
  imports: [Sidebar, Topbar],
  templateUrl: './data.html',
  styleUrl: './data.css'
})
export class Data {
  datasets: Dataset[] = MOCK_DATASETS;
}