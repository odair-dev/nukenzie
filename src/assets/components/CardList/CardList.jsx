import { Card } from "./Card/Card";
import './CardList.css'

export function CardList({valuesList, removeValuesFromValuesList}){
    if(valuesList.length>0){
        return(
            <ul>
                {valuesList.map((element)=>{
                    return <Card key={element.id} element={element} removeValuesFromValuesList={removeValuesFromValuesList}/>
                })}
            </ul>
        )
    }
    else{
        return(
            <ul>
                <p className="title two">Você ainda não possui nenhum lançamento</p>
            </ul>
        )
    }  
}