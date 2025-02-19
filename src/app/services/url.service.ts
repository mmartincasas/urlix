import { inject, Injectable } from '@angular/core';
import { Url } from '../interfaces/url';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UrlService {

  private http = inject(HttpClient);

  createShortUrl(originalUrl: string): Observable<Url>{

    const body = { original_url: originalUrl };

    return this.http.post<Url>('/api/shorten', body);
  }

}
