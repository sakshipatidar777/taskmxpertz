import React from 'react'
import './About.css'

function About() {
  return (
    <>
    <div className="container">
        <div className="row bg">
            <div className="col-md-12 text-center mt-5 pt-5">
            <h1 className='text-uppercase fs-6 fw-lighter '>Only the best</h1>
            <hr className='w-25 text-warning m-auto p-1'/>
            <h2 className='p-5'>Fresh Ingredient,Tasty Meals</h2>
            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Modi minima quaerat ratione iusto optio nemo sequi velit saepe esse consequatur.<br/>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima blanditiis velit <br/> autem architecto,qui voluptatibus. quidem <br/> </p>
            <button type="button" class="btn btn-warning text-light border-0 p-2  mt-4">VIEW ITEMS</button>


            </div>
        </div>
    </div>
      
    </>
  )
}

export default About
