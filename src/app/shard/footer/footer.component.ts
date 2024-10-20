import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="app-footer text-center">
      <p>&copy; 2024 User Management System. All rights reserved.</p>
    </footer>
  `,
  styles: [`
    .app-footer {
      margin-top: 20px;
      padding: 10px 0;
      background-color: #f8f9fa;
    }
  `]
})
export class FooterComponent {}
