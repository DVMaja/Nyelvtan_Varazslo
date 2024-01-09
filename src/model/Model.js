import { szenvedoMondatok } from "./angol.js";

class Model {
    #mondatokLista = [];
    #cim = "";
    #hossz = 0;
    #sugoSzoveg = "";
    #aktObj = {};
    #aktElem = 2;

    constructor() {
        this.#mondatokLista = szenvedoMondatok;
        this.#cim = this.#mondatokLista[0];
        this.#sugoSzoveg = this.#mondatokLista[1];
        this.#hossz = this.#mondatokLista.lenght - 2;

        //Választoshoz
        this.aktMondatosszeallit(this.#aktElem);
        this.aktValaszokVisszaAd(this.#aktElem);
        this.aktJoValasz(this.#aktElem);
        //this.#aktElem += 1;
    }
    //*angol.js ből ovasd be az adatokat. és utána mentsd el külön a címét, súgó szöveget
    //a címre hozz egy gettert és jelenjen meg a cím */

    /* kovElem(index) {
        kiszámolja a következő indexét
    } */

    aktMondatosszeallit(index) {
        //visszaadja az aktuális mondatot
        let egeszMondat = this.#mondatokLista[index].mondat;
        //console.log(egeszMondat);
        let spliteltM = egeszMondat.split(" ");
        console.log(spliteltM);
        return spliteltM;

    }

    aktValaszokVisszaAd(index) {
        console.log(this.#mondatokLista[index].valasztas)
        return this.#mondatokLista[index].valasztas;
    }

    aktJoValasz(index){
        return this.#mondatokLista[index].alap;
    }

    get aktElem() {
        return this.#aktElem;
    }

    get cim() {
        return this.#cim;
    }

    get sugoSzoveg() {
        return this.#sugoSzoveg;
    }

    get hossz() {
        return this.#hossz;
    }

}
export default Model