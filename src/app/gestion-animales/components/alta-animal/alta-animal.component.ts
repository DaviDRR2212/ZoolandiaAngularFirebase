import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, NgForm } from '@angular/forms';
import { AnimalesService } from '../../services/animales.service';

@Component({
  selector: 'app-alta-animal',
  templateUrl: './alta-animal.component.html',
  styleUrls: ['./alta-animal.component.css']
})
export class AltaAnimalComponent implements OnInit {

  animalForm;
  todoOk:boolean;
  constructor(private fb:FormBuilder,
                private animalsSrv:AnimalesService) {
    
  }

  ngOnInit() {
    this.animalForm = this.fb.group(
      {
        nombre:['', Validators.required],
        bio:['', Validators.required],
        imagen:''
      }
    );
    /* this.animalForm.valueChanges.subscribe(data=>{
      console.log(data);
    }); */
    /* this.animalForm.controls.bio.valueChanges.subscribe(data=>{
      console.log(data);
    }); */
  }

  enviarDatos(){
    const dataForm = this.animalForm.value;
    console.log(dataForm);
    this.animalsSrv.nuevoAnimal(dataForm).then(data => {
      if( data === true) {
        this.todoOk = data;
      }
    }).catch (error =>{        
      this.todoOk = false;
      console.log((`Ha habido un error ${error}`));     
    });
  }

}
