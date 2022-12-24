import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Board from "../components/Board";
import Button from "../components/Button";
import "../index.css";
import BackArrow from "../arrow_back_ios.svg";
import Xlogo from "../Xlogo.svg";
import io from "socket.io-client";
import { SERVER_ROUTE } from "../utils";
import axios from "axios";

function Play() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("username");
  const { id } = useParams();
  const player1 = id.split("-")[0];
  const player2 = id.split("-")[1];
  const opponent = player1 === user ? player2 : player1;
  const [turn, setTurn] = useState(false);
  const [board, setBoard] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const [winner, setWinner] = useState("");
  const [played, setPlayed] = useState(false);
  const [originalBoard, setOriginalBoard] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);

  const getGame = () => {
    axios
      .get(`${SERVER_ROUTE}/game/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setTurn(res.data.game.turn);
        setWinner(res.data.game.winner);
        setBoard(res.data.game.board);
        setOriginalBoard(res.data.game.board);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleClick = (row, col) => {
    if (turn === user && winner === "") {
      const newBoard = originalBoard.map((row) => [...row]);
      if (newBoard[row][col] !== "") {
        return;
      }
      newBoard[row][col] = user;
      setPlayed(true);
      setBoard(newBoard);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (winner !== "") {
      navigate("/newgame");
      return;
    }
    if (!played) return;
    if (turn !== user) return;
    axios
      .put(
        `${SERVER_ROUTE}/game/${id}`,
        {
          board: board,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        setTurn(res.data.game.turn);
        setWinner(res.data.game.winner);
        setBoard(res.data.game.board);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    const socket = io.connect(SERVER_ROUTE, {
      auth: { token },
    });
    socket.on("connect", () => {
      getGame();
    });
    socket.on("game update", (data) => {
      if (data.id === id) getGame();
    });
    return () => {
      socket.disconnect();
    };
  }, [token, id]);

  return (
    <div>
      <img
        src={BackArrow}
        alt="Back"
        className="back-arrow"
        onClick={() => navigate("/games")}
      />
      <p className="title title-game">{`Game with ${opponent}`}</p>
      <p className="piece">Your Piece</p>
      <img src={Xlogo} alt="X" className="piece-logo" />
      <p className="board-label">
        {winner === ""
          ? turn === user
            ? "Your Move"
            : "Their Move"
          : winner === user
          ? "You Won!"
          : winner === opponent
          ? "You Lost!"
          : "It's a Draw!"}
      </p>
      <Board
        board={board}
        handleClick={handleClick}
        user={user}
        opponent={opponent}
      />
      <div className="btn-wrapper">
        <Button
          text={
            winner === ""
              ? turn === user
                ? "Submit"
                : `Waiting for ${opponent}`
              : "Start another game"
          }
          styling={turn === opponent ? "btn btn-disabled" : "btn"}
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
}

export default Play;
