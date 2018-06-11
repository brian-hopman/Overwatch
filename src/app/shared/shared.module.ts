import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { PlayerCardComponent } from './player-card/player-card.component';
import { TitleHeaderComponent } from './title-header/title-header.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PlayerComponent } from './player/player.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    PlayerCardComponent,
    TitleHeaderComponent,
    ErrorPageComponent,
    NavbarComponent,
    PlayerComponent,
    SearchComponent
  ],
  imports: [
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    TitleHeaderComponent,
    PlayerCardComponent,
    ErrorPageComponent,
    NavbarComponent,
    PlayerComponent,
    SearchComponent
,  ]
})

export class SharedModule {}
