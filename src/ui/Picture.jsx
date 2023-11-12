import { usePicture } from "../context/PictureContext";
import CardСover from "./CardCover";

function Picture({ position, open, img, pictureOpen }) {
  const { dispatch } = usePicture();
  return open ? (
    <div
      className="cell active"
      onClick={() => {
        dispatch({ type: "pictureOpen", payload: [position] });
      }}
      key={position}
    >
      <img src={img} className="pictureImg" alt=""></img>
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
