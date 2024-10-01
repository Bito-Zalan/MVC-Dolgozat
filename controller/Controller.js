import Model from "../modell/Model.js";
import Kartyak from "../view/Kartyak.js";
import { IDEZETEK } from "../modell/idezetek.js";

export default class Controller{

    constructor(){
        this.kartyakElem = $(".kartyak")
        this.modell = new Model(IDEZETEK);
        new Kartyak(this.modell.getListaAdat(),this.modell.getDb(), this.kartyakElem)
        this.esemenyKezelo();
    }

    esemenyKezelo(){
        $(window).on("kivalaszt", (event)=>{
            this.dbElem = $(".darabszam");
            this.modell.dbNoveles();
        });
    }
}