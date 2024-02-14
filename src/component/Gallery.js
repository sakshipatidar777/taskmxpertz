import React from "react";
import "./Gallery.css";
import Card from "react-bootstrap/Card";

function Gallery() {
  const gallery = [
    {
      price: "$26.95",
      title: "Grilled Fillet",
      decription:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium ,totam rem aperiam,eaque ipsa ab illo inventore veritatis et quasi architechtoeague ipsa ab illo inventore.",
    },
    {
      img: "./images/Grilled Fillet.jpg",
    },

    {
      price: "$53.3",
      title: "Chicken Brest",
      decription:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium ,totam rem aperiam,eaque ipsa ab illo inventore veritatis et quasi architechtoeague ipsa ab illo inventore.",
    },
    {
        img: "./images/Chiken.jpg",
      },
  
    {
      price: "$40.5",
      title: "King Crab",
      decription:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium ,totam rem aperiam,eaque ipsa ab illo inventore veritatis et quasi architechtoeague ipsa ab illo inventore.",
    },
    {
        img: "./images/King Crab.jpg",
      },

      
    {
      price: "$40.5",
      title: "Sea Trout",
      decription:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium ,totam rem aperiam,eaque ipsa ab illo inventore veritatis et quasi architechtoeague ipsa ab illo inventore.",
    },
    {
        img: "./images/King Crab.jpg",
      },
  
    {
      price: "$23.3",
      title: "Roasted Bakra",
      decription:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium ,totam rem aperiam,eaque ipsa ab illo inventore veritatis et quasi architechtoeague ipsa ab illo inventore.",
    },
    {
        img: "./images/SeaTrout.jpg",
      },
  
    {
      price: "$23.3",
      title: "Roasted Bakra",
      decription:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium ,totam rem aperiam,eaque ipsa ab illo inventore veritatis et quasi architechtoeague ipsa ab illo inventore.",
    },
    {
        img: "./images/RoastedBakera.jpg",
      },
  
  ];

  return (
    <>
      <div className="container-fluid bg-dark mt-5">
        <div className="container">
          <div className="row ">
            {gallery.map((data, i) => {
              return (
                <div className="col-md-4 " key={i}>
                  <div className="card text-center cards">
                    <div className="card-body">
                      <span className="text-warning">{data.price}</span>
                      <h5 className="card-title p-3">{data.title}</h5>
                      <p className="card-text">{data.decription}</p>
                      <div>
                      <Card.Img variant=" top w-75 h-75 m-auto mb-5 mt-0 img-fluid " src={data.img} />
                      </div>
                    </div>
                   
                  </div>
                 
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallery;
