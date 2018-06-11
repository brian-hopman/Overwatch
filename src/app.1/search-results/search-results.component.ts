import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  player$: Observable<Object>;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.player$ = this.http.get(`http://localhost:3000/profile/pc/us/Calvin-1337`);
    // this.player$ = this.http.get(`http://localhost:3000/profile/pc/us/${this.route.snapshot.params['playerName']}`);
  }
}
