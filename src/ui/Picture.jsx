import CardСover from "./CardCover";

function Picture({ id, img, onClick, numberPictureOpen, position }) {
  if (!numberPictureOpen.length) return <CardСover onClick={onClick} />;
  else {
    return (
      <>
        {numberPictureOpen.map((el) => {
          if (el === position) {
            return (
              <div className="pictureBox-closes" onClick={onClick} key={el}>
                <img src={img} className="picture" alt=""></img>
              </div>
            );
          } else {
            return <CardСover onClick={onClick} key={el} />;
          }
        })}
      </>
    );
  }
}

export default Picture;
