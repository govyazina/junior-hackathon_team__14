import { useEffect } from "react";
import Picture from "../ui/Picture";

function GamingField({ pictureLayout, numberPictureOpen, dispatch }) {
  useEffect(
    function () {
      if (numberPictureOpen.length < 2) return;
      else {
        const onePictureId = pictureLayout[numberPictureOpen[0]].id;
        const twoPictureId = pictureLayout[numberPictureOpen[1]].id;
        if (onePictureId === twoPictureId) {
          dispatch({
            type: "picturesMatched",
            payload: [
              pictureLayout[numberPictureOpen[0]],
              pictureLayout[numberPictureOpen[1]],
            ],
          });
        }
        dispatch({ type: "move" });
      }
    },
    [numberPictureOpen, dispatch, pictureLayout]
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
