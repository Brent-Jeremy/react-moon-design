import { Container, Row, Col } from 'react-bootstrap'
import vbonecommon from '../assets/images/vbone-comming.png'
import memorule from '../assets/images/memo-rule.png'
import perfectdesign from '../assets/images/perfect-design.png'
import vboneftw from '../assets/images/vbone-ftw.png'

const Memes = () => {
  return (
    <div className='common-bg meme' id="meme">
      <h2 className='text-center p-5'>VBONE is the new meme-Gawd</h2>
      <Row>
        <Col md={4} sm={12}>
          <p>VBONE STIMMY IS COMING!</p>
          <img src={vbonecommon} alt='' />
        </Col>
        <Col md={5} sm={12}>
          <img src={memorule} alt='' />
          <img src={perfectdesign} alt='' />
        </Col>
        <Col md={3} sm={12}>
          <p>VBONE FTW!</p>
          <img src={vboneftw} alt='' />
          <p>VBONE runs on POM: Proof of Memes</p>
        </Col>
      </Row>
      
      <span>
        Visit our <a href='https://t.me/vbonemoon'>Telegram</a> to see and share them all!
      </span>
    </div>
  )
}

export default Memes
