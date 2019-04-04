import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalleAnimalComponent } from './components/detalle-animal/detalle-animal.component';
import { AltaAnimalComponent } from './components/alta-animal/alta-animal.component';

const routes: Routes = [
  { path: 'animales/:name', component: DetalleAnimalComponent},
  { path: 'newAnimal', component: AltaAnimalComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionAnimalesRoutingModule { }
