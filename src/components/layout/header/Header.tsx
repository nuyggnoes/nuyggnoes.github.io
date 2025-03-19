import NavItem from "../nav/NavItem";
import { NAV_ITEMS } from "../../../constants/navItem";
import { StyledHeader, Container, MainLink, NavContainer } from "./Header.styles";

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <MainLink href="/">Lim SeongGyun</MainLink>
        <NavContainer>
          {NAV_ITEMS.map((item, index) => (
            <NavItem key={index} text={item.label} />
          ))}
        </NavContainer>
      </Container>
    </StyledHeader>
  );
}
