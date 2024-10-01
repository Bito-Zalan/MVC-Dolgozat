
export default class Model{
    #LISTA = [];
    #DBLISTA = []
    db;

    constructor(lista,db){
        this.#LISTA = lista;
        this.db = db;
        
    }

    listaFeltolt(){
        this.#LISTA.push()
    }

    getListaAdat(){
        return this.#LISTA;
    }

    getDb(){
        return this.db;
    }

    dbNoveles(db){
        this.#DBLISTA.push(db);
        return this.db;
    }

   
}