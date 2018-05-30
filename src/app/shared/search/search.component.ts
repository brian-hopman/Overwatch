import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() searchResults = new EventEmitter();

  formGroup: FormGroup;
  //url = `http://localhost:3000/profile/pc/us/${this.formGroup.value.search}`;

  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      search: ''
    });
  }

  onEnter() {
    this.requestUser();
  }

  requestUser() {
    this.httpClient.get(`http://localhost:3000/profile/pc/us/${this.formGroup.value.search}`).subscribe((res) => {
      this.searchResults.emit(res);
    });
  }
}
