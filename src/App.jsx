import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { CardList } from './assets/components/CardList/CardList';
import { FormNewCard } from './assets/components/FormNewCard/FormNewCard';
import { Header } from './assets/components/Header/Header';
import { Total } from './assets/components/Total/Total';
import './assets/styles/index.css';

function App() {
  const [valuesList, setValuesList] = useState([]);
  
  const addValuesToValuesList = (formData)=>{
    const newValue = {...formData, valueInp:Number(formData.valueInp), id: uuidv4()};
    const newValueList = [...valuesList, newValue];
    setValuesList(newValueList);
  }

  const removeValuesFromValuesList = (valueId)=>{
    const newValueList = valuesList.filter(value => value.id!==valueId);
    setValuesList(newValueList);
  }

  const totalValue = valuesList.reduce((previousValue, value)=>{
    if(value.typeInp=='Entrada'){
      return previousValue+value.valueInp;
    }else{
      return previousValue-value.valueInp;
    }
  }, 0)

  return(
    <div className='divContainer'>
      <Header />
      <main className='mainContainer'>
        <div className='containerLeft'>
          <FormNewCard addValuesToValuesList={addValuesToValuesList}/>
          <div className='divTotal'>
            <Total>
              {totalValue.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}
            </Total>
          </div>
        </div>
        <div className='containerRight'>
          <h3 className='title three'>Resumo financeiro</h3>
          <CardList valuesList={valuesList} removeValuesFromValuesList={removeValuesFromValuesList} />
        </div>
      </main>
    </div>
  )
}

export default App