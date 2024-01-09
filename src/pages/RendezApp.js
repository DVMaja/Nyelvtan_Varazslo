import Cim from "../componens/Cim.js";
import Model from "../model/Model.js"
const model = new Model();

export default function RendezApp() {
    return (
        <div className="rendez">
        <Cim cim={model.cim}/>
            
            <article>
                Hi!
            </article>
        </div>
    )
}