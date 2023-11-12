import "./App.css";
import StartGame from "./pages/StartGame";
import GamingField from "./pages/GamingField";
import Victory from "./pages/Victory";
import { usePicture } from "./context/PictureContext";

function App() {
  const { gameStarted, isGameOver } = usePicture();

  return (
    <>
      {!gameStarted && !isGameOver && <StartGame />}
      {gameStarted && !isGameOver && <GamingField />}
      {gameStarted && isGameOver && <Victory />}
    </>
  );
}

export default App;
