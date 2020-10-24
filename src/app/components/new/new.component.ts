import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../../core/models/news.interface';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
})
export class NewComponent implements OnInit {

  @Input() index: number;
  @Input() new: Article;

  constructor() {}

  ngOnInit() {}
}
