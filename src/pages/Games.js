import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import GameCard from "../components/GameCard";
import Button from "../components/Button";
import "../index.css";
import AddIcon from "../add.svg";
import io from "socket.io-client";
import { SERVER_ROUTE } from "../utils";
import axios from "axios";
import Loader from "../components/Loader";

function Games() {
  const [games, setGames] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [loading, setLoading] = useState(true);

  const getGames = () => {
    axios
      .get(`${SERVER_ROUTE}/games`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        const gamesList = res.data.games;
        setGames([...gamesList].reverse());
        setLoading(false);
      })
      .catch(() => {
        navigate("/login");
      });
  };

  useEffect(() => {
    getGames();
    const socket = io.connect(SERVER_ROUTE, {
      auth: { token },
    });
    socket.on("game update", () => {
      getGames();
    });
    return () => {
      socket.disconnect();
    };
  }, [token]);

  return loading ? (
    <Loader />
  ) : games.length > 0 ? (
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
