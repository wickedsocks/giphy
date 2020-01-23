import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationButtonsComponent } from './pagination-buttons.component';

describe('PaginationButtonsComponent', () => {
  let component: PaginationButtonsComponent;
  let fixture: ComponentFixture<PaginationButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginationButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('raises the pageChanged event when goToPage triggered', () => {
    fixture = TestBed.createComponent(PaginationButtonsComponent);
    component = fixture.componentInstance;
    const mockNumber = 12;

    component.pageChanged.subscribe((pageNumber: number) => expect(pageNumber).toBe(mockNumber));
    component.goToPage(mockNumber);
  });
});
