import Header from './components/Header'
import { Container, Row, Col, Card, CardBody } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import MiApi from './components/MiApi'

function App() {
  return (
    <Container>
      <Row className='mt-5'>
        <Col>
          <Header/>
        </Col>
      </Row>
      <Row className='mt-4'>
      <Col>
        <Card>
          <CardBody>
            <MiApi/>
          </CardBody>
        </Card>
      </Col>
      </Row>
    </Container>
  )
}

export default App
