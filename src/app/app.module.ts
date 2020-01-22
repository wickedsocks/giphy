import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageCardComponent } from './image-card/image-card.component';
import { ApikeyInterceptorService } from './services/apikey-interceptor.service';
import { ImageCardListComponent } from './image-card-list/image-card-list.component';
import { PaginationButtonsComponent } from './pagination-buttons/pagination-buttons.component';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    ImageCardComponent,
    ImageCardListComponent,
    PaginationButtonsComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApikeyInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
