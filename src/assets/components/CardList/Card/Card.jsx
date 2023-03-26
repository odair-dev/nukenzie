export function Card({element, removeValuesFromValuesList}){
    if(element.typeInp=='Saída'){
        return(
            <li className="liTwo">
                <div className="left">
                    <h3 className="title three">{element.descriptionInp}</h3>
                    <p className="title four">{element.typeInp}</p>
                </div>
                <div className="right">
                    <p className="title four">{element.valueInp.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</p>
                    <button className="btn delete" onClick={()=>removeValuesFromValuesList(element.id)}>Excluir</button>
                </div>
            </li>
        )
    }else{ 
        return(
            <li>
                <div className="left">
                    <h3 className="title three">{element.descriptionInp}</h3>
                    <p className="title four">{element.typeInp}</p>
                </div>
                <div className="right">
                    <p className="title four">{element.valueInp.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</p>
                    <button className="btn delete" onClick={()=>removeValuesFromValuesList(element.id)}>Excluir</button>
                </div>
            </li>
        )
    }
}