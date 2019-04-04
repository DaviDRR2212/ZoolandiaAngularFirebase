import { Component, OnInit } from '@angular/core';
import { AnimalesService } from '../../services/animales.service';
import { Observable } from 'rxjs';
import { Animal } from '../../model/Animal';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-lista-animales',
  templateUrl: './lista-animales.component.html',
  styleUrls: ['./lista-animales.component.css']
})
export class ListaAnimalesComponent implements OnInit {
  panelOpenState = false;

  constructor(private animalSrv:AnimalesService,
                private router:Router,
                
    private domSanitizer: DomSanitizer,
                  private matIconRegistry: MatIconRegistry) { 
    this.matIconRegistry.addSvgIcon(
                      `animal`,
                      this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/images/animal.svg")
                    );
  }

  animal:Animal;
  animales$;

  displayedColumns:string[] = ['nombre'];
  ngOnInit() {
    this.animal = new Animal('','','','');
    this.animales$ = this.animalSrv.obtenerAnimales();
  }

  nuevoAnimal(f:NgForm){
    this.animalSrv.nuevoAnimalConId(new Animal(this.animal.id,this.animal.nombre,this.animal.bio,this.animal.imagen));
    f.reset();
    return false;
  }

}
