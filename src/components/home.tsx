import { Container, Nav, Navbar, NavDropdown, Row, Col } from 'react-bootstrap'
import vbonepng from '../assets/images/vbone-rect.png'
import newspng from '../assets/images/news.png'
import logopng from '../assets/images/Boner-logo.png'
import binance from '../assets/images/binance.png'
import { DiagnosticCategory } from 'typescript'

const Home = () => {
  return (
    <div className='common-bg home' id="home">
      <Row>
        <Col md={4} sm={12}>
          <img src={vbonepng} alt='Vbone page' />
          <img src={newspng} alt='News page' />
        </Col>
        <Col md={4} sm={12}>
          <img src={logopng} alt='logo page' />
        </Col>
        <Col md={4} sm={12}>
          <span className='comment'>
            The greatest self-generating yield coin bringing DOGFI, DEFI, MOONFI
            and Vitalik’s Bone together!
          </span>
          <img src={binance} alt='logo page' />
        </Col>
      </Row>
    </div>
  )
}
export default Home
