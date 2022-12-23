import { useNavigate } from "react-router-dom";
import Button from "./Button";
import "./GameCard.css";

function GameCard({ game }) {
  const { id, turn, player1, player2, date } = game;
  const user = localStorage.getItem("username");
  const opponent = user === player1 ? player2 : player1;
  const opponentTitleCase = opponent
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
  const status =
    turn === user
      ? `${opponentTitleCase} just made their move! It’s your turn to play now.`
      : `You've made your move! Waiting for ${opponentTitleCase}.`;
  const navigate = useNavigate();

  const getDaySuffix = (day) => {
    if (day > 3 && day < 21) return "th";
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  const formatDate = (date) => {
    const dateObj = new Date(date);
    const day = dateObj.getDate();
    const month = dateObj.toLocaleString("default", { month: "long" });
    const year = dateObj.getFullYear();
    const hours = dateObj.getHours();
    const minutes = dateObj.getMinutes();
    const AmPm = hours >= 12 ? "pm" : "am";
    const hours12 = hours % 12 || 12;
    const minutesFormatted = minutes < 10 ? `0${minutes}` : minutes;
    return `${day}${getDaySuffix(
      day
    )} ${month} ${year}, ${hours12}:${minutesFormatted}${AmPm}`;
  };

  return (
    <div className="card">
      <p className="card-title">{`Game with ${opponentTitleCase}`}</p>
      <p className="card-status">{`${status.split("!")[0]}!`}</p>
      <p className="card-status">{status.split("!")[1]}</p>
      <p className="card-time">{formatDate(date)}</p>
      <Button
        text="Play!"
        styling="btn btn-game"
        onClick={() => navigate(`/play/${id}`)}
      />
    </div>
  );
}

export default GameCard;
