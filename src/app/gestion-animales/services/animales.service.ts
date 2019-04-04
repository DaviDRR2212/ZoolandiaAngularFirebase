import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Animal } from '../model/Animal';

@Injectable({
  providedIn: 'root'
})
export class AnimalesService {

  constructor(private afs:AngularFirestore) { }

  obtenerAnimales() {
    //return this.afs.collection('animales').valueChanges();
    return this.afs.collection('animales').snapshotChanges();
  }

  nuevoAnimalConId(data:Animal){
    return new Promise<any> ((resolve, reject) => {
      this.afs.collection('animales')
      .doc(data.id)
      .set({
        nombre: data.nombre,
        bio: data.bio,
        imagen: data.imagen
      })
        .then(res => {}, err => reject(err));
    });
  }

  nuevoAnimal(data:any):Promise<boolean> {
    return new Promise ((resolve, reject) => {
        this.afs.collection('animales')
        .add(data)
        .then(res => {resolve(true)}, err => reject(err));
    });
  }

  

  obtenerAnimal(id:string){
    return this.afs.doc(`animales/${id}`).valueChanges();
  }
}
