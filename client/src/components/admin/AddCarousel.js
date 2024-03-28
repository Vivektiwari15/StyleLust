import React from 'react'

export default function AddCarousel() {
  return (
    <>
  <h3 className="heads">
    Carousel -- <b id="addCarousel">Add a Photo</b>{" "}
  </h3>
  <br /> <br />
  <h2>Add image to Carousel</h2> <br />
  <form id="file-upload-form" className="uploader">
    <input
      style={{ visibility: "hidden" }}
      id="file-upload"
      type="file"
      name="fileUpload"
      accept="image/*"
    />
    <label htmlFor="file-upload" id="file-drag">
      <img id="file-image" src="#" alt="Preview" className="hidden" />
      <div id="start">
        <i className="fa fa-download" aria-hidden="true" />
        <div>Select a file or drag here</div>
        <div id="notimage" className="hidden">
          Please select an image
        </div>
        <span id="file-upload-btn" className="btn btn-primary">
          Select a file
        </span>
      </div>
    </label>
  </form>
</>
  )
}

