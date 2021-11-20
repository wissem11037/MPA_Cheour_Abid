import { Séjour } from "./séjour";

export class Voyage {
    constructor(public id:string,
        public libelle:string,
        public photo:string,
        public prix:number,
        public nouveau:boolean,
        public DateDépart:Date,
        public DateArrivé:Date,
        public destination: Séjour[],
        public ServicesNonInculs:string[]){}
}
