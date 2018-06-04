import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { PlayerCardComponent } from './player-card/player-card.component';
import { SearchComponent } from './search/search.component';
import { TitleHeaderComponent } from './title-header/title-header.component';
import { ErrorPageComponent } from './error-page/error-page.component';

@NgModule({
  declarations: [
    PlayerCardComponent,
    SearchComponent,
    TitleHeaderComponent,
    ErrorPageComponent
  ],
  imports: [
    ReactiveFormsModule
  ],
  exports: [
    SearchComponent,
    TitleHeaderComponent,
    PlayerCardComponent,
    
  ]
})

export class SharedModule {}
