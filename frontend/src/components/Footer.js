import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          {/* py-3 means padding on y axis of 3 px */}
          <Col className='text-center' py-3>
            Copyright &copy; ProShop
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
