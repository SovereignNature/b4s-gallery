import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayerComponent } from './components/displayer/displayer.component';
import { GeneratorComponent } from './components/generator/generator.component';

const routes: Routes = [
  { path: 'display', component: DisplayerComponent},
  { path: 'generator', component: GeneratorComponent},
  { path: '',   redirectTo: '/display', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
