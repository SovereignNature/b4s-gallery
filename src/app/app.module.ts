import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProgressbarComponent } from './components/progressbar/progressbar.component';
import { GeneratorComponent } from './components/generator/generator.component';
import { DisplayerComponent } from './components/displayer/displayer.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgressbarComponent,
    GeneratorComponent,
    DisplayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
