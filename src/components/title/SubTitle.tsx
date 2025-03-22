import styled from "@emotion/styled";

const StyledTitle = styled.h1`
  position: relative;
  display: inline-block;
  font-size: 2em;
  font-weight: 800;
  margin-bottom: 4rem;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 10px;
    width: 105%;
    height: 12px;
    background-color: #3a7bd5;
    opacity: 0.5;
  }
`;

function SubTitle({ text }: { text: string }) {
  return (
    <>
      <StyledTitle>{text}</StyledTitle>
    </>
  );
}

export default SubTitle;
