import { useState } from "react"
import { InputGroup, FormControl } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"


function Buscador({paises, setFiltrados}) {
    const [buscar, setBuscar] = useState("")

    const handleSearch = (e) => {
        const consulta = e.target.value
        setBuscar(consulta)

        const filtro = paises.filter((country) => 
        country.name.common.toLowerCase().includes(consulta.toLowerCase()))
        setFiltrados(filtro)
    }

    return(
        <InputGroup className="my-3">
            <FormControl
            placeholder="Buscar por nombre del Pais"
            value={buscar}
            onChange={handleSearch}/>
        </InputGroup>
    )
}
export default Buscador
