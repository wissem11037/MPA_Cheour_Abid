import { Séjour } from "./séjour";

export class Voyage {
    constructor(public id:number,
        public libelle:string,
        public photo:string,
        public prix:number,
        public nouveau:boolean,
        public dateDepart:Date,
        public dateArrive:Date,
        public destination: Séjour[],
        public ServicesNonInculs:string[],
        public description?:string){}
}
