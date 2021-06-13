import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeezerComponent } from './deezer/deezer.component';

const routes: Routes = [
  {
    path: 'deezer', component : DeezerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
