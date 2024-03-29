import React from 'react'

export default function AddOutfit() {
  return (
    <>
  <h3 className="heads">
    Outfit -- <b id="addCarousel">Add a Outfit</b>
  </h3>
  <br /> <br />
  <h2>Add Outfit</h2>
  <br />
  <form method="post" id="addfits">
    <label htmlFor="file-upload" className="custom-file-upload">
      Add <br /> Outfit Photo
    </label>
    <input id="file-upload" type="file" /> <br /> <br />
    <p className="fields">Outfit Name</p> <input type="text" name="" id="" />
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
    <input type="button" id="addOutfit" defaultValue="Add Outfit" />
  </form>
</>

  )
}
