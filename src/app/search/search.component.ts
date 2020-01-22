import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output() searchQuery = new EventEmitter<string>();
  public firstSearchControl = new FormControl();
  public inputValue = '';
  public searchControl$: Subscription;

  constructor() { }

  ngOnInit() {
    this.searchControl$ = this.firstSearchControl.valueChanges
      .pipe(debounceTime(400))
      .subscribe(newValue => {
        this.inputValue = newValue;
        this.searchQuery.emit(this.inputValue);
      });
  }
}
