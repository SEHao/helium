import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { CoreModule } from '../core.module';

@Injectable({
  providedIn: CoreModule,
})
export class SenseCapService {
  private url = `${environment.senseCapUrl}/api/openapi/device/view_device`;

  constructor(private http: HttpClient) {}

  findOne(apiKey: string, sn: string): Observable<any> {
    const params = { api_key: apiKey, sn };
    return this.http.get<any>('/api/openapi/device/view_device', { params });
  }
}
