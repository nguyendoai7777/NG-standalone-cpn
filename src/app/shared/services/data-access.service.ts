import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { injectAppConfig } from '@config/config.di';

@Injectable({ providedIn: 'root' })
export class DataAccessService {
  private readonly httpClient = inject(HttpClient);
  private readonly appConfig = injectAppConfig();
}
