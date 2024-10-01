
export default class Model{
    #LISTA = [];
    db;

    constructor(lista){
        this.#LISTA = lista;
        this.db = 0;
        
    }

    getListaAdat(){
        return this.#LISTA;
    }

    getDb(){
        return this.db;
    }

    dbNoveles(){
        this.db++;
        return this.db;
    }

   
}