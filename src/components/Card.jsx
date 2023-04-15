import React from 'react'
import { useState } from "react";
import { BiX } from "react-icons/bi"

const Card = () => {
  
    const [images, setImages] = useState([]);

    const handlefile = (e) => {
      const selectedfile = e.target.files;
      const selectedfile_array = Array.from(selectedfile) 
      setImages((previousImage) => previousImage.concat(selectedfile_array))
    }
  
    console.log(images)
  
    const handleSubmit = (e) => {
        e.preventDefault();
        setImages([]);
    }
  
    return (
      <div className="flex flex-col py-10 items-center gap-y-6">
        <div className='w-full md:w-3/4 border rounded-3xl border-none shadow-lg p-4 bg-white gap-y-8'>
          <div className="p-4">
            <h1 className="text-4xl">Upload Photos</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-wrap items-center justify-first">
              <div className="p-4">
  
                <input id="file"  onChange={handlefile}  style={{
                  color: "transparent",
                }} className="file:bg-gradient-to-b file:from-blue-500 file:to-blue-600 file:px-6 file:py-3 file:m-5 file:border-none file:rounded-full file:text-white file:cursor-pointer file:shadow-lg file:shadow-blue-600/50 bg-gradient-to-br from-white to-white text-white/80 rounded-full cursor-pointer border border-blue-600" type="file" name="images" multiple accept="image/png image/jpeg"/>
              </div>
              <div>
                <button className="border border-none rounded-full px-6 py-3 text-white bg-blue-600" type="submit">Upload</button>
              </div>
            </div>
            <div>
              <ul className="flex flex-wrap items-center justify-first px-4 mb-6 text-gray-900 dark:text-white">
                {
                  images.map((image, index) => (
  
                    <li className="w-full md:w-1/6  mr-4 flex justify-between items-center p-3 rounded-xl border border-none bg-blue-600" key={index}>
                      {image.name.length < 18 ? image.name : image.name.slice(1, 18) + "..."}
                      <BiX className="border border-white rounded-lg bg-red-500 " onClick={() => setImages(images.filter((e) => e !== image))}>delete</BiX>
                    </li>
  
                  ))
                }
              </ul>
            </div>
  
          </form>
        </div>
      </div>
    );
}
  


export default Card