import { usePicture } from "../context/PictureContext";
import CardСover from "./CardCover";

function Picture({ position, open, img }) {
  const { dispatch } = usePicture();
  return open ? (
    <div
      className="pictureBox-open"
      onClick={() => {
        dispatch({ type: "pictureOpen", payload: [position] });
      }}
      key={position}
    >
      <img src={img} className="picture" alt=""></img>
    </div>
  ) : (
    <CardСover
      onClick={() => {
        dispatch({ type: "pictureOpen", payload: [position] });
      }}
      key={position}
    />
  );
}

export default Picture;
