import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Landing() {
  return (
    
    <section className="p-5">
      
    <div className="w-100 d-flex justify-content-center align-items-center">
      <Row className="p-4 w-100" style={{ maxWidth: '1200px' }}>
        {/* Text Section */}
        <Col xs={12} md={6} className="d-flex flex-column justify-content-center align-items-center align-items-md-start text-center text-md-start">
          <p className="mt-3">
          Centralize all your tasks in one convenient hub for better organization and efficiency.
          </p>
          <Link  className="btn btn-danger btn-lg mt-3" to={'/auth'} >
            Get Started
          </Link>
        </Col>
        {/* Image Section */}
        <Col>
          <img src="https://thebusinessblocks.com/wp-content/uploads/2021/07/lottie2-5.gif" alt="Landing" className="img-fluid"/>
        </Col>
      </Row>
    </div>
    </section>
  )
}

export default Landing