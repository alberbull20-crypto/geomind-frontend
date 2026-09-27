import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface NavItem {
  label: string;
  icon: string;
  path: string;
}

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {
  navItems: NavItem[] = [
    { label: 'Workspace', icon: '🗂️', path: '/workspace' },
    { label: 'Analyze', icon: '📈', path: '/analyze' },
    { label: 'Data', icon: '🗄️', path: '/data' },
    { label: 'Insights', icon: '💡', path: '/insights' },
    { label: 'History', icon: '🕒', path: '/history' },
  ];
}