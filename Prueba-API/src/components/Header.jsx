import logo from "../img/paises.png"
function Header(){
    return(
        <div>
            <h1>API Paises del mundo</h1>
            <img className="header" src={logo} alt="" />
        </div>
    )
}
export default Header