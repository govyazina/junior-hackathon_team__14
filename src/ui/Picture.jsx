// import "../../src/";

function Picture({ id, img, onClick, numberPictureOpen, position }) {
  // if (!numberPictureOpen.length)
  //   return <div className="pictureBox-closes"></div>;
  return (
    <div onClick={onClick} className="pictureBox">
      <img src={img} className="picture" alt=""></img>
    </div>
  );
  // numberPictureOpen.map((el) => {

  //   return (
  //     <div onClick={onClick} className="pictureBox">
  //       <img src={img} className="picture" alt=""></img>
  //     </div>
  //   );
  // });
}

export default Picture;
