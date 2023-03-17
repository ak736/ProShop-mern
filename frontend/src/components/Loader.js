import React from 'react'
import { Button, Spinner } from 'react-bootstrap'

const Loader = () => {
  return (
    // <Spinner animation='border' role="status" style={{width:"100px",height:"100px",margin:"auto", display:"block"}}>
    //     <span className='sr-only'>Loading...</span>
    // </Spinner>
    <Spinner animation="border" variant="info" />
  )
}

export default Loader
