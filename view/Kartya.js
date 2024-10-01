export default class Kartya {
  #obj;
  szuloElem;

  constructor(obj, szuloElem) {
    this.#obj = obj;
    this.szuloElem = szuloElem;
    this.kartyaTartalom = $(".egykartya");
    this.kattintas = $(".megjelenit:last");
    this.kartyaLetrehoz();
    this.sajatEsemeny();
  }

  kartyaLetrehoz() {
    this.szuloElem.append(`
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <p class="card-text"><div class="szoveghelye"> </div></p>
                    <button class "megjelenit">Megjelenit</button>
                </div>
            </div>
            `);
  }

  sajatEsemeny() {
    this.kattintas.on("click", (event) => {
      const esemeny = new CustomEvent("kivalaszt", { detail: this.#obj });
      window.dispatchEvent(esemeny);
    });
  }
}
