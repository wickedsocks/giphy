import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  countMaxValuePaginationPages(totalItemCount, currentItemCount) {
    return Math.floor(totalItemCount / currentItemCount);
  }

  countAvailablePaginationPages(offset, currentItemCount, paginationButtonsAmount) {
    const halfPaginationButtonsAmount = paginationButtonsAmount / 2;
    const middlePageNumber = Math.floor((offset / currentItemCount) - halfPaginationButtonsAmount);
    return middlePageNumber <= 0 ? 0 : middlePageNumber;
  }

}
