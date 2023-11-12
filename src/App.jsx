import "./App.css";
import StartGame from "./pages/StartGame";
import GamingField from "./pages/GamingField";
import Victory from "./pages/Victory";
import Navigate from "./ui/Navigate";
import { usePicture } from "./context/PictureContext";

function App() {
  const { gameStarted, isGameOver } = usePicture();

  return (
    <div className="main__wrapper">
      {!gameStarted && !isGameOver && <StartGame />}
      {gameStarted && !isGameOver && <Navigate />}
      {gameStarted && !isGameOver && <GamingField />}
      {gameStarted && isGameOver && <Victory />}
    </div>
  );
}

export default App;
