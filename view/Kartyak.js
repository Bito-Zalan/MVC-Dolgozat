import Model from "../modell/Model.js";
import Kartya from "./Kartya.js";

export default class Kartyak{
    szuloElem;
    #MODELL;
    #LISTA = []
    darabTartalom;


    constructor(szuloElem, lista){
        this.szuloElem = szuloElem;
        this.#MODELL = new Model();
        this.#LISTA = lista;
        this.darabTartalom = $(".darabszam");
        /* this.szuloElem.append(this.#MODELL.getDb()) */
        this.kartyakKiIr();
    }

    setDarab(){
        this.#MODELL.getDb();
    }

    kartyakKiIr(){
        this.#LISTA.forEach((elem) => {
            new Kartya(elem,this.szuloElem);
        });
    }
}