import Kartya from "./Kartya.js";

export default class Kartyak{
    szuloElem;
    #LISTA = []
    darabTartalom;


    constructor(szuloElem, lista){
        this.szuloElem = szuloElem;
        this.#LISTA = lista;
        this.darabTartalom = $(".darabszam");
        this.kartyakKiIr();
    }

    setDarab(ujErtek){
        this.darab = ujErtek;
    }

    frissitDarabSzam(){
        this.darabTartalom.text(`Megfordított idézetek száma: ${this.darab}`);
    }

    kartyakKiIr(){
        this.#LISTA.forEach((elem) => {
            new Kartya(elem,this.szuloElem);
        });
    }
}