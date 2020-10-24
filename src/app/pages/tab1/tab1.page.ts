import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../core/services/news.service';
import { Article } from '../../core/models/news.interface';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {

  news: Article[] = [];

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsService.getAllTopHeadLines().subscribe(news => {
      this.news.push(...news.articles);
    });
  }
}
