import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, NEVER } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  count$: Observable<number> =  NEVER;
  constructor(
    private store: Store<{ count: number }>) {
      this.count$ = this.store.select('count');
     }

  ngOnInit(): void {
  }

}
