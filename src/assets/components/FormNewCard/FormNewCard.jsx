import { useState } from "react"

export function FormNewCard({addValuesToValuesList}){
    const [descriptionInp, setDescriptionInp] = useState("");
    const [valueInp, setValueInp] = useState("");
    const [typeInp, setTypeInp] = useState("");

    const categories = [{slug: "Entrada", label: "Entrada"}, {slug: "Saída", label: "Saída",}];

    const submit = (event)=>{
        event.preventDefault();
        const formData = {descriptionInp, valueInp, typeInp}
        addValuesToValuesList(formData);
        setDescriptionInp("");
        setValueInp("");
        setTypeInp(""); 
    }

    return(
        <form onSubmit={submit} className='form'>
            <label htmlFor="description">Descrição</label>
            <input onChange={(event)=>setDescriptionInp(event.target.value)} value={descriptionInp} type="text" name="description" id="description" placeholder="Digite aqui sua descrição" required/>
            <p>Ex.: Compra de roupas</p>

            <label htmlFor="value">Valor (R$)</label>
            <input onChange={(event)=>setValueInp(event.target.value)} value={valueInp} type="number" name="value" id="value" placeholder="1" required/>
                
            <label htmlFor="type">Tipo de valor</label>
            <select onChange={(event)=>setTypeInp(event.target.value)} className="type" id="type" required>
                <option value="">Escolha um tipo</option>
                {categories.map(category => (
                    <option key={category.slug} value={category.slug}>{category.label}</option>
                ))}
            </select>

            <button type="submit" className="btn create">Inserir Valor</button>
        </form>
    )
}