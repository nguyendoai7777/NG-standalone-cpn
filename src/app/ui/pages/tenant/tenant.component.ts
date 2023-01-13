import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { injectAppConfig } from '@config/config.di';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'tenant',
  template: `
    <h1>Tenant works</h1>
    <b>{{ appConfig.baseUrl }}</b>
  `,
  styles: [],
})
export class TenantComponent {
  appConfig = injectAppConfig();
}
