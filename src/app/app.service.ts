import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) { }

  getAllTopics(): Observable<any[]> {
    return this.http.get<any[]>('topics');
  }

  getCountTopics(): Observable<any[]> {
    return this.http.get<any[]>('topics/count');
  }

  getTopicsBannedCount(): Observable<any[]> {
    return this.http.get<any[]>('topics/bannedCount');
  }

  getTextBannedCount(): Observable<any[]> {
    return this.http.get<any[]>('texts/filteredCount');
  }

  getCountyByPlayer(): Observable<any[]> {
    return this.http.get<any[]>('texts/countByPlayerTop');
  }
}
