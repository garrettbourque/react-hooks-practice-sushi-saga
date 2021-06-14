import React from "react";

function MoreButton({onButtonClick}) {
  const [isToggled, setIsToggled] = useState(false)
  onButtonClick(isToggled)
  return <button onClick={isToggled ? setIsToggled(true) : null}>More sushi!</button>;
}

export default MoreButton;
