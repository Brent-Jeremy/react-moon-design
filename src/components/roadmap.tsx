import { Row, Col } from 'react-bootstrap'
import dogGIf from '../assets/images/Dog Animation.gif'

const Roadmap = () => {
  return (
    <div className='roadmap' id="roadmap">
      <h1>ROADMAP</h1>

      <Row>
        <Col md={12} lg={7}>
          <img src={dogGIf} alt='' />
        </Col>
        <Col md={12} lg={5}>
          <p>Go up hard and long!</p>
        </Col>
      </Row>
    </div>
  )
}
export default Roadmap
