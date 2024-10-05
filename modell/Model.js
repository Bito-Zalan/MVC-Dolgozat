
export default class Model{
    #LISTA = [];
    db;

    constructor(lista){
        this.#LISTA = lista;
        this.db = 0;
        this.veletlenSzeruLista();
        
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

    veletlenSzeruLista() {
        for (let i = this.#LISTA.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.#LISTA[i], this.#LISTA[j]] = [this.#LISTA[j], this.#LISTA[i]];
        }
    }

   
}