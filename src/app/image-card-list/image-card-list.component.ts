import { Component, OnInit, Input } from '@angular/core';
import { IGiphySearchDataItem } from '../interfaces/common-interfaces';

@Component({
  selector: 'app-image-card-list',
  templateUrl: './image-card-list.component.html',
  styleUrls: ['./image-card-list.component.scss']
})
export class ImageCardListComponent implements OnInit {
  @Input() trendingGifs: IGiphySearchDataItem[];

  constructor() { }

  ngOnInit() { }

}
