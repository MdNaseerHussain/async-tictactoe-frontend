import { useNavigate } from "react-router-dom";
import GameCard from "../components/GameCard";
import Button from "../components/Button";
import "../index.css";
import AddIcon from "../add.svg";
import io from "socket.io-client";
import { SERVER_ROUTE } from "../utils";

const token = localStorage.getItem("token");
const socket = io.connect(SERVER_ROUTE, {
  auth: { token },
});

function Games() {
  const games = [1, 1, 1, 1];
  const navigate = useNavigate();

  socket.on("connect", () => {
    console.log("Connected to server on games page");
  });

  return games.length > 0 ? (
    <div>
      <p className="title">Your Games</p>
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
      <Button
        text="New Game"
        styling="btn-icon"
        image={AddIcon}
        onClick={() => navigate("/newgame")}
      />
    </div>
  ) : (
    <div>
      <p className="title">Your Games</p>
      <p className="game-title">
        No Games
        <br />
        Found
      </p>
      <Button
        text="Start a new game"
        styling="btn"
        onClick={() => navigate("/newgame")}
      />
    </div>
  );
}

export default Games;
