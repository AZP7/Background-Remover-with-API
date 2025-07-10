import React from 'react'
import bgImage from '../assets/Images/BackGround Image.jpg'
import { RemoveBG } from '../API/API';


const handleFiles = (event) => {
  const file = event.target.files[0];
  if(!file){
    console.log("No file selected");
    return;
  }
  if (file.type.startsWith('image/')) {
    RemoveBG(file); // Send the file to the API handler
    console.log("Selected file:", file.name);
    // Here you can add the logic to handle the file, e.g., upload it or process it
  } else {
    console.log("Selected file is not an image");
    event.target.value = ''; // Clear the input if the file is not an image
  }
}
function Section() {
  return (
    <>
        <main className='col-12'>
              <div className="image_container">
                <img src={bgImage} alt="Background" className='img-fluid' /> 
              </div>
              <div className="mb-3 text-light">
                <label htmlFor="formFile" className="form-label">Upload an image</label>
                <input className="form-control" type="file" id="formFile" accept="image/*" onChange={(event)=>handleFiles(event)}/>
              </div>
        </main>
    </>
)
}

export default Section
