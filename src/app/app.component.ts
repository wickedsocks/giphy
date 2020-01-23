import { Component, OnInit } from '@angular/core';
import { GiphyService } from './services/giphy.service';
import { IGiphySearchDataItem, ISearchResponse } from './interfaces/common-interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public trendingGifs: IGiphySearchDataItem[];
  public itemCountDefault = 9;
  public totalCount: number;
  public itemOffset: number;
  public defaultQuery = 'trends';
  public localQuery: string;

  constructor(private giphyService: GiphyService) {}

  ngOnInit() {
    this.getGiphyData(this.itemCountDefault, this.defaultQuery);
  }

  pageChanged(pageNumber) {
    const offset = this.itemCountDefault * pageNumber;
    this.getGiphyData(this.itemCountDefault, this.defaultQuery, offset);
  }

  getGiphyData(limit, query, offset?) {
    let reassignedQuery = query;
    if (query === '') {
      reassignedQuery = this.defaultQuery;
    }
    this.giphyService.searchForGifs(limit, reassignedQuery, offset).subscribe((result: ISearchResponse) => {
      this.trendingGifs = result.data;
      this.totalCount = result.pagination.total_count;
      this.itemOffset = result.pagination.offset;
    });
  }

  searchQueryUpdated(query) {
    const trimmedQuery = query.trim();
    this.localQuery = trimmedQuery === '' ? this.defaultQuery : trimmedQuery;
    this.getGiphyData(this.itemCountDefault, this.localQuery, this.itemOffset);
  }
}
