import React from "react";
import Card from "react-bootstrap/Card";
import './contact.css'

function Contact() {
  return (
    <>
      <div className="container">
        <div className="row bgcolor">
          <div className="col-md-6 m-auto">
            <Card className="text-center bg-dark text-light mt-5 ">
              <Card.Body>
                <Card.Title>Hours Of Operation</Card.Title>
                
                <Card.Text>
                  <h6>mon-fri</h6>
                  <span>10.00am-1.00pm</span>
                  <br/>
                  <span className="mt-3">4.00pm-10.00pm</span>
                  <hr className="text-warning w-50 m-auto  mt-3"/>
                  <h6 className="mt-2">sat</h6>
                  <span>3.00pm-10.00pm</span>
                  <hr className="text-warning w-50 m-auto mt-3"/>
                  <h6>sun</h6>
                  <span>we are closed</span>
                </Card.Text>
                <button type="button" class="btn btn-warning text-light border-0 p-2  mt-4">MAKE A RESERVATION</button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-6">
          <Card className="text-center bg-dark text-light mt-5">
              <Card.Body>
                <Card.Title>Drop us line</Card.Title>
                
                <Card.Text>
                <p>Don't be shy.Let us Konw if you have any <br/>Question!</p>
                <button type="button" class="btn btn-warning text-light border-0 p-2  mt-4">Contact Us</button>
                 
                </Card.Text>
                <Card.Text>
                <h2>Our Newsletter</h2>
                <p>Dialogues is an essential part of any script</p>
                

                <input type="text" placeholder="First Name" className="bg-dark text-light"/>
                <br/><br/>
                <input type="text" placeholder="Last Name" className="bg-dark text-light"/>
                <br/><br/>
                <input type="email" placeholder="Email" className="bg-dark text-light"/>
                <br/><br/>
                <button type="button" class="btn btn-warning text-light border-0 p-2  w-50 mt-4">Contact Us</button>

                 
                </Card.Text>
               
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
