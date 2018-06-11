import { Component , OnInit} from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-title-header-component',
  templateUrl: './title-header.component.html',
  // styleUrls: ['./title-header.component.css']
})

export class TitleHeaderComponent implements OnInit {

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {}


  requestCharProf() {
    const charProf = fetch('http://0.0.0.0:3000/profile/pc/us/user-12345');
  }

}
