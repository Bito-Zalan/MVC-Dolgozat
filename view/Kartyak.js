import Model from "../modell/Model.js";
import Kartya from "./Kartya.js";

export default class Kartyak{
    szuloElem;
    #MODELL;
    #LISTA = []


    constructor(lista,szuloElem){
        this.szuloElem = szuloElem;
        this.#LISTA = lista;
        this.darabTartalom = $(".darabszam");
        this.#MODELL = new Model;
        this.setDarab();
        this.kartyakKiIr();
    }

    setDarab(){
        this.#MODELL.getDb();
    }

    kartyakKiIr(){
        this.#LISTA.forEach((elem) => {
            new Kartya(elem, this.szuloElem);
        });
    }
}