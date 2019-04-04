import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { AnimalesService } from '../../services/animales.service';

@Component({
  selector: 'app-detalle-animal',
  templateUrl: './detalle-animal.component.html',
  styleUrls: ['./detalle-animal.component.css']
})
export class DetalleAnimalComponent implements OnInit {

  animal$;

  constructor(private route:ActivatedRoute,
  private animalSrv:AnimalesService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const idAnimal = params.get('name');
      console.log('Nombre animal seleccionado: ', idAnimal);
      this.animal$ = this.animalSrv.obtenerAnimal(idAnimal);
    })
  }

  getRutaAnimal = (imagen:string) => {
    return `assets/images/${imagen}`;
  }
}
