import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import image1 from '../assets/images/vitalik.gif'
import image2 from '../assets/images/bone1.png'

const Buy = () => {
  return (
    <div className='buy' id='buy'>
      <h1>Buy VBONE</h1>
      <Row>
        <Col sm={12} md={6}>
          <img src={image1} alt='' />
        </Col>
        <Col sm={12} md={6}>
        <Link to='https://www.yahoo.com/'>
          <img src={image2} alt='' />
          </Link>
        </Col>
      </Row>
      <div className='spacer-double' />
      <span>
        <Link to='https://t.me/vbonemoon/'>
          <button>Telegram</button>
        </Link>
        <Link to='https://twitter.com/Vbone4ever'>
          <button>Twitter</button>
        </Link>
      </span>
    </div>
  )
}
export default Buy
