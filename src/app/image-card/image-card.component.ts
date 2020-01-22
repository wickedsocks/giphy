import { Component, OnInit, Input } from '@angular/core';
import { IGiphyTrendingDataItem } from '../interfaces/common-interfaces';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.scss']
})
export class ImageCardComponent implements OnInit {
  @Input() image: IGiphyTrendingDataItem;

  constructor() { }

  ngOnInit() {}

}
