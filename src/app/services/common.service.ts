import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  countMaxValuePaginationPages(totalItemCount, currentItemCount) {
    return Math.round(totalItemCount / currentItemCount);
  }

  countAvailablePaginationPages(offset, currentItemCount, paginationButtonsAmount) {
    const halfPaginationButtonsAmount = paginationButtonsAmount / 2;
    const middlePageNumebr = Math.round((offset / currentItemCount) - halfPaginationButtonsAmount);
    return middlePageNumebr <= 0 ? 0 : middlePageNumebr;
  }

}
