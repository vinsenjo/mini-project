import React from "react";

export default function AlbumEvent() {
 
    function handleImage(value : any){
        console.log(value.target.value)  
    } 
    const handleClick = (value: any) => {
       console.log(value.target.value);  
      }
    return(
        <div className="flex flex-col">
            <input type="file" name="file" id="" onChange={handleImage}/>
            {/* <button type="submit" onClick={handleClick}>Upload</button> */}
        </div>
    )
}