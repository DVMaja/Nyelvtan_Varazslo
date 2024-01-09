export default function ValasztMondat(props) {
    return (
        <div className="valasztottMondat">
            {props.mondat.map((elem, index) => {
                if (elem == "_") {
                    return (
                        <select>
                            <option>Válaszok</option>
                            {props.valaszok.map((elem, i) => {
                                console.log(elem);
                                return (<option key={i} value={elem}>{elem}</option>)
                            })}

                        </select>
                    );
                }
                return <span key={index}>{elem} </span>
            })}

        </div>
    )
}