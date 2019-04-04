export class Animal {

    //atributos
    private _id:string;
    private _nombre:string;
    private _bio:string;
    private _imagen:string;

    //propiedades
    get id():string{
        return this._id;
    }

    get nombre():string{
        return this._nombre;
    }

    get bio():string{
        return this._bio;
    }

    get imagen():string{
        return this._imagen;
    }

    set id(value:string){
        this._id = value;
    }

    set nombre(value:string){
        this._nombre = value;
    }

    set bio(value:string){
        this._bio = value;
    }

    set imagen(value:string){
        this._imagen = value;
    }

    //metodos
    constructor(id:string, nombre:string, bio:string, imagen:string){
        this._id = id;
        this._nombre = nombre;
        this._bio = bio;
        this._imagen = imagen;
    }
}