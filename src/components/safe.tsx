import { Row, Col } from 'react-bootstrap'
import Box from '../assets/images/box.png'

const Safe = () => {
  return (
    <div className='safe' id='safe'>
      <Row>
        <Col md={12} lg={8}>
          <div>
            <p>
              <a href='https://www.soccer.com'>Verified smart contract</a>
            </p>
            <br />
            <p>
              <a href='https://www.coingecko.com'>Liquidity locked</a>
            </p>
            <br />
            <p>
              <a href='https://www.running.com'>Admin keys burned</a>
            </p>
            <br />
            <p>
              <a href='#'>No scammy "marketing tax"</a>
            </p>
            <br />
            <p>
              <a href='#'>
                Connot be changed, VBONE will run under these parameters
                FOREVER!
              </a>
            </p>
            <p className='spacer-double'></p>
            <span>CERTIK audit soon!</span>
          </div>
        </Col>
        <Col md={12} lg={4}>
          <img src={Box} alt='' />
        </Col>
      </Row>
    </div>
  )
}
export default Safe
