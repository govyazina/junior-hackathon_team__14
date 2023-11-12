import { useEffect } from "react";
import Picture from "../ui/Picture";
import { usePicture } from "../context/PictureContext";
import Navigate from "../ui/Navigate";

function GamingField() {
  const { numberPictureOpen, pictureLayout, isShowHistory, dispatch } =
    usePicture();
  useEffect(
    function () {
      if (numberPictureOpen.length < 2) return;
      else {
        const onePicturePosition = pictureLayout[numberPictureOpen[0]].position;
        const twoPicturePosition = pictureLayout[numberPictureOpen[1]].position;
        const onePictureId = pictureLayout[numberPictureOpen[0]].id;
        const twoPictureId = pictureLayout[numberPictureOpen[1]].id;
        if (onePictureId === twoPictureId) {
          dispatch({
            type: "picturesMatched",
            payload: [onePicturePosition, twoPicturePosition],
          });
        } else if (!isShowHistory) {
          setTimeout(() => {
            dispatch({
              type: "pictureClose",
              payload: [onePicturePosition, twoPicturePosition],
            });
          }, 1000);
        } else return;
      }
    },
    [numberPictureOpen, dispatch, pictureLayout, isShowHistory]
  );

  return (
    <main>
      <div className="wrapper">
        <div className="main__wrapper">
          <Navigate />
          <div className="board">
            {pictureLayout.map((picture) => (
              <Picture
                key={picture.position}
                position={picture.position}
                open={picture.open}
                img={picture.img}
              ></Picture>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default GamingField;
