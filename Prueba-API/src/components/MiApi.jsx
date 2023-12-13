import { useState, useEffect } from "react"
import { Button, Card, Container } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import Buscador from "./Buscador"
import { fetchPaises } from "../Resources/api"

function MiApi() {
    const [paises, setPaises] = useState([])
    const [filtrados, setFiltrados] = useState([])

    useEffect(() => {
      fetchPaises()
      .then((resultado) => {
        setPaises(resultado)
        setFiltrados(resultado)
      })
      .catch((error) => {
        console.error("Error al obtener datos de la API", error)
      })
    }, [])

    const handleSort = () => {
      const ordenados = [...filtrados]
      ordenados.sort((a,b) => a.name.common.localeCompare(b.name.common))
      setFiltrados(ordenados)
    }

    return (
       <Container className="my-4">
        <h2 className="mb-3">Listado de Paises</h2>
        <Button variant="primary" onClick={handleSort}>
          Ordenar Alfabeticamente
        </Button>
        <Buscador
        paises={paises}
        setFiltrados={setFiltrados}
        />
        <Card className="mt-3">
          <Card.Body>
            <ul className="list-group">
            {filtrados.map((country, index) =>(
              <li
              className="list-group-item d-flex justify-content-between align-items-center"
              key={index}
              >
              {country.name.common}
              </li>
            ))}
            </ul>
          </Card.Body>
        </Card>
       </Container>
    )}
export default MiApi