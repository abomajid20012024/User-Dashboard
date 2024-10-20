import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header class="app-header">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">User Management</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav flex-wrap"> <!-- Added flex-wrap class -->
              <li class="nav-item">
                <a class="nav-link" routerLink="/home" routerLinkActive="active">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" routerLink="/users" routerLinkActive="active">Manage Users</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" routerLink="/settings" routerLinkActive="active">Settings</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  `,
  styles: [`
    .app-header {
      margin-bottom: 20px;
    }
    .navbar-nav {
      width: 100%;
      flex-wrap: wrap; 
    }
    .nav-item {
      margin-bottom: 10px; 
    }
    .nav-link {
      white-space: nowrap; 
    }
    @media (min-width: 768px) {
      .nav-item {
        margin-left: 20px; 
      }
    }
  `]
})
export class HeaderComponent {}
