import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { IonSegment } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements AfterViewInit {
  @ViewChild(IonSegment) segment: IonSegment;

  categories: string[] = [
    'business',
    'entertainment',
    'general',
    'health',
    'science',
    'sports',
    'technology',
  ];

  constructor() {}

  ngAfterViewInit(): void {
    this.segment.value = this.categories[0];
  }
}
