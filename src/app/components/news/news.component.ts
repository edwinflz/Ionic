import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../../core/models/news.interface';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {

  @Input() news: Article[] = [];

  constructor() {}

  ngOnInit() {}
}
