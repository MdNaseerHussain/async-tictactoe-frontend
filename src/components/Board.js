import "./Board.css";
import BlankLogo from "../BlankLogo.svg";
import Ologo from "../Ologo.svg";
import Xlogo from "../Xlogo.svg";

function Board() {
  return (
    <table id="board">
      <tr>
        <td>
          <img src={Xlogo} alt="X" />
        </td>
        <td>
          <img src={Ologo} alt="O" />
        </td>
        <td></td>
      </tr>
      <tr>
        <td>
          <img src={BlankLogo} alt="" />
        </td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td><img src={BlankLogo} alt="" /></td>
        <td></td>
        <td></td>
      </tr>
    </table>
  );
}

export default Board;
