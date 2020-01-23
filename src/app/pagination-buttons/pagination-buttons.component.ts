import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-pagination-buttons',
  templateUrl: './pagination-buttons.component.html',
  styleUrls: ['./pagination-buttons.component.scss']
})
export class PaginationButtonsComponent implements OnInit, OnChanges {
  @Output() pageChanged = new EventEmitter<number>();
  @Input() totalCount: number;
  @Input() itemOffset: number;
  @Input() itemCount: number;
  public pagesAmount: number;
  public availableButtonsCount = [];
  public firstPage = 1;
  public pageCountDueToOffset = 0;
  public activePageNumber = 1;

  constructor(private commonService: CommonService) { }

  ngOnInit() {
    do {
      this.availableButtonsCount
        .push(this.availableButtonsCount.length === 0 ? 1 : this.availableButtonsCount.length + 1);
    } while (this.availableButtonsCount.length < 10);
  }

  ngOnChanges() {
    this.pagesAmount = this.commonService.countMaxValuePaginationPages(this.totalCount, this.itemCount);
    this.pageCountDueToOffset = this.commonService
    .countAvailablePaginationPages(this.itemOffset,
      this.itemCount,
      this.availableButtonsCount.length);
  }

  goToPage(pageNumber) {
    this.activePageNumber = pageNumber;
    this.pageChanged.emit(pageNumber);
    console.log('this.activePageNumber ', this.activePageNumber);
  }

}
