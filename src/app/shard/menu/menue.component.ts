import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  template: `
    <div class="sidebar">
      <ul>
        <li><a routerLink="/home">Home</a></li>
        <li><a routerLink="/users">Manage Users</a></li>
        <li><a routerLink="/settings">Settings</a></li>
      </ul>
    </div>
  `,
  styles: [`
    .sidebar {
      width: 100%;
      height: 100vh;
      background-color: #f8f9fa;
      padding: 15px;
      top: 0;
      left: 0;
      overflow-y: auto;
    }
    .sidebar ul {
      list-style-type: none;
      padding: 0;
    }
    .sidebar li {
      margin: 10px 0;
    }
    .sidebar a {
      text-decoration: none;
      color: #000;
      display: block;
      padding: 10px;
      transition: background-color 0.3s;
    }
    .sidebar a:hover {
      background-color: #e9ecef;
    }
  `]
})
export class MenueComponent {}
  