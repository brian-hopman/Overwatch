import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() searchResults = new EventEmitter();
  formGroup: FormGroup;
  region = 'NA';
  displayError = true;
  //url = `http://localhost:3000/profile/pc/us/${this.formGroup.value.search}`;

  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient,
    private router: Router
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
    // this.httpClient.get(`http://localhost:3000/profile/pc/us/${this.formGroup.value.search}`).subscribe((res) => {
    //   this.searchResults.emit(res);
    //   console.log(res);
    //   res.username ? this.router.navigate(['results']) : this.router.navigate(['error']);
    // });

    this.router.navigate(['results', this.formGroup.value.search]);
  }
}
