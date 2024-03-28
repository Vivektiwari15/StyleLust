import React from 'react'

export default function DeleteCarousel() {
  return (
    <>
    <h3 className="heads">
      Carousel -- <b id="addCarousel">Delete a Photo</b>{" "}
    </h3>
    <br /> <br />
    <h2>Delete image from Carousel</h2>
    <br />
    <div id="imgs">
      <div className="gallery">
        <img src="../Outfits/1.png" alt="Cinque Terre" width={600} height={400} />
        <div className="desc">
          <button id="btnDelete">Delete</button>
        </div>
      </div>
      <div className="gallery">
        <img src="../Outfits/2.png" alt="Forest" width={600} height={400} />
        <div className="desc">
          <button id="btnDelete">Delete</button>
        </div>
      </div>
      <div className="gallery">
        <img src="../Outfits/3.png" alt="Forest" width={600} height={400} />
        <div className="desc">
          <button id="btnDelete">Delete</button>
        </div>
      </div>
      <div className="gallery">
        <img src="../Outfits/3.png" alt="Forest" width={600} height={400} />
        <div className="desc">
          <button id="btnDelete">Delete</button>
        </div>
      </div>
      <div className="gallery">
        <img src="../Outfits/3.png" alt="Forest" width={600} height={400} />
        <div className="desc">
          <button id="btnDelete">Delete</button>
        </div>
      </div>
      <div className="gallery">
        <img src="../Outfits/3.png" alt="Forest" width={600} height={400} />
        <div className="desc">
          <button id="btnDelete">Delete</button>
        </div>
      </div>
      <div className="gallery">
        <img src="../Outfits/3.png" alt="Forest" width={600} height={400} />
        <div className="desc">
          <button id="btnDelete">Delete</button>
        </div>
      </div>
      <div className="gallery">
        <img src="../Outfits/3.png" alt="Forest" width={600} height={400} />
        <div className="desc">
          <button id="btnDelete">Delete</button>
        </div>
      </div>
    </div>
  </>  
  )
}
