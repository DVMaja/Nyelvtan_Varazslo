import Cim from "../componens/Cim.js";
import Model from "../model/Model.js"

const model = new Model();

export default function GepelApp() {

    return (
        <div className="gepel">
        
        <Cim cim={model.cim}/>
        
            
            <article>
                Gépel
            </article>
        </div>
    )
}