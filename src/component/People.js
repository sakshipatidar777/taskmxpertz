import React from 'react'
import Card from 'react-bootstrap/Card';
import { IoIosStar} from "react-icons/io";

function People() {
    const user=[
        {
     
            title:"A Greate Find",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Modi minima quaerat ratione iusto optio nemo sequi velit saepe esse consequatur.",
            userName:"Divi",
        },
        {
     
            title:"Fabulous food & flawless Service",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Modi minima quaerat ratione iusto optio nemo sequi velit saepe esse consequatur.",
            userName:"Bloom",
        },
        {
     
            title:"Another sucessfull experience",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Modi minima quaerat ratione iusto optio nemo sequi velit saepe esse consequatur.",
            userName:"Extra",
        },
        {
     
            title:"SpeachLess",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Modi minima quaerat ratione iusto optio nemo sequi velit saepe esse consequatur.",
            userName:"Monarch",
        }

    ]
  return (
    <>
    <div className="container">
    <div className="row ">
      
        <h1 className='text-uppercase fs-6 fw-lighter text-center mt-5'>Testimonial</h1>
            <hr className='w-25 text-warning m-auto p-0'/>
            <h2 className='p-5 text-center'>What People Are Saying</h2>

           {user.map((data,i)=>{
            return(
                <div className="col-md-3">
                <Card style={{ width: '18rem', border:"none" }}>
      <Card.Body>
        <Card.Title><IoIosStar  className="text-warning"/><IoIosStar  className="text-warning"/><IoIosStar  className="text-warning"/><IoIosStar  className="text-warning"/><IoIosStar  className="text-warning"/></Card.Title>
        <Card.Subtitle className="mb-3 mt-3">{data.title}</Card.Subtitle>
        <Card.Text className='text-muted'>
         {data.description}
        </Card.Text>
        <Card.Text>
         {data.userName}
        </Card.Text>
     
      </Card.Body>
    </Card>
                </div>

            )
           })} 
    
    </div>

    </div>
      
    </>
  )
}

export default People

