import styled from "@emotion/styled";
import { ABOUT_ITEM } from "../constants/aboutItem";

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const GridItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2em;
  margin: 1em 0;
`;

const IconWrapper = styled.div`
  svg {
    width: 30px;
    height: 30px;

    @media (max-width: 768px) {
      width: 20px;
      height: 20px;
    }
  }
`;

function About() {
  return (
    <StyledGrid>
      {ABOUT_ITEM.map(({ id, id_kr, icon: Icon, content }) => (
        <GridItemContainer key={id}>
          <IconWrapper>
            <Icon />
          </IconWrapper>
          <div>
            <span style={{ fontWeight: 700 }}>{id_kr}</span>
            <p>{content}</p>
          </div>
        </GridItemContainer>
      ))}
    </StyledGrid>
  );
}

export default About;
