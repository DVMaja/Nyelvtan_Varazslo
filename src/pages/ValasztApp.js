import Cim from "../componens/Cim.js";
import ValasztMondat from "../componens/ValaszMondat.js";
import Model from "../model/Model.js"

const model = new Model();

export default function ValasztApp() {
    const aktualisElem = model.aktElem;
    const spliteltMondat = model.aktMondatosszeallit(aktualisElem); //Statenak kell lennie
    const aktValaszok = model.aktValaszokVisszaAd(aktualisElem);
    const aktJoValasz = model.aktJoValasz(aktualisElem);

    return (
        <div className="valaszt">
            <Cim cim={model.cim} />

            <article>
                <h2>Válaszd ki a megfelelő alakot</h2>
                <ValasztMondat mondat={spliteltMondat} valaszok={aktValaszok} joValasz={aktJoValasz} />
            </article>
        </div>
    )
}