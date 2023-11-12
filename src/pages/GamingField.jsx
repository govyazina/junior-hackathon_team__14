import { useEffect } from "react";
import Picture from "../ui/Picture";
import { usePicture } from "../context/PictureContext";

function GamingField() {
  const { numberPictureOpen, pictureLayout, dispatch } = usePicture();
  useEffect(
    function () {
      if (numberPictureOpen.length < 2) return;
      else {
        console.log(numberPictureOpen.length);
        const onePicturePosition = pictureLayout[numberPictureOpen[0]].position;
        const twoPicturePosition = pictureLayout[numberPictureOpen[1]].position;
        const onePictureId = pictureLayout[numberPictureOpen[0]].id;
        const twoPictureId = pictureLayout[numberPictureOpen[1]].id;
        if (onePictureId === twoPictureId) {
          dispatch({
            type: "picturesMatched",
            payload: [onePicturePosition, twoPicturePosition],
          });
        } else {
          setTimeout(() => {
            dispatch({
              type: "pictureClose",
              payload: [onePicturePosition, twoPicturePosition],
            });
          }, 2000);
        }
      }
    },
    [numberPictureOpen, dispatch, pictureLayout]
  );

  return (
    <div className="gamingField">
      {pictureLayout.map((picture) => (
        <Picture
          key={picture.position}
          position={picture.position}
          open={picture.open}
          img={picture.img}
        ></Picture>
      ))}
    </div>
  );
}

export default GamingField;
