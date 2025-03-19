import styled from "@emotion/styled";
import { ABOUT_ITEM } from "../constants/aboutItem";

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* gap: 4rem; */
`;

const GridItemContainer = styled.div`
  /* background-color: #f5f5f5; */
  /* padding: 1.5rem; */
  text-align: center;
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  gap: 2rem;
  margin: 1rem 0;
`;

function About() {
  return (
    <div>
      <StyledGrid>
        {/* {[...Array(6)].map((_, index) => (
          <GridItemContainer key={index}>
            <FaUser size={32} />
            <p>User {index + 1}</p>
          </GridItemContainer>
        ))} */}
        {ABOUT_ITEM.map(({ id, icon: Icon, content }) => (
          <GridItemContainer key={id}>
            <Icon size={32} />
            <p>{content}</p>
          </GridItemContainer>
        ))}
      </StyledGrid>
    </div>
  );
}

export default About;
