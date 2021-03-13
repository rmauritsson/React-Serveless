import { useScore } from "../context/ScoreContext";
import { StyledLinkButton } from "../styled/Navbar";

const GameOver = ({ history }) => {
  const [score, setScore] = useScore();

  if (score === -1) {
    history.push("/");
  }
  return (
    <div className="game__over">
      <h1>Game Over</h1>
      <p>{score}</p>
      <StyledLinkButton to="/">Go Home</StyledLinkButton>
      <StyledLinkButton to="/game">Play Again</StyledLinkButton>
    </div>
  );
};

export default GameOver;
