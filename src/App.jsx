import "./App.css";
import Header from "./ui/Header";
import StartGame from "./pages/StartGame";
import GamingField from "./pages/GamingField";
import Victory from "./pages/Victory";
import { usePicture } from "./context/PictureContext";

function App() {
  const { gameStarted, isOpen } = usePicture();

  return (
    <>
      <Header />
      {!gameStarted && <StartGame />}
      {gameStarted && <GamingField />}
      {/* {isOpen && <Victory />} */}
    </>
  );
}

export default App;
