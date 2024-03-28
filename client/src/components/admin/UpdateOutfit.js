import React from 'react'

export default function UpdateOutfit() {
  return (
    <>
    <h3 className="heads">
      
      Outfit -- <b id="addCarousel">Update a Outfit</b>
    </h3>
    <br /> <br />
    <h2>Update Outfit</h2>
    <br />
    {/* ------------------------------------------------------------------------ */}
    <form method="post">
      <input type="text" placeholder="Enter Id or Outfit Name" id="search" />
      <input type="button" defaultValue="Search" id="searchBtn" />
    </form>
    <br />
    <div className="photo">
      <img src="../Outfits/1.png" alt="" width={300} className="img" />
      <form method="post">
        <p>Outfit Name:</p> <input type="text" />
        <span> Update Outfit photo </span>
        <input  type="file" />
        <br /> <br />
        <div id="feilds">
          <p>
            Upper Wear: <input type="text" name="" id="" />
          </p>
          <p>
            Inner Wear: <input type="text" name="" id="" />
          </p>
          <p>
            Bottom Wear: <input type="text" name="" id="" />
          </p>
          <p>
            Watch: <input type="text" name="" id="" />
          </p>
          <p>
            Shoes/sneakers: <input type="text" name="" id="" />
          </p>
          <p>
            Bracelet: <input type="text" name="" id="" />
          </p>
          <p>
            Necklace: <input type="text" name="" id="" />
          </p>
          <p>
            Accessories1: <input type="text" name="" id="" />
          </p>
          <p>
            Accessories2: <input type="text" name="" id="" />
          </p>
          <p>
            Accessories3: <input type="text" name="" id="" />
          </p>
        </div>
        <br />
        <br />
        <input type="button" id="UpdateOutfit" defaultValue="Update Outfit" />
      </form>
    </div>
  </>
  
  )
}
