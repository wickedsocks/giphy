import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { PaginationButtonsComponent } from './pagination-buttons/pagination-buttons.component';
import { SearchComponent } from './search/search.component';
import { ImageCardListComponent } from './image-card-list/image-card-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImageCardComponent } from './image-card/image-card.component';
import { HttpClientModule } from '@angular/common/http';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule
      ],
      declarations: [
        AppComponent,
        PaginationButtonsComponent,
        SearchComponent,
        ImageCardListComponent,
        ImageCardComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  // it(`should have as title 'giphy'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('giphy');
  // });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('.content span').textContent).toContain('giphy app is running!');
  // });
});
