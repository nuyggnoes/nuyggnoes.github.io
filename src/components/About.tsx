import styled from "@emotion/styled";
import { ABOUT_ITEM } from "../constants/aboutItem";

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const GridItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin: 1rem 0;
`;

function About() {
  return (
    <div>
      <StyledGrid>
        {ABOUT_ITEM.map(({ id, id_kr, icon: Icon, content }) => (
          <GridItemContainer key={id}>
            <Icon size={30} />
            <div>
              <span style={{ fontWeight: 700 }}>{id_kr}</span>
              <p>{content}</p>
            </div>
          </GridItemContainer>
        ))}
      </StyledGrid>
    </div>
  );
}

export default About;
