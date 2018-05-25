import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RouletteComponent } from './roulette/roulette.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { CardDataService } from './shared/data.service';


@NgModule({
  declarations: [
    AppComponent,
    RouletteComponent,
    ProgressBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CardDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
