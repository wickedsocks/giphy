import { TestBed } from '@angular/core/testing';

import { CommonService } from './common.service';

describe('CommonService', () => {
  const MockData = {
    totalItemCount: 100,
    currentItemCount: 5,
    countMaxValuePaginationPagesResult: 20,
    offset: 45,
    paginationButtonsAmount: 5,
    countAvailablePaginationPagesResult: 7
  };

  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommonService = TestBed.get(CommonService);
    expect(service).toBeTruthy();
  });

  it('should return amount for pages', () => {
    const service: CommonService = TestBed.get(CommonService);
    const result = service.countMaxValuePaginationPages(MockData.totalItemCount, MockData.currentItemCount);
    expect(result).toBe(MockData.countMaxValuePaginationPagesResult);
  });

  it('should return pages to output for buttons', () => {
    const service: CommonService = TestBed.get(CommonService);
    const result = service.countAvailablePaginationPages(MockData.offset, MockData.currentItemCount, MockData.paginationButtonsAmount);
    expect(result).toBe(MockData.countAvailablePaginationPagesResult);
  });

});
