import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Sidebar } from '../sidebar/sidebar';
import { Topbar } from '../topbar/topbar';

@Component({
  selector: 'app-coming-soon',
  imports: [Sidebar, Topbar],
  templateUrl: './coming-soon.html',
  styleUrl: './coming-soon.css'
})
export class ComingSoon {
  title = '';

  constructor(private route: ActivatedRoute) {
    this.title = this.route.snapshot.data['title'] ?? 'This section';
  }
}