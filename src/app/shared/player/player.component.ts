import { Component, OnInit, Input } from '@angular/core';
import { IuserProfile } from '../interfaces/Iuser-profile';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  @Input() player: any;

  constructor() { }

  ngOnInit() {
    console.log(this.player);
  }

}
