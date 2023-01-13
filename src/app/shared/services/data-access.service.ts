import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { injectAppConfig } from '@config/config.di';
import { Observable } from 'rxjs';
import { PhotoPaginationProps } from '@model/photo.model';

@Injectable({ providedIn: 'root' })
export class DataAccessService {
  private readonly httpClient = inject(HttpClient);
  private readonly appConfig = injectAppConfig();

  randomPhotos({
    page = 1,
    per_page = this.appConfig.appInfo.pageSize,
  }): Observable<PhotoPaginationProps> {
    return this.httpClient.get<PhotoPaginationProps>(`${this.appConfig.baseUrl}/curated`, {
      params: { per_page, page },
    });
  }

  searchPhotos({
    query = '',
    page = 1,
    per_page = this.appConfig.appInfo.pageSize,
  }): Observable<PhotoPaginationProps> {
    return this.httpClient.get<PhotoPaginationProps>(`${this.appConfig.baseUrl}/search`, {
      params: { per_page, page, query },
    });
  }
}

export function injectDataAccessService() {
  return inject(DataAccessService);
}
