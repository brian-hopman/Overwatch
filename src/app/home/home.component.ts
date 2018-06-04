import { Component, OnInit, Input } from '@angular/core';
import { IuserProfile } from '../shared/interfaces/Iuser-profile';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  searchResults: IuserProfile;

  constructor() { }

  ngOnInit() {
  }

  setSearchResults($event) {
    this.searchResults = $event;
    console.log(this.searchResults);
  }

}
