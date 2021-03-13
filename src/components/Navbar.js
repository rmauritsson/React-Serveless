import { Link } from "react-router-dom";
import {
  Accent,
  StyledLinkButton,
  StyledNavbar,
  StyledNavItems,
  StyleNavBrand,
} from "../styled/Navbar";

const Navbar = () => {
  return (
    <StyledNavbar>
      <StyleNavBrand>
        <Link to="/">
          Learn.Build.<Accent>Type</Accent>
        </Link>
      </StyleNavBrand>
      <div>
        <StyledNavItems>
          <li>
            <StyledLinkButton to="/">Home</StyledLinkButton>
          </li>
          <li>
            <StyledLinkButton to="/highScores">High Scores</StyledLinkButton>
          </li>
        </StyledNavItems>
      </div>
    </StyledNavbar>
  );
};

export default Navbar;
