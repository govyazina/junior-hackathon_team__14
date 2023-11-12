import { useEffect } from "react";
import Picture from "../ui/Picture";
import { usePicture } from "../context/PictureContext";
import Button from "../ui/Button";

function GamingField() {
  const { numberPictureOpen, pictureLayout, dispatch, moves } = usePicture();
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
    <main>
      <div className="wrapper">
        <div className="main__wrapper">
          {/* <div className="main__header">
            <div className="turns">{`Ход ${moves}`}</div>
            <Button
              class="resetBtn"
              onClick={() => dispatch({ type: "reset" })}
            >
              <svg
                fill="#696061"
                xmlns="http:www.w3.org/2000/svg"
                height="48"
                viewBox="0 -960 960 960"
                width="48"
              >
                <path d="M481.662-180.001q-124.748 0-212.435-87.67-87.687-87.669-87.687-212.268t87.687-212.329q87.687-87.731 212.312-87.731 81.922 0 145.153 35.654 63.231 35.654 106.384 97.578v-133.232h45.384v225.537H552.924v-45.384h157.999q-36.077-60.769-94.692-97.769-58.616-37-134.692-37-106.757 0-180.686 73.916t-73.929 180.654q0 106.737 73.971 180.699 73.971 73.961 180.787 73.961 81.318 0 148.395-46.538 67.077-46.539 93.692-123h46.999q-27.846 96.922-107.964 155.922-80.117 59-181.142 59Z" />
              </svg>
            </Button>
          </div> */}
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
