import "./App.css";
import Navigate from "./ui/Navigate.jsx";
import StartGame from "./pages/StartGame";
import GamingField from "./pages/GamingField";
import Victory from "./pages/Victory";
import { usePicture } from "./context/PictureContext";

function App() {
  const { gameStarted, isGameOver } = usePicture();

  return (
      <div className="main__wrapper">
         <Navigate />
        {!gameStarted && <StartGame />}
        {isGameOver && <Victory />}
        {gameStarted && <GamingField />}
          <Victory/>
      </div>
  );
}

export default App;
