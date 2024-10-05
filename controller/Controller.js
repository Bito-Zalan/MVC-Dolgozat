import Model from "../modell/Model.js";
import Kartyak from "../view/Kartyak.js";
import { IDEZETEK } from "../modell/idezetek.js";

export default class Controller{

    constructor(){
        this.kartyakElem = $(".kartyak")
        this.modell = new Model(IDEZETEK);
        this.kartyakView = new Kartyak(this.kartyakElem,this.modell.getListaAdat());
        this.esemenyKezelo();
    }

    esemenyKezelo(){
        $(window).on("kivalaszt", (event)=>{
            this.modell.dbNoveles();
            this.kartyakView.setDarab(this.modell.getDb());
            this.kartyakView.frissitDarabSzam();
        });
    }
}