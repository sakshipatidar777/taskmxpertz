import React from 'react'
import Card from 'react-bootstrap/Card';
// import CardGroup from 'react-bootstrap/CardGroup';

function Blog() {
  return (
    <div className="container">
        <div className="row bg mt-5">
            <div className=" text-center mt-5 pt-5">
            <h1 className='text-uppercase fs-6 fw-lighter '>Don't miss</h1>
            <hr className='w-25 text-warning m-auto p-0'/>
            <h2 className='p-5'>Our News and Events</h2>
            <p  className='mb-4'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium <br/>doloremque laudantium ,totam rem aperiam </p>
            </div>
            <div className="row">
                <div className="col-md-4">
                <Card>
        <Card.Img variant="top" src="./images/Nunc Volutpat Venenatis.jpg" />
        <Card.Body>
        <Card.Title >Nunc Volutpat Venenatis</Card.Title>
          <Card.Title className='text-uppercase text-warning'>Category</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates sapiente rem perferendis dignissimos maiores a. Adipisci, repellat error alias rem dolore aperiam facilis cum cumque  perspiciatis soluta vitae impedit pariatur.
          </Card.Text>
        </Card.Body>
       
      </Card>
                </div>
            
    <div className="col-md-4">
    <Card>
        <Card.Img variant="top" src="./images/Vestibulum.jpg" />
        <Card.Body>
          <Card.Title>Vestibulum Nisl tellis</Card.Title>
          <Card.Title className='text-uppercase text-warning'>Category</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates sapiente rem perferendis dignissimos maiores a. Adipisci, repellat error alias rem dolore aperiam facilis cum cumque perspiciatis soluta vitae impedit pariatur.
          </Card.Text>
        </Card.Body>
       
      </Card>
    </div>
<div className="col-md-4">  <Card>
        <Card.Img variant="top" src="./images/proin.jpg" />
        <Card.Body>
          <Card.Title>Proin Eu Augue Efficitur</Card.Title>
          <Card.Title className='text-uppercase text-warning'>Category</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates sapiente rem perferendis dignissimos maiores a. Adipisci, repellat error alias rem dolore aperiam facilis cum cumque perspiciatis soluta vitae impedit pariatur.
          </Card.Text>
        </Card.Body>
       
      </Card>
      </div>
    
    
            </div>
            
            <div className='text-center p-5'>
    <button type="button" class="btn btn-warning text-light border-0 p-2  mt-4">READ MORE</button>
    </div>

    </div>
    
   
        </div>

 
      
  )
}

export default Blog
