import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { GestionAnimalesRoutingModule } from './gestion-animales-routing.module';
import { ListaAnimalesComponent } from './components/lista-animales/lista-animales.component';
import { environment } from 'src/environments/environment';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { DetalleAnimalComponent } from './components/detalle-animal/detalle-animal.component';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { AltaAnimalComponent } from './components/alta-animal/alta-animal.component';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    ListaAnimalesComponent,
    DetalleAnimalComponent,
    AltaAnimalComponent
  ],
  imports: [
    CommonModule,
    GestionAnimalesRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatListModule,
    HttpClientModule,
    MatIconModule
  ],
  exports: [
    ListaAnimalesComponent
  ]
})
export class GestionAnimalesModule { }
