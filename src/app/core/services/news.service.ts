import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseTopHeadLines } from '../models/news.interface';
import { Observable } from 'rxjs';
import { environment as ENV } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private http: HttpClient) {}

  getAllTopHeadLines(): Observable<ResponseTopHeadLines> {
    return this.http.get<ResponseTopHeadLines>(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=3828dadf0aee4bad9681a336fa38b6d0`
    );
  }

  getAllTopHeadLinesToCategory() {
     return this.http.get(`https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=3828dadf0aee4bad9681a336fa38b6d0`)
  }
}
