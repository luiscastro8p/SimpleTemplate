import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PerfilComponent } from './perfil.component';

const routes: Routes = [{ path: '', component: PerfilComponent }];

@NgModule({
  declarations: [PerfilComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  providers: [],
  exports: [RouterModule],
})
export class PerfilModule {}
