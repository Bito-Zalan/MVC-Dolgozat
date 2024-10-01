import Model from "../modell/Model.js";
import { IDEZETEK } from "../modell/idezetek.js";
import Kartyak from "../view/Kartyak.js";

export default class Controller{

    constructor(){
        this.kartyakElem = $(".kartyak")
        this.modell = new Model(IDEZETEK).getDb();
        new Kartyak(this.modell.getListaAdat(), this.kartyakElem)
        this.esemenyKezelo();
    }

    esemenyKezelo(){
        $(window).on("kivalaszt", (event)=>{
            this.dbElem = $(".darabszam");
        });
    }
}