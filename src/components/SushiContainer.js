import React from "react";
import MoreButton from "./MoreButton";
import Sushi from"./Sushi"
let placement=0

function SushiContainer({sushi}) {

  /*   let sushiObject = {
    id : sushi.id,
    img_url : sushi.img_url,
    price : sushi.price,
    name : sushi.name
  } */
  let newSushiset = []

  sushi.map(object => (
        newSushiset.push(object)
   ))
   const fourSushi = newSushiset.slice(placement,placement+4)
  console.log(newSushiset.slice(0,4))
  
  
  function onButtonClick(isToggled){
     placement++ 
  }

  return (
    <div className="belt">
      {/* Render Sushi components here! */}
      {fourSushi.map(object => (
        <Sushi id={object.id} img_url={object.img_url} price={object.price} name={object.name}/>
 
      ))}
      <MoreButton onButtonClick={onButtonClick}/>
    </div>
  );
}

export default SushiContainer;
