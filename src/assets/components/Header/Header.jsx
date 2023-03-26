import Logo from "../../../assets/img/Nu Kenzie.svg"
import './Header.css'

export function Header(){
    return(
        <header>
            <div className="divLogo">
                <img src={Logo} alt="Logo Nu Kenzie" />
            </div>
        </header>
    )
}