import React from 'react'
import Button from 'react-bootstrap/Button';
import { FaArrowDownLong } from "react-icons/fa6";
import './Landing.css';

 const Landing =()=> {
  return (
    <>
    <div className='container'>
    <div className='row'>
    <div className="col-md-12 position-relative">
    <img src="../images/heroSection.webp " className='img-fluid w-100' alt="food img" />

    </div>
    <div className="col-md-12 text-center position-absolute">
    <h1 className='text-white fw-bolder fs-1 mt-5' >Only Quality Food</h1>
    <p className='text-light '>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium<br/> doloremque laudantium ,totam rem aperiam,eaque ipsa ab illo inventore<br/>
    veritatis et quasi architechtoeague ipsa ab illo inventore.</p>
    
    <Button variant="outline-secondary text-uppercase text-white me-2">View Menu</Button>

    <Button variant="outline-warning text-uppercase text-white">Reservation</Button>
    <br/>
    <FaArrowDownLong  className='text-white mt-5'/>

    </div>

    </div>

    </div>
    </>
  )
}
export default Landing;