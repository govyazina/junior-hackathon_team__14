import { useEffect } from "react";
import Picture from "../ui/Picture";

function GamingField({ pictureLayout, numberPictureOpen, dispatch }) {
  useEffect(
    function () {
      if (numberPictureOpen.length)
        numberPictureOpen.forEach((element) => {
          console.log(pictureLayout[element]);
        });
    },
    [numberPictureOpen]
  );

  return (
    <div>
      {pictureLayout.map((picture) => (
        <Picture
          key={picture.position}
          id={picture.id}
          img={picture.img}
          position={picture.position}
          numberPictureOpen={numberPictureOpen}
          onClick={() => {
            dispatch({ type: "pictureOpen", payload: picture.position });
          }}
        ></Picture>
      ))}
    </div>
  );
}

export default GamingField;
