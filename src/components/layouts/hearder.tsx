import { useEffect, useLayoutEffect, useState } from 'react'
import { Nav, Navbar, NavDropdown, Row, Col } from 'react-bootstrap'

const Header = () => {
  const [isMobile, setMobile] = useState(false)

  useLayoutEffect(() => {
    const handleWindowSizeChange = () => {
      setMobile(window.innerWidth < 1400)
    }
    handleWindowSizeChange()
    window.addEventListener('resize', handleWindowSizeChange)
  }, [])

  return (
    <div style={{ position: 'sticky', top: 0, zIndex: 100000 }}>
      <Navbar expand='xxl' className='header'>
        <Navbar.Brand
          href='#home'
          className={`${isMobile ? '' : 'd-none'} pl-5`}
        >
          <h1>VBONE.IO</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav mr-5' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='w-100'>
            <Row className='w-100'>
              <Col
                xxl={4}
                xl={12}
                className={`${
                  isMobile ? '' : 'd-flex'
                } justify-content-around align-items-center`}
              >
                <Nav.Link href='#home'>Home</Nav.Link>
                <Nav.Link href='#meme'>Memes</Nav.Link>
                <Nav.Link href='#vbone'>Vbone</Nav.Link>
                <Nav.Link href='#safe'>Safe</Nav.Link>
                <Nav.Link href='#moon'>Moon</Nav.Link>
              </Col>
              <Col
                xxl={4}
                xl={12}
                className={`${
                  isMobile ? 'd-none' : 'd-flex'
                } justify-content-around align-items-center`}
              >
                <Nav.Item>
                  <h1>VBONE.IO</h1>
                </Nav.Item>
              </Col>
              <Col
                xxl={4}
                xl={12}
                className={`${
                  isMobile ? '' : 'd-flex'
                } justify-content-around align-items-center`}
              >
                <Nav.Link href='#roadmap'>Roadmap</Nav.Link>
                <Nav.Link href='#buy'>Buy</Nav.Link>
                <Nav.Link href='#home'>Telegram</Nav.Link>
              </Col>
            </Row>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}
export default Header
