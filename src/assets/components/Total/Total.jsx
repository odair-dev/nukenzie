import './Total.css'

export function Total({children}){
    return(
        <div>
            <section>
                <h3 className='title three'>Valor Total</h3>
                <h3 className='value'>
                    {children}
                </h3>
            </section>
            <p className='title four'>O valor se refere ao saldo</p>
        </div>
    )
}