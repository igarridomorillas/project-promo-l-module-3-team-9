import React from 'react';
import PhotoCard from "./PhotoCard";
import Form from "./Form";

function Main(){
    return(
 <main className="mainProfile mainProfile__wrapper">
{/* <div className="mainProfile__wrapper"> */}
        <PhotoCard />
        <Form/>
 {/* </div> */}
    </main>
    )
}

export default Main;
  