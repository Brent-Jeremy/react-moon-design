import { Row, Col } from 'react-bootstrap'
import VitalikButerin from '../assets/images/Vitalik-Buterin.png'
import coin from '../assets/images/coin.png'

const Feartures = () => {
  return (
    <div className='feature' id="vbone">
      <h1>VBone Feature</h1>
      <Row>
        <Col md={12} lg={7}>
          <p>No buy tax</p>
          <p>
            10% sell tax: 100% reflection back to holders. Zero friction to buy
            and holders get rich.
          </p>
          <p>
            Automatically earn instantly via reflection when anyone in the world
            sells VBONE.
          </p>
          <p>
            No tax on wallet-to-wallet transfers = new world reserve currency.
            Send without fees!
          </p>
          <p>
            Burn: The total supply will always decrease (reflection to burn
            wallets).
          </p>
        </Col>
        <Col md={12} lg={5}>
          <img src={VitalikButerin} alt='' />
          <img src={coin} alt='' />
          <h2>*Not financial advice 😜</h2>
        </Col>
      </Row>
    </div>
  )
}
export default Feartures
