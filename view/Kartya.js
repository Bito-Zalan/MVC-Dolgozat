export default class Kartya {
  #obj;
  szuloElem;
  kartyaElem;
  kattintas;

  constructor(obj, szuloElem) {
    this.#obj = obj;
    this.szuloElem = szuloElem;
    /*this.kartyaTartalom = $(".egykartya");
    this.kattintas = $(".megjelenit:last");*/
    this.kartyaTartalom = null;
    this.kattintas = null;
    this.kartyaLetrehoz();
    this.sajatEsemeny();
  }

  kartyaLetrehoz() {
    const kartya = $(`
      <div class="card" style="width: 15rem; display: inline-block; margin: 10px;">
          <div class="card-body">
              <p class="card-text szoveghelye" style="display:none;">${this.#obj.idezet}</p>
              <button class="megjelenit">Megjelenít</button>
          </div>
      </div>
  `);
    this.szuloElem.append(kartya);
    this.kartyaTartalom = kartya.find(".szoveghelye");
    this.kattintas = kartya.find(".megjelenit");
  }

  sajatEsemeny() {
    this.kattintas.on("click", () => {
      this.kartyaTartalom.show();
      const esemeny = new CustomEvent("kivalaszt", { detail: this.#obj });
      window.dispatchEvent(esemeny);
    });
  }
}
