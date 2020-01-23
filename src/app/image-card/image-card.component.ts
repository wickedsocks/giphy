import { Component, OnInit, Input } from '@angular/core';
import { IGiphySearchDataItem } from '../interfaces/common-interfaces';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.scss']
})
export class ImageCardComponent implements OnInit {
  @Input() image: IGiphySearchDataItem;

  constructor() { }

  ngOnInit() {}

}
